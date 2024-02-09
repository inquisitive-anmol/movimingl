const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  userId: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  showtimeId: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Showtime' }],
  numTickets: { type: Number, required: true },
  timestamp: [
    {
        date: {
            type: Date,
            required: true,
        }
    }
  ],
  status: { type: String,
    required: true },
},
{timestamps: true});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;