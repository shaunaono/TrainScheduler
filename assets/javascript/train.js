// Initialize Firebase
var config = {
  apiKey: "AIzaSyDe1EsWRMP93TulNsXt3T2M4QMYQfALMFU",
  authDomain: "train-scheduler-b831d.firebaseapp.com",
  databaseURL: "https://train-scheduler-b831d.firebaseio.com",
  projectId: "train-scheduler-b831d",
  storageBucket: "train-scheduler-b831d.appspot.com",
  messagingSenderId: "599532611256",
};
firebase.initializeApp(config);

var database = firebase.database();

var name;
var destination;
var trainTime;
var frequency;

$(".submit-button").on("click", function(event) {
  event.preventDefault();

  name = $("#train-name")
    .val()
    .trim();
  destination = $("#destination")
    .val()
    .trim();
  trainTime = $("#train-time")
    .val()
    .trim();
  frequency = $("#frequency")
    .val()
    .trim();

  console.log("choo choo");

  database.ref().push({
    name: name,
    destination: destination,
    trainTime: trainTime,
    frequency: frequency,
  });

  database.ref().on("child_added", function(childSnapshot) {
    console.log(childSnapshot.val().name);
    name = childSnapshot.val().name;
    console.log(childSnapshot.val().destination);
    console.log(childSnapshot.val().trainTime);
    console.log(childSnapshot.val().frequency);
  });

  $(".li-train-name").append(name);
  $(".li-destination").append(destination);
  $(".li-frequency").append(tFrequency);
  $(".li-next-arrival").append(nextTrain);
  $(".li-minutes-away").append(tMinutesTillTrain);
});
