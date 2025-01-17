import { z } from "zod";

export const SignupType = z.object({
    username: z.string().min(4).max(40),
    password: z.string().min(5).max(40),
    type: z.enum(["admin", "user"])
})

export const SigninType = z.object({
    username: z.string().min(4).max(40),
    password: z.string().min(5).max(40)  
})

export const UpdateMetadataType = z.object({
    avatarId: z.string()
})

export const CreateSpace = z.object({
    name: z.string(),
    dimensions: z.string().regex(/^[1-9]\d{1,3}x[1-9]\d{1,3}$/).optional(),
    mapId: z.string().optional(),
    thumbnail: z.string().optional()
})

export const AddElement = z.object({
    elementId: z.string(),
    spaceId: z.string(),
    x: z.number(),
    y: z.number()
})

export const DeleteElement = z.object({
    id: z.string()
})

export const CreateElement = z.object({
    imageUrl: z.string(),
    width: z.number(),
    height: z.number(),
    static: z.boolean()
})

export const UpdateElement = z.object({
    imageUrl: z.string()
})

export const CreateAvatar = z.object({
    imageUrl: z.string(),
    name: z.string()
})

export const CreateMap = z.object({
    thumbnail: z.string(),
    dimensions: z.string(),
    name: z.string(),
    defaultElements: z.array(z.object({
        elementId: z.string(),
        x: z.number(),
        y: z.number()
    }))
})
