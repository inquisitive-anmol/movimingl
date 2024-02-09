const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description : {
    type: String, 
    required: true
  },
  duration: {
    type: String,
    required: true,
  },
  genre: { type: mongoose.Schema.Types.Array, required: true },
  releaseDate: { type: Date, required: true },
  posterLink: { type: String, required: true },
},
{timestamps: true});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;