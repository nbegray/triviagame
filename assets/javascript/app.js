$(document).ready(function () 
{

    var quizContainer = document.getElementById('quiz');
    var resultsContainer = document.getElementById('results');
    var submitButton = document.getElementById('submit');
    console.log(quizContainer);

var currentQuestion = myQuestions[i],
var answers = [],


    function buildQuiz() {
        var output = [];



        var myQuestions = [{
            question: "Why am I building this quiz?",
            answers: { a: "no idea", b: "you wanted to?", c: "it was homework - thanks Tucker..." },
            correctAnswer = "c",
        },

        {
            question: "Who am I?",
            answers: { a: "That is a question for the ages, my friend.", b: "you are who you are", c: "You are you, I am me." },
            correctAnswer="a",
        },
        {
            question: "What is my dog's name?",
            answer: { a: "Hippolyta", b: "Jupiter", c: "A & B", d: "You have a dog?!" },
            correctAnswer = "c",

        },

        ];


        



            function showResults() {


            }
            buildQuiz();

            // on submit, show results
            submitButton.addEventListener('click', showResults);
            
            function timesUp()
            {
            var score = calculateScore()
            var location = "game.html" + score
            }
            setTimeout("timesUp()",60000)
            
            


        });  
