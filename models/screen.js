const mongoose = require('mongoose');

const screenSchema = new mongoose.Schema({
  theater: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Theater",
    required: true 
}],

  screenNumber:[ 
  { 
    type: Number,
    required: true }],
  showTime:[ {
    type: mongoose.Schema.Types.ObjectId,
        ref: "Showtime",
  }],
  capacity: {
    type: Number,
    required: true,
  },

  availableSeats: {  // updated based on bookings.
    type: Number,
    required: true
  }

},
{timestamps: true});

const Screen = mongoose.model('Screen', screenSchema);

module.exports = Screen;