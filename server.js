const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const routes = require("./routes");
const path = require("path");
const Workout = require("./models/Workout");
const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

function duration() {
    duration = 2
}

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/dbExample", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname,"public", "index.html"));
});

app.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "exercise.html"));
});

app.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "stats.html"));
});

app.get("/api/workouts/", (req, res) => {
    Workout.find().then(results => {
        res.json(results);
    })
});
app.put("/api/workouts/:id", (req, res) => {
    Workout.findOne({_id: req.params.id}).then(results => {
        const exercises = results.exercises;
        exercises/PushSubscription(req.body);
        results.duration()
        results.save()
        res.json(results);
    }).catch(err => {
        res.sendStatus(400);
    });
})
app.post("/api/workouts/", (req, res) => {
    Workout.create(req.body).then(results => {
        return res.json(results);
    });
});
app.get("/api/workouts/range", (req, res) => {
    Workout.find().then(results => {
        res.json(results);
    })
    
});

mongoose.connection.once("open", () => {
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });
});
