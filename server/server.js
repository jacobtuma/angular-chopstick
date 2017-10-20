const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');


const corsOptions = {
  origin: 'http://localhost:4200',
  credentials: true
};


const router = express.Router();

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.text());
router.use(bodyParser.json({ type: "application/json" }));

router.use(cors(corsOptions));
router.use(express.static('../client'));

// ===|GET api listing|===
router.get('/', (req, res) => {
  res.send('api works');
})

//	===|Mongo DB Setup|===
const mongojs = require("mongojs");
const ObjectId = mongojs.ObjectId;

const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const databaseUrl = 'mongodb://user:password@ds127105.mlab.com:27105/chopstick';

const collections = ["studios", "artists", "cities"];

// Hook mongojs configuration to the db variable
const db = mongojs(databaseUrl, collections);


const gfs = Grid(db, MongoClient);

db.on('error', function(err) {
  console.log('Database Error:', err);
});

// Use connect method to connect to the Server
MongoClient.connect(databaseUrl, function (err, db) {
  if (err) {
    console.log('Unable to connect to the mongoDB server. Error:', err);
  } else {
    console.log('Connection established to', databaseUrl);
  }
});



router.post("/accountSignUp", (req, res) => {
  console.log(req.body.info);
if (req.body.type == 'studio'){
  db.studios.insert({createdAt: Date.now(), email: req.body.info.email, studioName: req.body.info.form.studioName, studioType: req.body.info.form.studioType, studioDescription: req.body.info.form.studioDescription, studioAddress: req.body.info.form.studioAddress, studioCity: req.body.info.form.studioCity.toLowerCase(), studioState: req.body.info.form.studioState, studioZipCode: req.body.info.form.studioZipCode, equippedToRecord: [{name: "vocals", equipped: req.body.info.form.equippedVocals}, {name: "guitar", equipped: req.body.info.form.equippedGuitar}, {name: "drums", equipped: req.body.info.form.equippedDrums}, {name: "piano", equipped: req.body.info.form.equippedPiano}], daysAvailable: [{name:'monday', available: req.body.info.form.availableMonday, from: req.body.info.schedule.mon.mondayFrom, to: req.body.info.schedule.mon.mondayTo}, {name:'tuesday', available: req.body.info.form.availableTuesday, from: req.body.info.schedule.tues.tuesdayFrom, to: req.body.info.schedule.tues.tuesdayTo}, {name:'wednesday', available: req.body.info.form.availableWednesday, from: req.body.info.schedule.wed.wednesdayFrom, to: req.body.info.schedule.wed.wednesdayTo}, {name:'thursday', available: req.body.info.form.availableThursday, from: req.body.info.schedule.thur.thursdayFrom, to: req.body.info.schedule.thur.thursdayTo}, {name:'friday', available: req.body.info.form.availableFriday, from: req.body.info.schedule.fri.fridayFrom, to: req.body.info.schedule.fri.fridayTo}, {name:'saturday', available: req.body.info.form.availableSaturday, from: req.body.info.schedule.sat.saturdayFrom, to: req.body.info.schedule.sat.saturdayTo}, {name:'sunday', available: req.body.info.form.availableSunday, from: req.body.info.schedule.sun.sundayFrom, to: req.body.info.schedule.sun.sundayTo}], "scheduledBookings": [], chargeType: req.body.info.form.chargeType, rate: req.body.info.form.rate, requireDeposit: req.body.info.form.requireDeposit, depositPercent: req.body.info.form.depositPercent, refundable: req.body.info.form.refundable, instrumentsProvided: [{name: "providedMicrophone", provided: req.body.info.form.providesMicrophone}, {name: "providedGuitar", provided: req.body.info.form.providesGuitar}, {name: "providedDrums", provided: req.body.info.form.providesDrums}, {name: "providedPiano", provided: req.body.info.form.providesPiano}, {name: "providedKeyboard", provided: req.body.info.form.providesKeyboard}], firstTimeLogin: true, type: "studio"}, function(error, data){
    if (error){
      console.log(error);
    } else {
      db.users.insert({createdAt: Date.now(), email: req.body.info.email, password: req.body.info.pw, type: 'studio'}, function(error, data){
        if (error){
          console.log(error);
        } else {
          res.status(200).json(data);
        }
      });
    }
  });
} else if (req.body.type == 'artist') {
  db.artists.insert({firstTimeLogin: true, createdAt: Date.now(), type: "artist", artistBookings: [], email: req.body.info.email, artistFirstName: req.body.info.form.artistFirstName, artistLastName: req.body.info.form.artistLastName, artistName: req.body.info.form.artistName, artistAddress: req.body.info.form.artistAddress, artistCity:  req.body.info.form.artistCity, artistState: req.body.info.form.artistState, artistZipCode: req.body.info.form.artistZipCode, artistDescription: req.body.info.form.artistDescription}, function(error, data){
    if (error){
      console.log(error);
    } else {
      db.users.insert({createdAt: Date.now(), email: req.body.info.email, password: req.body.info.pw, type: 'artist'}, function(error, data){
        if (error){
          console.log(error);
        } else {
          res.status(200).json(data);
        }
      });
    }
  });
}
});


