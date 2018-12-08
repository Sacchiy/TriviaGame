$(document).ready(function() {
    $('#quiz-form').hide();
    $('#submit').hide();
    $('#start').on('click', function() {
        $('#quiz-form').toggle();
        $('#submit').toggle();
        $('#start').hide();
        var counter = 30;
        var interval = setInterval(function() {
            counter--;
            $("#timer").html("<h2>Time Remaining: " + counter + " seconds</h2>");
            if (counter == 0) {
            clearInterval(interval);
            $('#timer').hide();
            $('#quiz-form').hide();
            $('#submit').hide();
            $('#result').toggle();
        }}, 1000);
    });

  //  Once number hits zero...
  //if (counter === 0) {
  
    //  ...run the stop function.
  //  stop();
  
    //  Alert the user that time is up.
  //  alert("Time Up!");
  // }
  
  var correct= 0
  var incorrect= 0
  
  var arrays = {
      questions: [
          {   type: "radiogroup",
              name: "Friends",
              title: "1. In Friends, what is Ross's occupation?",
              isRequired: true,
              colCount: 4,
              choices: ["Docter", "Chef", "Marketing Professional", "Archeaologist"],
              correct: 3,
          },
          {   type: "radiogroup",
              name: "Full House",
              title: "2. In Full House, what is the name of second oldest daughter at Geller family?",
              isRequired: true,
              colCount: 4,
              choices: ["Michelle", "Emily", "Stephanie", "Rachel"],
              correct: 2,
          },
          {   type: "radiogroup",
              name: "Sabrina",
              title: "3. In Sabrina the Teenage Witch, what is the name of the cat Sabrina has?",
              isRequired: true,
              colCount: 4,
              choices: ["Rocky", "Dinah", "Gigi", "Salem"],
              correct: 3,
          },
          {   type: "radiogroup",
              name: "Ally McBeal",
              title: "4. In Ally McBeal, where does Ally work at?",
              isRequired: true,
              colCount: 4,
              choices: ["Fish and Sullivan Law Firm", "Cage and Fish Law Firm", "Meyer and Fish Law Firm", "Cage and MEyer Law Firm"],
              correct: 1,
          },
          {   type: "radiogroup",
              name: "Buffy",
              title: "5. Which actor turned down the role in the series Buffy the Vampire Slayer?",
              isRequired: true,
              colCount: 4,
              choices: ["Ryan Reynolds", "Ryan Gosling", "Brad Pitt", "Chris Evans"],
              correct: 0,
          },
          {   type: "radiogroup",
              name: "Seinfeld",
              title: "6. Which show followed the every day existence of George, Kramer, Elaine and Jerry?",
              isRequired: true,
              colCount: 4,
              choices: ["Friends", "Will & Grace", "Seinfeld", "Saved by the bell"],
              correct: 2,
          },
          {   type: "radiogroup",
              name: "Roswell",
              title: "7. In Roswell, what was the name of Alex's band?",
              isRequired: true,
              colCount: 4,
              choices: ["The Whits", "Alex the Great", "The Fitz", "Nasedo"],
              correct: 0,
          },
          {   type: "radiogroup",
              name: "Boy Meets World",
              title: "8. In Boy Meets World, who was Cory's love interest?",
              isRequired: true,
              colCount: 4,
              choices: ["Amanda", "Veronica", "Samantha", "Topanga"],
              correct: 3,
          },
      ]
  };
  
  var q= arrays.questions
  
  //Questions and Answer Options Appear
  $('#q1').html(q[0].title);
  $("label[for=q1-one]").html(q[0].choices[0]);
  $("label[for=q1-two]").html(q[0].choices[1]);
  $("label[for=q1-three]").html(q[0].choices[2]);
  $("label[for=q1-four]").html(q[0].choices[3]);
  
  $('#q2').html(q[1].title);
  $("label[for=q2-one]").html(q[1].choices[0]);
  $("label[for=q2-two]").html(q[1].choices[1]);
  $("label[for=q2-three]").html(q[1].choices[2]);
  $("label[for=q2-four]").html(q[1].choices[3]);
  
  $('#q3').html(q[2].title);
  $("label[for=q3-one]").html(q[2].choices[0]);
  $("label[for=q3-two]").html(q[2].choices[1]);
  $("label[for=q3-three]").html(q[2].choices[2]);
  $("label[for=q3-four]").html(q[2].choices[3]);
  
  $('#q4').html(q[3].title);
  $("label[for=q4-one]").html(q[3].choices[0]);
  $("label[for=q4-two]").html(q[3].choices[1]);
  $("label[for=q4-three]").html(q[3].choices[2]);
  $("label[for=q4-four]").html(q[3].choices[3]);
  
  $('#q5').html(q[4].title);
  $("label[for=q5-one]").html(q[4].choices[0]);
  $("label[for=q5-two]").html(q[4].choices[1]);
  $("label[for=q5-three]").html(q[4].choices[2]);
  $("label[for=q5-four]").html(q[4].choices[3]);
  
  $('#q6').html(q[5].title);
  $("label[for=q6-one]").html(q[5].choices[0]);
  $("label[for=q6-two]").html(q[5].choices[1]);
  $("label[for=q6-three]").html(q[5].choices[2]);
  $("label[for=q6-four]").html(q[5].choices[3]);
  
  $('#q7').html(q[6].title);
  $("label[for=q7-one]").html(q[6].choices[0]);
  $("label[for=q7-two]").html(q[6].choices[1]);
  $("label[for=q7-three]").html(q[6].choices[2]);
  $("label[for=q7-four]").html(q[6].choices[3]);
  
  $('#q8').html(q[7].title);
  $("label[for=q8-one]").html(q[7].choices[0]);
  $("label[for=q8-two]").html(q[7].choices[1]);
  $("label[for=q8-three]").html(q[7].choices[2]);
  $("label[for=q8-four]").html(q[7].choices[3]);
  
  //results
      var radioValueOne = $('input[name="option1"]:checked').val();
      var radioValueTwo = $('input[name="option2"]:checked').val();
      var radioValueThree = $('input[name="option3"]:checked').val();
      var radioValueFour = $('input[name="option4"]:checked').val();
      var radioValueFive = $('input[name="option5"]:checked').val();
      var radioValueSix = $('input[name="option6"]:checked').val();
      var radioValueSeven = $('input[name="option7"]:checked').val();
      var radioValueEight = $('input[name="option8"]:checked').val();
      
      //storing checked button value to jquery
      
      if(radioValueOne == q[0].correct) {
          correct = correct + 1;
          console.log("Correct: " + correct);
      } else {
          incorrect = incorrect + 1;
          console.log("Incorrect: " + incorrect);
      };
      if (radioValueTwo == q[1].correct) {
          correct = correct + 1;
      } else {
          incorrect = incorrect + 1;
      };
      if (radioValueThree == q[2].correct) {
          correct = correct + 1;
      } else {
          incorrect = incorrect + 1;
      };
      if (radioValueThree == q[3].correct) {
          correct = correct + 1;
      } else {
          incorrect = incorrect + 1;
      };
      if (radioValueThree == q[4].correct) {
          correct = correct + 1;
      } else {
          incorrect = incorrect + 1;
      };
      if (radioValueThree == q[5].correct) {
          correct = correct + 1;
      } else {
          incorrect = incorrect + 1;
      };
      if (radioValueThree == q[6].correct) {
          correct = correct + 1;
      } else {
          incorrect = incorrect + 1;
      };
      if (radioValueThree == q[7].correct) {
          correct = correct + 1;
      } else {
          incorrect = incorrect + 1;
      };
  
      $('#submit').on('click',function(){
          $('#quiz-form').hide();
          $('#submit').hide();
          $('#start').hide();
          $('#timer').hide();
          $('#result').toggle();
          $('#result').html("Correct: " + correct + "<p>Incorrect: " + incorrect + "<p>Unanswered: ");
      });
  
    //  var _t = this;
    //  _t.userPick = null;
    //  _t.answers = {
    //      correct: 0,
    //      incorrect: 0
    // };
  
      // _t.images = null;
      // _t.count = 30;
      // _t.current = 0;
  
  //_t.ask = function() {
         // if (arrays.questions[_t.current]) {
           //   $("#timer").html("Time remaining: " + "00:" + _t.count + " secs");
             // $("#question_div").html(arrays.questions[_t.current].question);
             // var choicesArr = _t.questions[_t.current].choices;
             // var buttonsArr = [];
  
             // for (var i = 0; i < choicesArr.length; i++) {
             //     var button = $('<button>');
             //     button.text(choicesArr[i]);
             //     button.attr('data-id', i);
             //     $('#choices_div').append(button);
             // }
             // window.triviaCounter = setInterval(_t.timer, 1000);
          // } else {
             // $('body').append($('<div />', {
               //   text: 'Unanswered: ' + (
                 //     _t.questions.length - (_t.answers.correct + _t.answers.incorrect)),
                 // class: 'result'
             // }));
            //  $('#start_button').text('Restart').appendTo('body').show();
         // }
     // };
      // When the user submits the form,
      //   Check what answer they picked
      //   And tell them if they're correct
  
      // submit
      //$("#quiz-form").on("submit", function(event) {
       //   event.preventDefault();
       //   var $answer = $("#quiz-answer"); 
       //   var answer = $answer.val();
      //  console.log(answer);
        //  if (answer === "crocodile") {
        //      $("#result").text("Woweeee! You got it! WOOO PARTY!");
        //  }
          
     // });




});
