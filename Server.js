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
const Url = "mongodb://127.0.0.1:27017/MySetting";
const connection = async (dbUrl) => {

  try {
    await mongoose.connect(
      dbUrl,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
    );

    console.log('Database Connected');
  } catch (error) {
    console.log('Error while Connecting database...', error);
  }


};




const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    default: "Ayushi"
  },
  automaticrestore :{
    type :Boolean,
    default : false

  },
  backupdata : {
    type :Boolean,
    default : false
  },
  wifi: {
    type: Boolean,
    default: false
  },
  airplanemode: {
    type: Boolean,
    default: false
  },
  sound: {
    media: {
      type: Number,
      default: 50
    },
    ringtone: {
      type: Number,
      default: 50
    },
    alarm: {
      type: Number,
      default: 50
    },

    silentmode : {

      silentmode1: {
     
          type :Boolean,
          default : false
        
      },
      silentmedia : {
        type :Boolean,
        default : false
      },

    },

    donotdisturbdata : {
      donotdisturb : {
        type: Boolean,
        default : false
      },

      whenlock : {
        type : Boolean,
        default : false
      },
      notifyaboutcall : {
        type : Boolean,
        default: false
      },
    },

    additionalsetting : {
      daialpadtone : {
        type: Boolean,
        default: false
      },
      tapsound : {
        type: Boolean,
        default: false

      },
      playsoundonlock : {
        type: Boolean,
        default: false
      },
      playsoundonss : {
        type: Boolean,
        default: false
      },
      playsoundonunistall : {
        type: Boolean,
        default: false
      },
      playsoundondlelete : {
        type: Boolean,
        default: false
      },
      playsoundoncharger : {
        type: Boolean,
        default: false
      },
      playsoundonstart : {
        type: Boolean,
        default: false
      }
    },

    soundassistant :{
      adjustmedia :{
        type:Boolean,
        default:false
      },
      audio :{
        type:Boolean,
        default:false
      },
    }

  },

  bluetooth: {
    type: Boolean,
    default: false
  },
  connection : {
    pair : {
      type:Boolean,
      default:false

    },
    showbluetooth : {
      type:Boolean,
      default:false
    }
  },
  hotspot: {
    mode:{
    type: Boolean,
    default: false
  },
    devicename:{
      type:String,
      default:"POCO M4 pro"
      
    },
    password:{
       type:String,
       default:""
    }

  },
  display: {
    mode: {
      type: Boolean,
      default: false
    },
    brightness: {
      level: {
        type: Number,
        default: 100
      },
      autobrightness: {
        type: Boolean,
        default: false
      },
      sunlightmode: {
        type: Boolean,
        default: false
      } 

    },
    readmode: {
      type: Boolean,
      default: false
    },
    scheduleturnoff: {
      type: Boolean,
      default: false
    },
    darkmode:{
      type:Boolean,
      default:false
    },
    textsize:{
      type: Number,
      default: 50
    },
    autorotate:{
      type:Boolean,
      default:false
    },
    vrmode:{
      type:String,
      default:"Reduce Blur"
    },
    papermode:{
      type:Boolean,
      default:false
    },
    classicmode:{
      type:Boolean,
      default:false
    }
  },
  notifications:{
    notification1:{
      type:Boolean,
      default:false
    },
    notification2:{
      type:Boolean,
      default:false
    },
    notification3:{
      type:Boolean,
      default:false
    },
    notification4:{
      type:Boolean,
      default:false
    },
    notification5:{
      type:Boolean,
      default:false
    },
    notification6:{
      type:Boolean,
      default:false
    },
      smarthome : {
       type: Boolean,
       default: false
    },
    itemsshows : {
      notify : {
        type: Boolean,
        default : false
      },
      controlc : {
        type:Boolean,
        default : false
      },
      smarthome1 : {
        type : Boolean,
        default : false
      }
    }

  },
  notifictionshade:{
    type:String,
    default:"MIUI"
  }

});

const User = mongoose.model('User', UserSchema);

// ... Rest of your code

app.use(express.json());
app.use(bodyParser.json({ extended: true }));

// Enable CORS for all routes
app.use(cors());

// Use the router
app.get('/setup', async (req, res) => {
  const newuser = new User();
  try {
    await newuser.save();
    
    res.send('Data added successfully')
  } catch (error) {
    res.status(500).send(error);
  }

}
)

