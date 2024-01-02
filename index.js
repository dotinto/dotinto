const express = require("express")
const app = express();

app.get("/.well-known/discord", (req,res) => {
    res.send("dh=0ae7bf9e8722323045fe92ff4fa7bb38d559c411")
})

app.listen(3000, () => console.log("Server started"))