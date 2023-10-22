// // server/server.js
// const express = require('express');
// const mongoose = require('mongoose');
// const router = express.Router();
// const cors = require('cors'); // Import the 'cors' middleware
// const toggleRoutes = require('./api/toggleRoutes');
// const app = express();

// mongoose.connect('mongodb://localhost:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true });

// const toggleSchema = new mongoose.Schema({
//     isToggled: Boolean,
//   });
//   Toggle = mongoose.model('Toggle', toggleSchema);

// // GET request to fetch the toggle state
// router.get('/', async (req, res) => {
//     try {
//       const toggle = await Toggle.findOne({});
//       if (!toggle) {
//         return res.status(404).json({ message: 'Toggle not found' });
//       }
//       res.json({ isToggled: toggle.isToggled });
//     } catch (error) {
//       res.status(500).json({ message: 'Internal server error' });
//     }
//   });
  
//   // PUT request to update the toggle state
//   router.put('/', async (req, res) => {
//     const { isToggled } = req.body;
//     try {
//       const toggle = await Toggle.findOne({});
//       if (!toggle) {
//         return res.status(404).json({ message: 'Toggle not found' });
//       }
//       toggle.isToggled = isToggled;
//       await toggle.save();
//       res.json({ isToggled: toggle.isToggled });
//     } catch (error) {
//       res.status(500).json({ message: 'Internal server error' });
//     }
//   });



// app.use(express.json());

// // Enable CORS for all routes
// app.use(cors());


// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors'); // Import the 'cors' middleware
// const app = express();
// const router = express.Router(); // Add this line

// mongoose.connect('mongodb://localhost:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true });

// const toggleSchema = new mongoose.Schema({
//   isToggled: Boolean,
// });
// const Toggle = mongoose.model('Toggle', toggleSchema); // Declare Toggle variable with 'const'

// // GET request to fetch the toggle state
// router.get('/', async (req, res) => {
//   try {
//     const toggle = await Toggle.findOne({});
//     if (!toggle) {
//       return res.status(404).json({ message: 'Toggle not found' });
//     }
//     res.json({ isToggled: toggle.isToggled });
//   } catch (error) {
//     res.status(500).json({ message: 'Internal server error' });
//   }
// });

// // PUT request to update the toggle state
// router.put('/', async (req, res) => {
//   const { isToggled } = req.body;
//   try {
//     const toggle = await Toggle.findOne({});
//     if (!toggle) {
//       return res.status(404).json({ message: 'Toggle not found' });
//     }
//     toggle.isToggled = isToggled;
//     await toggle.save();
//     res.json({ isToggled: toggle.isToggled });
//   } catch (error) {
//     res.status(500).json({ message: 'Internal server error' });
//   }
// });

// app.use(express.json());

// // Enable CORS for all routes
// app.use(cors());

// // Use the router
// app.use('/', router); // Apply the router to the root URL

// app.listen(3000, () => {
//   console.log('Server is running on port 3000');
// });






const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const router = express.Router();

// Update the MongoDB connection URL
mongoose.connect('mongodb://localhost:27017/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const toggleSchema = new mongoose.Schema({
  isToggled: Boolean,
});

const Toggle = mongoose.model('Toggle', toggleSchema);

// ... Rest of your code

app.use(express.json());

// Enable CORS for all routes
app.use(cors());

// Use the router
app.use('/', router);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});


