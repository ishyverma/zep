import { prisma } from "@repo/db/client";
import { AddElement, CreateSpace, DeleteElement } from "@repo/zod/types";
import { Router } from "express";
import { userMiddleware } from "../../middleware/user";

export const space = Router();

space.post("/", userMiddleware, async (req, res) => {
    const parsedData = CreateSpace.safeParse(req.body)
    if(!parsedData.success) {
        res.status(400).json({
            message: "Validation Failed"
        })
        return
    }
    const { name, dimensions, mapId, thumbnail } = parsedData.data

    // If user  has not mentioned the mapId -> Means wants to create an empty space
    if (!mapId) {
        try {

            if (!dimensions) {
                res.status(400).json({
                    message: "Please send dimensions"
                })
                return
            }

            const space = await prisma.space.create({
                data: {
                    name,
                    width: parseInt(dimensions.split("x")[0]),
                    height: parseInt(dimensions.split("x")[1]),
                    creatorId: req.userId,
                    thumbnail
                }
            })

            res.json({
                spaceId: space.id
            })
            return

        } catch (e) {
            res.status(400).json({
                message: "There was some error"
            })
            return
        }
    } else {

        try {
            const map = await prisma.map.findFirst({
                where: {
                    id: mapId
                }
            })

            const mapElements = await prisma.mapElements.findMany({
                where: {
                    mapId: map?.id
                }
            })
    
            if(!map) {
                res.status(400).json({
                    message: "There is no map with this id"
                })
                return
            }
    
            const space = await prisma.space.create({
                data: {
                    name,
                    width: map.width,
                    height: map.height,
                    thumbnail: map.thumbnail,
                    creatorId: req.userId
                }
            })
    
            const spaceElement = await prisma.spaceElements.createMany({
                data: mapElements.map(e => ({
                    elementId: e.elementId,
                    spaceId: space.id,
                    x: e.x,
                    y: e.y
                }))
            })

            res.json({
                spaceId: space.id
            })
            return

        } catch (e) {
            res.status(400).json({
                message: "There was some error"
            })
            return
        }
    }
})

space.delete("/:spaceId", userMiddleware, async (req, res) => {
    const { spaceId } = req.params
    try {
        const space = await prisma.space.delete({
            where: {
                id: spaceId
            }
        })

        if(req.userId !== space.creatorId) {
            res.status(400).json({
                message: "You havent created this space"
            })
            return
        }

        res.json({
            message: "Space deleted successfully"
        })
        return

    } catch (e) {
        res.status(400).json({
            message: "There was some error"
        })
        return
    }
})

space.get("/all", userMiddleware, async (req, res) => {
    try {
        const spaces = await prisma.space.findMany({
            where: {
                creatorId: req.userId
            },
            select: {
                id: true,
                name: true,
                width: true,
                height: true,
                thumbnail: true
            }
        })

        res.json({
            spaces: spaces.map(s => ({
                id: s.id,
                name: s.name,
                dimensions: `${s.width}x${s.height}`,
                thumbnail: s.thumbnail
            }))
        })
        return

    } catch (e) {
        res.status(400).json({
            message: "There was some error"
        })
        return
    }
})

space.get("/:spaceId", userMiddleware, async (req, res) => {
    const { spaceId } = req.params
    try {
        const space = await prisma.space.findFirst({
            where: {
                id: spaceId
            }
        })

        const spaceElements = await prisma.spaceElements.findMany({
            where: {
                spaceId
            },
            select: {
                id: true,
                elementId: true,
                x: true,
                y: true,
                element: true
            }
        })

        if(!space) {
            res.status(400).json({
                message: "There is no space with this id"
            })
            return
        }
        res.json({
            dimensions: `${space.width}x${space.height}`,
            elements: spaceElements.map(e => ({
                id: e.id,
                element: e.element,
                x: e.x,
                y: e.y
            }))
        })
        return

    } catch (e) {
        res.status(400).json({
            message: "There was some error"
        })
        return
    }
})

space.post("/element", userMiddleware, async (req, res) => {
    const parsedData = AddElement.safeParse(req.body)
    if(!parsedData.success) {
        res.status(400).json({
            message: "Validation Failed"
        })
        return
    }

    const { elementId, spaceId, x, y } = parsedData.data

    try {
        const space = await prisma.space.findFirst({
            where: {
                id: spaceId
            }
        })

        if(!space) {
            res.status(400).json({
                message: "No Space exists"
            })
            return
        }

        if (x > space.width || y > space.height) {
            res.status(400).json({
                message: "Elements placed outside the space"
            })
            return
        }

        const element = await prisma.spaceElements.create({
            data: {
                spaceId,
                elementId,
                x,
                y
            }
        })


        res.json({
            message: "Element added to space"
        })
        return

    } catch (e) {
        res.status(400).json({
            message: "There was some error"
        })
        return
    }
})

space.delete("/element", userMiddleware, async (req, res) => {
    const parsedData = DeleteElement.safeParse(req.body)
    if(!parsedData.success) {
        res.status(400).json({
            message: "Validation Failed"
        })
        return
    }

    const { id } = parsedData.data
    try {
        const element = await prisma.spaceElements.delete({
            where: {
                id
            }
        })

        res.json({
            message: "Element deleted from the space"
        })
    } catch (e) {
        res.status(400).json({
            message: "There was some error"
        })
        return
    }
})