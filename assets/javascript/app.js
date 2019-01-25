$(document).ready(function (){
$("#start").on("click", function () {

    for (i = 0; i < questions.length; i++)
        $("#quizsub").append("<h3>" + questions[i] + questions + "</h3>")
        {
        
        for (var j = 0; j < (questions[i].answers.length); j++) 
        {

            $("#quizsub").append("<input type='radio' name='question-'" + i + " 'value= '" + questions[i].answers[j] + "'>'" + questions[i].answers[j]);
        }
    }
    });



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
});
