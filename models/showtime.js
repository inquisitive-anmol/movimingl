const mongoose = require('mongoose');

const showtimeSchema = new mongoose.Schema({
  movieId: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Movie', required: true }],
  theaterId: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Theater', required: true }],
  screenId: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Screen', required: true }],
  startTime: { type: Date, required: true },
  endTime: { type: Date, required: true },
  date: { type: Date, required: true },
  price: { type: Number, required: true },
  
},
{timestamps: true});

const Showtime = mongoose.model('Showtime', showtimeSchema);

module.exports = Showtime;