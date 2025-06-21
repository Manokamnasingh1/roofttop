const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.error("Connection error:", err));

// Schema
const RequestSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  query: String,
});

const Request = mongoose.model("Request", RequestSchema);

// Route
app.post('/api/request', async (req, res) => {
  try {
    const newReq = new Request(req.body);
    await newReq.save();
    res.status(201).json({ message: "Request saved!" });
  } catch (error) {
    res.status(500).json({ message: "Failed to save request", error });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));