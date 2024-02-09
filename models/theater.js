const mongoose = require('mongoose');

const theaterSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: [
    {locatioin: String, city: String},
  ],
  screen: [{
    type: mongoose.Schema.Types.ObjectId,
        ref: "Screen",
  }],
  contactInfo: [
    {
      email: {
        type: String,
        required: true,
        unique: true,
      },
      phone: {
        type: String,
        required: true,
      },
    },
  ],
},
{timestamps: true});

const Theater = mongoose.model('Theater', theaterSchema);

module.exports = Theater;