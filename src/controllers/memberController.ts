import { RequestHandler } from "express";

export const getMemberController: RequestHandler = (req, res, next) => {
    return res.status(200).json({});
};
