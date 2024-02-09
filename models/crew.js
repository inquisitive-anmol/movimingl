const mongoose = require('mongoose');

const crewSchema = new mongoose.Schema({
  movie: [{ type: mongoose.Schema.Types.ObjectId,
    ref : "Movie",
    required: true }],
  director: [
    {
        name: String, imgUrl: String,
    },
  ],
  producer: [
    {
        name: String, imgUrl: String,
    },
  ],
  cinematographer: [
    {
        name: String, imgUrl: String,
    },
  ],
  musicArtist: [
    {
        name: String, imgUrl: String,
    },
  ],
  
},
{timestamps: true});

const Crew = mongoose.model('Crew', crewSchema);

module.exports = Crew;