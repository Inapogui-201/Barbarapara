import express from "express";
import { getPosts, newPost } from "../../controllers/posts/postController.js";

const router = express.Router();

router.post("/new", newPost);
router.get("/", getPosts);


export default router;