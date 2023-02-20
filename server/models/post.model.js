const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            unique: true,
            maxLength: 200,
        },
        author:{
            type: String,
            maxLength: 200,
        },
        category:{
            type: String,
            maxLength: 200,
        },
        content:{
            type: String,
            maxLength: 20000,
        },
    },
    {timestamps: true}
);

module.exports = mongoose.model("posts", postSchema);