const { Schema, model } = require("mongoose");

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
        type: {
            type: String,
            enum: ['resistance', 'cardio'],
            trim: true
        },
        name: {
            type: String,
            trim: true
        },
        duration: {type: Number},
        weight: {type: Number},
        reps: {type: Number},
        sets: {type: Number},
        distance: {type: Number}
      }
    ]


})
const Workout = model("Workout", workoutSchema);
module.exports = Workout;