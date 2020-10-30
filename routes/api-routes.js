// // get 
// // Put
// // post
// // get

// const Workout = require("../models/Workout");
// const { db } = require("../models/Workout")

// const router = require("express").Router()

// router.get("/", (req, res) => {
//     db.Workout.find().then(() => {
//         if (err) {
//             res.send(err);
//         } else {
//             res.send(result);
//         };
//     });
// });

// router.put("/:id", (req, res) => {

// })

// router.post("/", ({body}, res) => {
//     const workout = new Workout(body);
//     Workout.create(workout)
//         .then((dbWorkout) => {
//             res.json(dbWorkout);
//         })
//         .catch((err) => {
//             res.json(err);
//         });
// });

// router.get("/range", (req, res) => {

// })

// module.exports = router;