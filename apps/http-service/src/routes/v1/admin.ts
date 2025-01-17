import { prisma } from "@repo/db/client";
import { CreateAvatar, CreateElement, CreateMap, UpdateElement } from "@repo/zod/types";
import { Router } from "express";
import { adminMiddleware } from "../../middleware/admin";

export const admin = Router();

admin.post("/element", adminMiddleware, async (req, res) => {
    const parsedData = CreateElement.safeParse(req.body)
    if(!parsedData.success) {
        res.status(400).json({
            message: "Validation Failed"
        })
        return
    }
    const { imageUrl, height, width, static: overlap } = parsedData.data
    try {
        const element = await prisma.element.create({
            data: {
                imageUrl,
                height,
                width,
                static: overlap
            }
        })
        res.json({
            id: element.id
        })
        return
    } catch (e) {
        res.status(400).json({
            message: "There was some error"
        })
        return
    }
})

admin.put("/element/:elementId", adminMiddleware, async (req, res) => {
    const { elementId } = req.params
    const parsedData = UpdateElement.safeParse(req.body)
    if(!parsedData.success) {
        res.status(400).json({
            message: "Validation Failed"
        })
        return
    }
    const { imageUrl } = parsedData.data
    try {
        const element = await prisma.element.update({
            where: {
                id: elementId
            },
            data: {
                imageUrl
            }
        })
        res.json({
            message: "Element Updated"
        })
        return

    } catch (e) {
        res.status(400).json({
            message: "There was some error"
        })
        return
    }
})

admin.post("/avatar", adminMiddleware, async (req, res) => {
    const parsedData = CreateAvatar.safeParse(req.body)
    if(!parsedData.success) {
        res.status(400).json({
            message: "Validation Failed"
        })
        return
    }
    const { imageUrl, name } = parsedData.data
    try {
        const avatar = await prisma.avatar.create({
            data: {
                imageUrl,
                name
            }
        })
        res.json({
            avatarId: avatar.id
        })
        return
    } catch (e) {
        res.status(400).json({
            message: "There was some error"
        })
        return
    }
})

admin.post("/map", async (req, res) => {
    const parsedData = CreateMap.safeParse(req.body)
    if(!parsedData.success) {
        res.status(404).json({
            message: "Validation Failed"
        })
        return
    }
    const { dimensions, name, thumbnail, defaultElements } = parsedData.data
    try {
        const map = await prisma.map.create({
            data: {
                width: parseInt(dimensions.split("x")[0]),
                height: parseInt(dimensions.split("x")[1]),
                name,
                thumbnail
            }
        })

        await prisma.$transaction(
            defaultElements.map(e => prisma.mapElements.create({
                data: {
                    mapId: map.id,
                    elementId: e.elementId,
                    x: e.x,
                    y: e.y
                }
            }))
        )
    
        res.json({
            id: map.id
        })
        return 

    } catch (e) {
        res.status(400).json({
            message: "There was some error"
        })
        return
    }
})