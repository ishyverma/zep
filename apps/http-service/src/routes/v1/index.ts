import { Router } from "express";
import { SigninType, SignupType } from "@repo/zod/types";
import { prisma } from "@repo/db/client";
import jwt from "jsonwebtoken";
import { user } from "./user";
import { space } from "./space";
import { admin } from "./admin";
import { userMiddleware } from "../../middleware/user";

export const router = Router()

router.use("/user", user)
router.use("/space", space)
router.use("/admin", admin)

router.get("/map/all", userMiddleware, async (req, res) => {
    try {
        const maps = await prisma.map.findMany({})
        res.json({
            maps: maps.map(m => ({
                id: m.id,
                name: m.name,
                dimensions: `${m.width}x${m.height}`,
                thumbnail: m.thumbnail
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

router.get("/me", userMiddleware, async (req, res) => {
    try {
        const user = await prisma.user.findFirst({
            where: {
                id: req.userId
            },
            omit: {
                password: true
            }
        })
        if(!user) {
            res.status(400).json({
                message: "There is no user with this id"
            })
            return
        }

        res.json({
            user
        })

    } catch (e) {
        res.status(400).json({
            message: "There was some error"
        })
        return
    }
})

router.post("/signup", async (req, res) => {
    const parsedData = SignupType.safeParse(req.body)
    if (!parsedData.success) {
        res.status(400).json({
            message: "Validation Failed"
        })
        return
    }

    const { username, password, type } = parsedData.data
    try {
        const user = await prisma.user.create({
            data: {
                username,
                password,
                type
            }
        })

        res.json({
            userId: user.id
        })
        return
    } catch (e) {
        res.status(400).json({
            message: "User already exists"
        })
        return
    }
})

router.post("/signin", async (req, res) => {
    const parsedData = SigninType.safeParse(req.body)
    if(!parsedData.success) {
        res.status(400).json({
            message: "Validation Failed"
        })
        return
    }

    const { username, password } = parsedData.data
    try {
        const user = await prisma.user.findFirst({
            where: {
                username
            }
        })

        if (!user) {
            res.status(400).json({
                message: "User not exists"
            })
            return
        }

        if (user.password !== password) {
            res.status(400).json({
                message: "Password is incorrect"
            })
            return
        }

        const token = jwt.sign({
            userId: user.id,
            type: user.type
        }, process.env.JWT_SECRET as string)

        res.json({
            token
        })
        return
    } catch (e) {
        res.status(400).json({
            message: "There were some errors"
        })
        return
    }
})

router.get("/avatars", async (req, res) => {
    try {
        const avatars = await prisma.avatar.findMany()
        res.json({
            avatars: avatars.map(a => ({
                id: a.id,
                imageUrl: a.imageUrl,
                name: a.name
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

router.get("/elements", async (req, res) => {
    try {
        const elements = await prisma.element.findMany()
        res.json({
            elements: elements.map(e => ({
                id: e.id,
                imageUrl: e.imageUrl,
                width: e.width,
                height: e.height,
                static: e.static
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