router.post("/confirmBooking", (req, res) => {
  let studioBookingInfo = req.body.studioBookingInfo;
let artistBookingInfo = req.body.artistBookingInfo;
console.log(artistBookingInfo);
db.studios.update({"email" : studioBookingInfo.studioBookedWith}, {$push: {scheduledBookings: {artistInfo: {artistBookedBy: studioBookingInfo.artistBookedBy, artistFullName: studioBookingInfo.artistFullName, messageFromArtist: ''}, shortDate: studioBookingInfo.shortDate, fullDate: studioBookingInfo.fullDate, day: studioBookingInfo.day, totalHours: studioBookingInfo.totalHours, allHours: studioBookingInfo.allHours, start: studioBookingInfo.start, end: studioBookingInfo.end, estimatedPrice: studioBookingInfo.estimatedPrice, status: studioBookingInfo.status}}}, function(error, data){
  if (error){
    console.log(error);
  } else {
    db.artists.update({"email" : artistBookingInfo.artistBookedBy}, {$push: {artistBookings: {studioBookedWith: artistBookingInfo.studioBookedWith, linkToStudioProfile: artistBookingInfo.linkToStudioProfile, studioAddress: {address: artistBookingInfo.studioAddress.address, city: artistBookingInfo.studioAddress.city, state: artistBookingInfo.studioAddress.state, zipcode: artistBookingInfo.studioAddress.zipcode}, shortDate: artistBookingInfo.shortDate, fullDate: artistBookingInfo.fullDate, day: artistBookingInfo.day, totalHours: artistBookingInfo.totalHours, allHours: artistBookingInfo.allHours, start: artistBookingInfo.start, end: artistBookingInfo.end, estimatedPrice: artistBookingInfo.estimatedPrice, status: artistBookingInfo.status}}}, function(error, data){
      if (error){
        console.log(error);
      } else {
        res.status(200).json(data);
      }
    });
  }
});
//update artist as well with upcoming bookings
});

router.post('/dataPull', function(req, res){
  db.users.find({email: req.body.email}, function(err, data){
    if (err) {
      throw err;
    } else {
      if(data[0].type === 'studio'){
        db.studios.find({email: data[0].email}, function(err, data){
          if (err) {
            throw err;
          } else {
            res.json({status: 'success', data: data});
          }
        });
      } else if (data[0].type === 'artist'){
        db.artists.find({email: data[0].email}, function(err, data){
          if (err) {
            throw err;
          } else {
            res.json({status: 'success', data: data});
          }
        });
      }
    }
  });
});

router.get('/posts', (req, res) => {
  db.studios.find().toArray(function(err, results) {
  res.json(results);
  // send HTML file populated with quotes here
});
})
router.get('/city/:city', (req, res) => {
  db.studios.find({studioCity: req.params.city }).toArray(function(err, results) {
  res.json(results);
  // send HTML file populated with quotes here
});
})
router.get('/id/:id', (req, res) => {
  db.studios.find({_id: ObjectId(req.params.id) }).toArray(function(err, results) {
  res.json(results);
  // send HTML file populated with quotes here
});
})
module.exports = router;
