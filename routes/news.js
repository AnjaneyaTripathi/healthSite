
const express = require('express');
const router = express.Router();
router.get("/",(req,res) => {
    res.redirect("news.html")
})



module.exports=router;