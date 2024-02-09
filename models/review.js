const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  user: [{ type: mongoose.Schema.Types.ObjectId,
    required: true,
  ref: "User", }],
  movie: [{ type: mongoose.Schema.Types.ObjectId,
    required: true,
  ref: "Movie" }],
  rating: { type: Number, },
  comment: { type: String},
  timestamp: [{
    type: Date,
  }],
},
{timestamps: true});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;