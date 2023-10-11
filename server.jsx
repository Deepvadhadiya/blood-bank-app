const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const cors = require('cors');
const connectDB = require('./config/db.jsx');

dotenv.config();

const app = express();

connectDB();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));


// app.get("/", (req, res) => {
//     res.status(200).json({
//         message: "Welcome user",
//     })
// });

app.use("/api/v1/auth", require("./routes/authRoutes.jsx"));
app.use("/api/v1/inventory", require("./routes/inventoryRoutes.jsx"));
app.use("/api/v1/analytics", require("./routes/analyticsRoutes.jsx"));
app.use("/api/v1/admin", require("./routes/adminRoutes.jsx"));

const PORT = process.env.PORT || 8081;

app.listen(PORT, () => {
    console.log(`Node Server Running In ${process.env.NODE_MODE} Mode on Port ${process.env.PORT}`.bgBlue.white);
});