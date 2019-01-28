$(document).ready(function () {

    $("#start").on('click', function () {
        game.start()
    });

    $(document).on('click', "#end", function () {
        game.done();
    });

    var questions = [

        {
            question: "Why am I doing this assignment?",
            answers: ["I dont want to be broke and homeless.", "Tucker said we had to...", "I want the certificate.", "This"],
            correctAnswer: "This",
        },
        {
            question: "What is Natalie's favorite drink?",
            answers: ["coffee", "extra strong coffee", "monster energy drink", "something with alcohol in it - its Friday, afterall", "None"],
            correctAnswer: "something with alcohol in it - its Friday, afterall",
        },
        {
            question: "What is my dogs name?",
            answers: ["Hippolyta", "Jupiter", "Bear", "Joy"],
            correctAnswer: "Jupiter"
        },
        {
            question: "What is the name of the gurgling sounds your stomach makes?",
            answers: ["Hunger", "Gurglies", "Borborgymi", "Feed yourself!"],
            correctAnswer: "Borborgymi",
        }];


    var game = {
        correct: 0,
        wrong: 0,
        counter: 30,
        countdown: function () {
            game.counter--;
            $("#counter").html(game.counter);
            if (game.counter <= 0) {
                console.log("Time is up!");
                game.done();
            };

        },

        start: function () {
            timer = setInterval(game.countdown, 1000);

            $("#quizsub").prepend("<h2>Time Remaining: <span id='counter'> 30 Seconds </span> </h2>");

            $("#start").remove();

            for (var i = 0; i < questions.length; i++) {
                $("#quizsub").append("<h3>" + questions[i].question + "</h3>");


                for (var j = 0; j < (questions[i].answers.length); j++) {


                    $("#quizsub").append("<input type='radio' name='question- " + i + " ' value= '" + questions[i].answers[j] + "''>" + questions[i].answers[j]);

                }
            }
            $('#quizsub').append('<br><br><button id="end"> DONE!</button>');



        },
        


        done: function () {
            console.log("done function fired");
            var inputs = $("#quizsub").children("input:checked");
            console.log(inputs);
            for (var i = 0; i < inputs.length; i++) {
                if ($(inputs[i]).val() === questions[i].correctAnswer) {
                    game.correct++;
                } else {
                    game.wrong++;
                }
            }
            game.result();
        },
            

            result: function () {
                clearInterval(timer);
                $('#quizsub h2').remove();
                $('#quizsub').html("<h2> All Done!</h2>");
                $('#quizsub').append("<h3> Correct Answers:  " + game.correct) + "</h3>";
                $('#quizsub').append("<h3>Wrong Answers:   " + game.wrong + "</h3>");
                $('#quizsub').append("<h3>Unanswered Questions: " + (questions.length - (game.wrong + game.correct)) + "</h3>");


            },
        
    };
 });
        


























