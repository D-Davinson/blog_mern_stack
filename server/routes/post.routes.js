const router = require("express").Router();
const postController = require("../controllers/post.controller.js")

router.get("/", postController.allPosts);
router.post("/add",postController.addPost);
router.get("/:id", postController.onePost);
router.get("/search/:query", postController.searchPost);

module.exports = router;
