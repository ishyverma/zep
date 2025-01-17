import { prisma } from "@repo/db/client";
import { UpdateMetadataType } from "@repo/zod/types";
import { Router } from "express";
import { userMiddleware } from "../../middleware/user";

export const user = Router();

user.post("/metadata", userMiddleware, async (req, res) => {
    const parsedData = UpdateMetadataType.safeParse(req.body)
    if (!parsedData.success) {
        res.status(400).json({
            message: "Validation Failed"
        })
        return
    }

    const { avatarId } = parsedData.data

    try {
        const avatar = await prisma.avatar.findFirst({
            where: {
                id: avatarId
            }
        })

        if (!avatar) {
            res.status(404).json({
                message: "There is no such avatar"
            })
            return
        }

        const user = await prisma.user.update({
            where: {
                id: req.userId
            },
            data: {
                avatarId
            }
        })

        if (!user) {
            res.json({
                message: "There is no such user"
            })
            return
        }

        res.json({
            message: "Avatar Updated"
        })
        return
        
    } catch (e) {
        res.status(400).json({
            message: "There are some errors"
        })
        return
    }
})

user.get("/metadata/bulk", userMiddleware, async (req, res) => {
    const { ids } = req.query
    const arrId = ids?.toString().slice(1, ids.length as number - 1).split(",") 
    try {
        const users = await prisma.user.findMany({
            where: {
                id: {
                    in: arrId
                }
            },
            select: {
                id: true,
                avatarId: true
            }
        })
        res.json({
            avatars: users.map(u => ({
                userId: u.id,
                imageUrl: u.avatarId
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