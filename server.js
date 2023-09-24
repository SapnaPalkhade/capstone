require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
 // Load environment variables

const app = express();
const PORT = process.env.PORT || 3000;
console.log('Loaded environment variables:', process.env.MONGO_URI);

// Middleware
app.use(express.json());

// Connect to MongoDB
async function connectToDatabase() {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
  }
}

// Use a middleware to ensure that the database is connected before proceeding
app.use(async (req, res, next) => {
  if (!mongoose.connection.readyState) {
    await connectToDatabase();
  }
  next();
});

// Routes
app.use('/api/users', userRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Call the function to connect to the database
connectToDatabase();
