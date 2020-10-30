const { Schema, model } = require("mongoose");

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    workoutDuration: {
        type: Number,
        default: 0
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
            trim: true,
            required: "Name of exercise is required."
        },
        duration: {type: Number},
        weight: {type: Number},
        reps: {type: Number},
        sets: {type: Number},
        distance: {type: Number}
      }
    ]
})
workoutSchema.methods.duration = function() {
    let totalDuration = 0;
    this.exercise.forEach((exercise) => {
        totalDuration += exercises.duration;
    });
    this.workoutDuration = totalDuration;
}


const Workout = model("Workout", workoutSchema);
module.exports = Workout;