app.get('/getUserData', async (req, res) => {
  try {
    const userData = await User.findOne({ name: 'Ayushi' });
    res.json(userData);
  } catch (error) {
    console.error('Error fetching user data:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.post('/airplanemodetogle', async (req, res) => {
  const userinfo = await User.findOne({ name: "Ayushi" });
  const togle = req.body.tog;
   
  try {
    await User.findByIdAndUpdate(userinfo.id, { airplanemode: togle });
    res.send(`Airplane mode toggled`);
       
  } catch (error) {
    console.log(error);
  }
}
)


app.post('/wifitogle', async (req, res) => {
  const userinfo = await User.findOne({ name: "Ayushi" });
  const togle = req.body.tog;
  try {
    await User.findByIdAndUpdate(userinfo.id, { wifi: togle });
    res.send('Data added successfully');

  } catch (error) {
    console.log(error);
  }
}
)

app.post('/mediasoundtogle', async (req, res) => {
  console.log("hi");
  const userinfo = await User.findOne({ name: "Ayushi" });
  const togle = req.body.tog;
  try {
    await User.findByIdAndUpdate(userinfo.id, { 'sound.media': togle });
    res.send('Data added successfully');

  } catch (error) {
    console.log(error);
  }
}
)

app.post('/ringtonesoundtogle', async (req, res) => {
  const userinfo = await User.findOne({ name: "Ayushi" });
  const togle = req.body.tog;
  try {
    await User.findByIdAndUpdate(userinfo.id, { 'sound.ringtone': togle });
    res.send('Data added successfully');

  } catch (error) {
    console.log(error);
  }
}
)

app.post('/alarmsoundtogle', async (req, res) => {
  const userinfo = await User.findOne({ name: "Ayushi" });
  const togle = req.body.tog;
  try {
    await User.findByIdAndUpdate(userinfo.id, { 'sound.alarm': togle });
    res.send('Data added successfully');

  } catch (error) {
    console.log(error);
  }
}
)


app.post('/bluetoothtogle', async (req, res) => {
  const userinfo = await User.findOne({ name: "Ayushi" });
  const togle =await req.body.tog;
  // const message=await 
  try {
    await User.findByIdAndUpdate(userinfo.id, { bluetooth: togle });
   togle?res.send(`Bluetooth mode on`):res.send(`Bluetooth mode off`);
    togle?console.log(`Bluetooth mode on`):console.log(`Bluetooth mode off`);

  } catch (error) {
    console.log(error);
  }
}
);

app.post('/hotspottogle', async (req, res) => {
  const userinfo = await User.findOne({ name: "Ayushi" });
  const togle = req.body.tog;
  try {
    await User.findByIdAndUpdate(userinfo.id, {"hotspot.mode": togle });
    res.send('Data added successfully');

  } catch (error) {
    console.log(error);
  }
}
)

app.post('/displaytogle', async (req, res) => {
  const userinfo = await User.findOne({ name: "Ayushi" });
  const togle = req.body.tog;
  try {
    await User.findByIdAndUpdate(userinfo.id, { "display.mode": togle });
    res.send('Data added successfully');

  } catch (error) {
    console.log(error);
  }
}
)

app.post('/brightnesstogle', async (req, res) => {
  console.log("hi")
  const userinfo = await User.findOne({ name: "Ayushi" });
  const togle = req.body.tog;
  try {
    await User.findByIdAndUpdate(userinfo.id, { 'display.brightness.level': togle });
    res.send('Data added successfully');

  } catch (error) {
    console.log(error);
  }
}
)

app.post('/autobrightnesstogle', async (req, res) => {
  const userinfo = await User.findOne({ name: "Ayushi" });
  const togle = req.body.tog;
  try {
    await User.findByIdAndUpdate(userinfo.id, { 'display.brightness.autobrightness': togle });
    res.send('Data added successfully');

  } catch (error) {
    console.log(error);
  }
}
)

app.post('/sunlightmodetogle', async (req, res) => {
  const userinfo = await User.findOne({ name: "Ayushi" });
  const togle = req.body.tog;
  try {
    await User.findByIdAndUpdate(userinfo.id, { 'display.brightness.sunlightmode': togle });
    res.send('Data added successfully');

  } catch (error) {
    console.log(error);
  }
}
);

app.post('/readmodetogle', async (req, res) => {
  const userinfo = await User.findOne({ name: "Ayushi" });
  const togle = req.body.tog;
  try {
    await User.findByIdAndUpdate(userinfo.id, { 'display.readmode': togle });
    res.send('Data added successfully');

  } catch (error) {
    console.log(error);
  }
}
);

app.post('/autorotatemodetogle', async (req, res) => {
  const userinfo = await User.findOne({ name: "Ayushi" });
  const togle = req.body.tog;
  try {
    await User.findByIdAndUpdate(userinfo.id, { 'display.autorotate': togle });
    res.send('Data added successfully');

  } catch (error) {
    console.log(error);
  }
}
);

app.post('/scheduleturnoffmodetogle', async (req, res) => {
  const userinfo = await User.findOne({ name: "Ayushi" });
  const togle = req.body.tog;
  try {
    await User.findByIdAndUpdate(userinfo.id, { 'display.scheduleturnoff': togle });
    res.send('Data added successfully');

  } catch (error) {
    console.log(error);
  }
}
);

app.post('/darkmodetogle', async (req, res) => {
  const userinfo = await User.findOne({ name: "Ayushi" });
  const togle = req.body.tog;
  try {
    await User.findByIdAndUpdate(userinfo.id, { 'display.darkmode': togle });
    res.send('Data added successfully');

  } catch (error) {
    console.log(error);
  }
}
);

app.post('/textsizetogle', async (req, res) => {
  const userinfo = await User.findOne({ name: "Ayushi" });
  const togle = req.body.tog;
  try {
    await User.findByIdAndUpdate(userinfo.id, { 'display.textsize': togle });
    res.send('Data added successfully');

  } catch (error) {
    console.log(error);
  }
}
);

app.post('/notificationtogle', async (req, res) => {
  try {
    const userinfo = await User.findOne({ name: "Ayushi" });

    if (!userinfo) {
      return res.status(404).send("User not found");
    }

    const { notification1, notification2, notification3, notification4, notification5, notification6 } = req.body;

    await User.findByIdAndUpdate(userinfo._id, {
      "notifications.notification1":notification1,
      "notifications.notification2":notification2,   
      "notifications.notification3":notification3,
      "notifications.notification4":notification4,
      "notifications.notification5":notification5,
      "notifications.notification6":notification6
    });

    res.send('Data added successfully');

  } catch (error) {
    console.error('Error updating notification settings:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.post('/additionalsetting', async(req,res)=>{
  try{

    const userinfo = await User.findOne({ name: "Ayushi" });

    if (!userinfo) {
      return res.status(404).send("User not found");
    }

    const {daialpadtone  , tapsound, playsoundonlock, playsoundonss, playsoundonunistall, playsoundondlelete, playsoundoncharger, playsoundonstart } = req.body;

    await User.findByIdAndUpdate(userinfo._id, {
      "sound.additionalsetting.daialpadtone":daialpadtone,
      "sound.additionalsetting.tapsound":tapsound  ,   
      "sound.additionalsetting.playsoundonlock":playsoundonlock,
      "sound.additionalsetting.playsoundonss":playsoundonss,
      "sound.additionalsetting.playsoundonunistall":playsoundonunistall,
      "sound.additionalsetting.playsoundondlelete":playsoundondlelete,
      "sound.additionalsetting.playsoundoncharger":playsoundoncharger,
      "sound.additionalsetting.playsoundonstart":playsoundonstart
    });

    res.send('Data added successfully');

  }
  catch (error) {
    console.error('Error updating notification settings:', error);
    res.status(500).send('Internal Server Error');
  }
})

// sound assistant

app.post('/soundassistanttogle', async (req, res) => {
  try {
    const userinfo = await User.findOne({ name: "Ayushi" });

    if (!userinfo) {
      return res.status(404).send("User not found");
    }

    const { adjustmedia,audio } = req.body;

    await User.findByIdAndUpdate(userinfo._id, {
      "sound.soundassistant.adjustmedia":adjustmedia,
      "sound.soundassistant.audio":audio

    });

    res.send('Data added successfully');

  } catch (error) {
    console.error('Error updating sound assistant settings:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.post('/notificationshadetogle', async (req, res) => {
  const userinfo = await User.findOne({ name: "Ayushi" });
  const togle = req.body.tog;
  try {
    await User.findByIdAndUpdate(userinfo.id, { 'notifictionshade': togle });
    res.send('Notification Shade changed successfully');

  } catch (error) {
    console.log(error);
  }
}
);

app.post('/vrmodetogle', async (req, res) => {
  const userinfo = await User.findOne({ name: "Ayushi" });
  const togle = req.body.tog;
  try {
    await User.findByIdAndUpdate(userinfo.id, { 'display.vrmode': togle });
    res.send('VR Mode Changed successfully');

  } catch (error) {
    console.log(error);
  }
}
);

app.post('/classicmodetogle', async (req, res) => {
  const userinfo = await User.findOne({ name: "Ayushi" });
  const togle = req.body.tog;
  try {
    await User.findByIdAndUpdate(userinfo.id, { 'display.classicmode': togle });
    res.send('VR Mode Changed successfully');

  } catch (error) {
    console.log(error);
  }
}
);

app.post('/papermodetogle', async (req, res) => {
  const userinfo = await User.findOne({ name: "Ayushi" });
  const togle = req.body.tog;
  try {
    await User.findByIdAndUpdate(userinfo.id, { 'display.papermode': togle });
    res.send('VR Mode Changed successfully');

  } catch (error) {
    console.log(error);
  }
}
);


//for backups

app.post('/backups', async (req, res) => {
  const userinfo = await User.findOne({ name: "Ayushi" });
  const togle = req.body.tog;
  try {
    await User.findByIdAndUpdate(userinfo.id, { "backupdata": togle });
    res.send('Data added successfully');

  } catch (error) {
    console.log(error);
  }
}
)

//dandD


app.post('/donotdisturbtogle', async (req, res) => {
  try {
    const userinfo = await User.findOne({ name: "Ayushi" });

    if (!userinfo) {
      return res.status(404).send("User not found");
    }

    const { donotdisturb, whenlock ,notifyaboutcall } = req.body;

    await User.findByIdAndUpdate(userinfo._id, {
      "sound.donotdisturbdata.donotdisturb":donotdisturb,
      "sound.donotdisturbdata.whenlock":whenlock,   
      "sound.donotdisturbdata.notifyaboutcall":notifyaboutcall,
      
    });

    res.send('Data added successfully');

  } catch (error) {
    console.error('Error updating notification settings:', error);
    res.status(500).send('Internal Server Error');
  }
});


//for smart home



app.post('/smarthometogle', async (req, res) => {
  const userinfo = await User.findOne({ name: "Ayushi" });
  const togle = req.body.tog;
  try {
    await User.findByIdAndUpdate(userinfo.id, { "notifications.smarthome": togle });
    res.send('Data added successfully');

  } catch (error) {
    console.log(error);
  }
}
)



//items shown

app.post('/itemsshowstogle', async (req, res) => {
  try {
    const userinfo = await User.findOne({ name: "Ayushi" });

    if (!userinfo) {
      return res.status(404).send("User not found");
    }


    const { notify, controlc , smarthome1 } = req.body;

    await User.findByIdAndUpdate(userinfo._id, {
      "notifications.itemsshows.notify":notify,
      "notifications.itemsshows.controlc":controlc,   
      "notifications.itemsshows.smarthome1":smarthome1,
      
    });
    res.send('Data added successfully');

  } catch (error) {
    console.error('Error updating notification settings:', error);
    res.status(500).send('Internal Server Error');
  }
});



app.post('/hotspotPasswordchange', async (req, res) => {
  try {
    const userinfo = await User.findOne({ name: "Ayushi" });

    if (!userinfo) {
      return res.status(404).send("User not found");
    }


    const { deviceName,password} = req.body;

    await User.findByIdAndUpdate(userinfo._id, {
      "hotspot.devicename":deviceName, 
      "hotspot.password":password,
         
    });
    res.send('Password Changed Successfully');

  } catch (error) {
    console.error('Error updating notification settings:', error);
    res.status(500).send('Internal Server Error');
  }
});


//for Automatic restore

app.post('/autorestoretogle', async (req, res) => {
  const userinfo = await User.findOne({ name: "Ayushi" });
  const togle = req.body.tog;
  try {
    await User.findByIdAndUpdate(userinfo.id, { "automaticrestore": togle });
    res.send('Data added successfully');

  } catch (error) {
    console.log(error);
  }
}
)

//in sout for sound toggle like silent mode


app.post('/silentmodetogle', async (req, res) => {
  try {
    const userinfo = await User.findOne({ name: "Ayushi" });

    if (!userinfo) {
      return res.status(404).send("User not found");
    }


    const { silentmode1,silentmedia } = req.body;

    await User.findByIdAndUpdate(userinfo._id, {
      "sound.silentmode.silentmode1":silentmode1,
      "sound.silentmode.silentmedia":silentmedia   
 
      
    });
    res.send('Data added successfully');

  } catch (error) {
    console.error('Error updating notification settings:', error);
    res.status(500).send('Internal Server Error');
  }
});

//for bluetooth addithional setting 

app.post('/connectiontogle', async (req, res) => {
  try {
    const userinfo = await User.findOne({ name: "Ayushi" });

    if (!userinfo) {
      return res.status(404).send("User not found");
    }


    const { pair,showbluetooth } = req.body;

    await User.findByIdAndUpdate(userinfo._id, {
      "connection.pair":pair,
 "connection.showbluetooth":showbluetooth   
 
      
    });
    res.send('Data added successfully');

  } catch (error) {
    console.error('Error updating blutooth additional settings:', error);
    res.status(500).send('Internal Server Error');
  }
});











app.listen(4000, () => {
  console.log('Server is running on port 4000');
});

connection(Url);

