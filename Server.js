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
const bodyParser = require('body-parser');

// Update the MongoDB connection URL
const Url="mongodb://localhost:27017/mydatabase";
const connection = async (dbUrl)=>{

  try{
    await mongoose.connect(
        dbUrl,
        {
            useNewUrlParser:true,
            useUnifiedTopology:true
        }
    );

    console.log('Database Connected');
  } catch(error){
    console.log('Error while Connecting database...',error);
  }


};




const UserSchema = new mongoose.Schema({
  name:{
    type:String,
    default:"Ayushi"
},
wifi:{
  type:Boolean,
  default:false
},
airplanemode:{
  type:Boolean,
  default:false
},
sound:{
  media:{
    type:Number,
  default:50
  },
  ringtone:{
    type:Number,
  default:50
  },
  alarm:{
    type:Number,
  default:50
  }
  
},
brightness:{
  type:Number,
  default:50
},
bluetooth:{
  type:Boolean,
  default:false
},
hotspot:{
  type:Boolean,
  default:false
},
display:{
  type:Boolean,
  default:false
}
});

const User = mongoose.model('User', UserSchema);

// ... Rest of your code

app.use(express.json());
app.use(bodyParser.json({ extended: true }));

// Enable CORS for all routes
app.use(cors());

// Use the router
app.get('/setup',async(req,res)=>{
  const newuser=  new User();
  try{
    await newuser.save();
    console.log(foods);
    res.send('Data added successfully')
 }catch(error){
     res.status(500).send(error);
 }
  
}
)

app.post('/airplanemodetogle',async(req,res)=>{
    console.log("hii");
  const userinfo = await User.findOne({name :"Ayushi"});
  const togle=req.body.tog;
  try{
  await User.findByIdAndUpdate(userinfo.id,{airplanemode:togle});
  res.send('Data added successfully');
  
}catch(error){
  console.log(error);
}
}
)


app.post('/wifitogle',async(req,res)=>{
  const userinfo = await User.findOne({name :"Ayushi"});
  const togle=req.body.tog;
  try{
  await User.findByIdAndUpdate(userinfo.id,{wifi:togle});
  res.send('Data added successfully');
  
}catch(error){
  console.log(error);
}
}
)

app.post('/mediasoundtogle',async(req,res)=>{
  console.log("hi");
  const userinfo = await User.findOne({name :"Ayushi"});
  const togle=req.body.tog;
  try{
  await User.findByIdAndUpdate(userinfo.id,{'sound.media' :togle});
  res.send('Data added successfully');
  
}catch(error){
  console.log(error);
}
}
)

app.post('/ringtonesoundtogle',async(req,res)=>{
  const userinfo = await User.findOne({name :"Ayushi"});
  const togle=req.body.tog;
  try{
  await User.findByIdAndUpdate(userinfo.id,{'sound.ringtone' :togle});
  res.send('Data added successfully');
  
}catch(error){
  console.log(error);
}
}
)

app.post('/alarmsoundtogle',async(req,res)=>{
  const userinfo = await User.findOne({name :"Ayushi"});
  const togle=req.body.tog;
  try{
  await User.findByIdAndUpdate(userinfo.id,{'sound.alarm' :togle});
  res.send('Data added successfully');
  
}catch(error){
  console.log(error);
}
}
)

app.post('/brightnesstogle',async(req,res)=>{
  const userinfo = await User.findOne({name :"Ayushi"});
  const togle=req.body.tog;
  try{
  await User.findByIdAndUpdate(userinfo.id,{brightness:togle});
  res.send('Data added successfully');
  
}catch(error){
  console.log(error);
}
}
);

app.post('/bluetoothtogle',async(req,res)=>{
  const userinfo = await User.findOne({name :"Ayushi"});
  const togle=req.body.tog;
  try{
  await User.findByIdAndUpdate(userinfo.id,{bluetooth:togle});
  res.send('Data added successfully');
  
}catch(error){
  console.log(error);
}
}
);

app.post('/hotspottogle',async(req,res)=>{
  const userinfo = await User.findOne({name :"Ayushi"});
  const togle=req.body.tog;
  try{
  await User.findByIdAndUpdate(userinfo.id,{hotspot:togle});
  res.send('Data added successfully');
  
}catch(error){
  console.log(error);
}
}
)

app.post('/displaytogle',async(req,res)=>{
  const userinfo = await User.findOne({name :"Ayushi"});
  const togle=req.body.tog;
  try{
  await User.findByIdAndUpdate(userinfo.id,{display:togle});
  res.send('Data added successfully');
  
}catch(error){
  console.log(error);
}
}
)



app.listen(4000, () => {
  console.log('Server is running on port 4000');
});

connection(Url);

