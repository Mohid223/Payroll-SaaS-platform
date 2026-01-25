const express = require("express");
const db = require("./config/db");

const app = express();
app.use(express.json());

const userRoutes = require("./routes/userRoutes");
app.use("/api", userRoutes);

app.get("/", (req, res) => { 
    res.send("backend server is running ");
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});