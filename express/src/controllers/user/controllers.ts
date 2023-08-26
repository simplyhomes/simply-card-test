import { Request, Response } from "express";
export const getAllUserMock = async (req: Request, res: Response) => {
    const src = "getAllUserMock";
    try {
        const user = ["HelloWorld"];
        return res.status(200).json({ user });
    } catch (error) {
        console.log({ src, error });
        return res.status(500).json({ error });
    }
};
