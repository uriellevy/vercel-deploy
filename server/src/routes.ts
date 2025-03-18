import { Router } from "express";
import Post from "./model";

const router = Router();

// Create a new post
router.post("/posts", async (req, res) => {
  try {
    const { title, content } = req.body;
    const post = new Post({ title, content });
    await post.save();
    res.status(201).json(post);
  } catch (error) {
    res.status(400).json({ error: "Error creating post" });
  }
});

// Get all posts
router.get("/posts", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: "Error fetching posts" });
  }
});

export default router;