const mongoose = require('mongoose');
const  Movie  = require("../../models/movie");
const  Booking  = require("../../models/booking");
const Admin = require("../../models/admin");
const Cast = require("../../models/cast");
const Crew = require("../../models/crew");
const User = require("../../models/user");
const Review = require("../../models/review");
const Theater = require("../../models/theater");
const Screen = require("../../models/screen");
const Showtime = require("../../models/showtime");
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);


main().then( () => {
    console.log("connection successfull");
})
.catch((err) => {
    console.log(err);
})

async function main() {
    return mongoose.connect("mongodb://127.0.0.1:27017/movimingl");
}


async function movieData() {
   let movie1 = new Movie({
title: "Guardians of the Galaxy Vol. 3",
description : "Super cool movie, it's a part of avengers",
duration: "1 hour",
genre: [
    "Action", "Adventure", "Comedy"
],
releaseDate: "4th May 2023",
posterLink: "https://example.com/posters/guardians_of_the_galaxy_vol_3.jpg",

    });

let result = await movie1.save();
    console.log(result);

}

// movieData();


async function bookingData() {
  let result = await Booking.create({
    numTickets: 2,
    timestamp: [{date: "9th feb", time: "5pm"}] ,
    status: "confirmed",
  });
  console.log(result);
 
 }

//  bookingData();

async function adminData() {
    let password = "abcd1234";
    let hash = bcrypt.hashSync(password, salt);
    let result = await Admin.create({
        username: "anmol",
        email: "abcd@gmail.com",
        password: hash,
    });
    console.log(result);

}

// adminData();


async function castData() {
    let movieDoc = await Movie.find({title:"Guardians of the Galaxy Vol. 3"})
    let result = await Cast.create({
        movie: movieDoc,
        actor: [
            {name: "abcd", imgUrl: "https://example.com", role: "alskdoi"},
        
        ],
        actress: [
            {name: "kriti", imgUrl: "lsdkfjoaidf", role: "ldskfldk"},
            
        ],
        other: [
            {name: "lasdkfjl", imgUrl: "ekjldkfdfa"},
        ],
    });

    console.log(result);
}

// castData();

async function crewData() {
    let movieDoc = await Movie.find({title:"Guardians of the Galaxy Vol. 3"})
    let result = await Crew.create({
        movie: movieDoc,
        director: [
            {name: "lkdfhasl", imgUrl: "ldfjsldkf",},
        ],
        producer: [
                {
                    name: "ldfkjlsdkf", imgUrl: "ladkfjlds",
                },
              ],
              cinematographer: [
                {
                    name: "lasdkfjl", imgUrl: "ladskjfl",
                },
              ],
              musicArtist: [
                {
                    name: "lkdfjlas", imgUrl: "ldkfjsldkf",
                },
              ],

    }) ;
    console.log(result);
}

// crewData();


async function userData() {
    let result = await User.create({
username: "laskdfj",
email: "fklsdjfls",
password: "flsdkf",
    });

    console.log(result);
}

// userData();


async function reviewData() {
    let userDoc = await User.find({username:"laskdfj"});
    let movieDoc = await Movie.find({title:"Guardians of the Galaxy Vol. 3"});
    let result = await Review.create({
        user: userDoc,
        movie: movieDoc,
        rating: 3,
        comment: "attention seeking movie",
        timestamp: "9th feb, 11:08",
    });
    console.log(result);
}

// reviewData();

async function theaterData() {
    let screenDoc = await Screen.find({});
    let result = await Theater.create({
        name: "abcdlkfd",
        address: [
                {location: "laskdfjl", city: "lkdsfj"},
            ],
        screen: screenDoc,
        contactInfo: [
            {email: "ldkfjal", phone: "ldkfjlasd"},
        ],
            
    });

    console.log(result);
}

// theaterData();

async function screenData () {
    let theaterDoc = await Theater.find({});
    let screenDoc = await Screen.find({});
    let result = await Screen.create({
        theater: theaterDoc,
        screenNumber: screenDoc,
        capacity: 80,
        availableSeats: 70,
    });

    console.log(result);
}

// screenData();

async function showtimeData() {
    let movieDoc = await Movie.find({});
        let theaterDoc = await Theater.find({});
        let screenDoc = await Screen.find({});
    let result = await Showtime.create({
        movieId: movieDoc,
        theaterId: theaterDoc,
        screenId: screenDoc,
        startTime: "4 pm",
        endTime: "6 pm",
        date: "10th feb",
        price: "150",
    })

    console.log(result);
}

// showtimeData();