const express = require("express");
const mysql = require("mysql");
const app = express();
const cors = require("cors");

app.use(cors());

const database = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "fullstack_belajar"
});

database.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Database connected");
    }
});

// ambil semua data users
app.get("/api/v1/users", (req, res) => {
    console.log("Getting users data");
    database.query("SELECT * FROM users", (err, rows) => {
        if(err) throw err;
        res.json({
            status: true,
            message: "Getting users data success",
            data: rows
        });
    })
})

// menjalankan servernya di port 3001
app.listen(3001, () => {
    console.log("Server is running on port 3001");
})