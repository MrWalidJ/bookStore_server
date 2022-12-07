
const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
const cors = require("cors");
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use("/books", router); // localhost:5000/books

mongoose
  .connect(
    "mongodb://localhost:27017/book-store"
  )
  .then(() => console.log("Connected To Database")) 
  .then(() => {
    app.listen(5000, ()=> console.log('Server started at port 5000')); // listen tor port
  })
  .catch((err) => console.log(err));