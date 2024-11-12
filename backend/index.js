const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = 7654;

app.get("/home", (req, res) => {
    res.send("This is diet tracking system backend");
});

app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`);
});
