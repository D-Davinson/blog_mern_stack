const router = require("express").Router();
const postController = require("../controllers/post.controller.js")

router.get("/", postController.allPosts);
router.post("/",postController.addPost);

router.get("/:id")

module.exports = router;
