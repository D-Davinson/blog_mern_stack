const postModel = require("../models/post.model.js");
const ObjectID = require("mongoose").Types.ObjectID;

//information : "req" : send by front-end to me and "res" is reciprocal


// fetch every post : post recent at first
module.exports.allPosts = (req,res) => {
    // docs => Array of Objects
    postModel.find((err,data) => {
        if(!err) return  res.status(200).send(data); else return res.status(400).send("Error to get data : ", err);
    }).sort({createdAt: -1 });
};

//fetch one post
module.exports.onePost = (req,res) => {
    if(!Object.isValid(req.params.id)) return res.status(400).send("ID unknow :", req.params.id) 

    postModel.findById(req.params.id,(err,data) =>{
        if(!err) return res.status(200).send(data); else return res.status(400).send("Error to get data : ", err);
    });
};

// search post
module.exports.searchPost = (req, res) => {
    postModel.find(
        {title:{$regex: req.params.query, $options: "i"}},
        (err,data) => {
            if(!err) return res.status(200).send(data); else return res.status(404).send("No post found :",err);
        }
    );
};

// addPost

module.exports.addPost = async (req,res) => {
    const newPost = new postModel({
        title: req.body.title,
        author: req.body.author,
        category: req.body.category,
        content: req.body.content,
    });

    try{
        const post = await newPost.save();
        return restart.status(201).json(post);
    }catch(err){
        return res.status(400).json(err)
    }
}