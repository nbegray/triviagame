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

            start:function () {
                timer = setInterval(game.countdown, 1000);

                $("#quizsub").prepend("<h2>Time Remaining: <span id='counter' 120 Seconds </span> </h2>");
                $("#start").remove();

                for (i = 0; i < questions.length; i++) 
                {
                    $("#quizsub").append("<h3>" + questions[i].question + "</h3>")}

                    for (var j = 0; j < (questions[i].answers.length); j++) {


                        $("#quizsub").append("<input type='radio' name='question- " + i + " 'value= '" + questions[i].answers[j] + "'>" + questions[i].answers[j])

                    }

                

            },


            done:function () {
                $.each($('input[name="question-0]":checked'), function()
                {
                    if($(this).val() == questions[0].correctAnswer){
                        game.correct++;
                    }else{
                        game.wrong++;
                    }
                });
                $.each($('input[name="question-1]":checked'), function()
                {
                    if($(this).val() == questions[1].correctAnswer){
                        game.correct++;
                    }else{
                        game.wrong++;
                    }
                });
                $.each($('input[name="question-2]":checked'), function()
                {
                    if($(this).val() == questions[2].correctAnswer){
                        game.correct++;
                    }else{
                        game.wrong++;
                    }
                });
                $.each($('input[name="question-3]":checked'), function()
                {
                    if($(this).val() == questions[3].correctAnswer){
                        game.correct++;
                    }else{
                        game.wrong++;
                    }
                });
                this.result();
            },
            result:function (){
                clearInterval(timer);
                $('#quizsub h2').remove();
                $('#quizsub').html("<h2> All Done!</h2>");
                $('#quizsub').append("<h3> Correct Answers:  "+ this.correct)+ "</h3>";
                $('#quizsub').append("<h3>Wrong Answers:   " + this.wrong + "</h3>");
                

            }


        

        };



















    });


});
