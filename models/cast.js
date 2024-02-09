const mongoose = require('mongoose');

const castSchema = new mongoose.Schema({
  movie: [{ type: mongoose.Schema.Types.ObjectId,
    ref : "Movie",
    required: true }],
  actor: [
    {
        name: {
            type: String,
            required: true,
        },
        imgUrl: {
            type: String,
            required: true,
        },
        role: {
            type: String,
            required: true,
        }
    }
  ],
  actress: [
    {
        name: {
            type: String,
            required: true,
        },
        imgUrl: {
            type: String,
            required: true,
        },
        role: {
            type: String,
            required: true,
        }
    }
  ],
  other: [
    {name: String, imgUrl: String},
  ],
  
},
{timestamps: true});

const Cast = mongoose.model('Cast', castSchema);

module.exports = Cast;