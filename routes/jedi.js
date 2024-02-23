import express from "express"
import { jediKnights } from "../data/characters.js";

const jediRouter = express.Router();

jediRouter.get('/',(req, res) => 
    res.render(
        "pages/force",
        {
            pageTitle: "Trust the Force!",
            subTitle: "we are the good guys!",
            className: "jedi",
            characters: jediKnights
        }
    )
)

export default jediRouter;
