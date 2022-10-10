const express = require("express")
const app = express();

app.get("/", (req, res) => {
    res.status(200).json("Hello Node Docker Application.")
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Application listing of port ${port}`);
})