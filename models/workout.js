const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
    {
        day: {
            type: Date,
            default: Date.now
        },
        exercises: [
            {
                type: {
                    type: String,
                    trim: true,
                    required: "Select your workout type"
                },
                name: {
                    type: String,
                    trim: true,
                    required: "Exercise name"
                },
                duration: {
                   
                        type: Number,
                        required: "Duration of exercise:"
                },
                weight: {
                    type: Number,
                    required: "Enter weight:"
                },
                reps: {
                    type: Number,
                    required: "# of reps in exercise:"
                },
                sets: {
                    type:Number,
                    required: "Enter # of sets in exercise:"
                },
                distance: {
                    type: Number,
                    required: "Enter distance:"
                }
            }
        ]
    },
    {
        toJSON :{
            virtuals: true,
        },
    }
);
workoutSchema.virtual('totalDuration').get(function () {
    return this.exercises.reduce(
        (total, exercise)=> {
            return total + exercise.duration;
        }, 0);
        })

        const Workout = mongoose.model('Workout' , workoutSchema);

        module.exports = Workout;
