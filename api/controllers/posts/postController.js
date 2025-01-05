import Post from "../../models/postModel.js";
import { errorHandler } from "../../utils/errorHandler.js";

export const newPost = async (req, res, next) => {
  const { title, content, image, tags, spotlight, categorie } = req.body;

  if (!title || !content || !image || spotlight || !tags || !categorie) {
    return res.status(400).json({
      success: false,
      message: "Veuillez fournir tous les champs requis",
    });
  }

  try {
    const newPost = new Post({
      title,
      content,
      image,
      tags,
      spotlight,
      categorie,
    });

    await newPost.save();
    return res.status(200).json({
      success: true,
      message: "Nouvel Post créé avec succès",
      post: newPost,
    });
  } catch (error) {
    next(errorHandler(error.status || 500, error.message || "Erreur Server"));
  }
};

export const getPosts = async (req, res, next) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    return res.status(200).json({
      success: true,
      posts,
    });
  } catch (error) {
    next(errorHandler(error.status || 500, error.message || "Erreur Server"));
  }
};
