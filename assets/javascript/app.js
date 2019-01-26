$(document).ready(function () {
    $("#start").on('click', function () {
      game.start ();
        var questions = [

            {
                question: "Why am I doing this assignment?",
                answers: ["I don't want to be broke and homeless.", "Tucker said we had to...", "I want the certificate.", "All of the above"],
                correctAnswer: "All of the above",
            },
            {
                question: "What is Natalie's favorite drink?",
                answers: ["coffee", "extra strong coffee", "monster energy drink", "something with alcohol in it - it's Friday, afterall", "B & D"],
                correctAnswer: "B & D",
            },
            {
                question: "What is my dog's name?",
                answers: ["Hippolyta", "Jupiter", "Bear", "All of the above"],
                correctAnswer: "All of the above!"
            },
            {
                question: "What is the name of the gurgling sounds your stomach makes?",
                answers: ["Hunger.", "Gurglies.", "Borborgymi.", "Feed yourself!"],
                correctAnswer: "Borborgymi.",
            }];



        $("#start").remove();
        {
            for (i = 0; i < questions.length; i++) {
                $("#quizsub").append("<h3>" + questions[i].question + "</h3>")
                {
                    for (var j = 0; j < (questions[i].answers.length); j++) {


                        $("#quizsub").append("<input type='radio' name='question- " + i + " 'value= '" + questions[i].answers[j] + "'>" + questions[i].answers[j]);

                    }
                }
            }

        };



        var game = {
            correct: 0,
            wrong: 0,
            counter: 120,
            countdown: function () {
                game.counter--;
                $("#counter").html(game.counter);
                if (game.counter <= 0) {
                    console.log("Time is up!");
                    game.done();
                }

            },
            start: function () {
                timer = setInterval(game.countdown, 1000);
                $("#quizsub").prepend("<h2>Time Remaining: <span id='counter' 120 Seconds </span> </h2>")
            },
            done: function(){

            }

        };



















    });


});
