import express from "express";
import { sithLords } from "../data/characters.js";

const sithRouter = express.Router();

sithRouter.get('/', (req, res) =>
    res.render(
        "pages/force",
        {
            pageTitle: "Join the Dark Side",
            subTitle: "We deal in absolutes!",
            className: "sith",
            characters: sithLords
        }
    )
)
export default sithRouter;