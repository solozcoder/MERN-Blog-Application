const router = require("express").Router();

// Module
const PostController = require("../controllers/PostController");
const AuthMiddleware = require("./../middleware/AuthMiddleware");

router
  .route("/upload")
  .post(AuthMiddleware.isAuthenticated, PostController.createPost);

module.exports = router;
