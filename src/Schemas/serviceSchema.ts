import {z} from "zod";

export const serviceSchema = z.object({
    gender : z.string(),
    location : z.string(),
    service : z.string(),
    requirements : z.string(),
})