//waiting fpr the document to load
$(document).ready(function(){
  //user interface logic
  //search for the event
  $("#btnroll").click(function(e){
    var numbers = parseInt($("#btnroll").val());
    //output numbers
    function finalOutput(){
      for(var i=1;i<=(output.length-1);i++){
        $("ul").append("<li>" + output[i] + "</li>");
      }
    }

    //business logic
      //array to store the numbers
      var numbers=[];
      //getting the numbers in the range of 1-6
      function rangeFinder() {
        for(var i=1;i<=numbers;i++){
          numbers.push(i);
        }
      };
      rangeFinder();
      console.log(numbers);
      //roll numbers 1- 6
      var output=[];
      function rolldice(){
        for(var i=1;i<=numbers.length;i++){
          if(i%6===0){
            output.push("Yay 6 points!")
          }
          else if(i%5===0){
            output.push("Yay 5 points!");
          }
          else if(i%4===0){
            output.push("Yay 4 points!");
          }
          else if(i%3===0){
            output.push("Yay 3 points!");
          }
          else if(i%2===0){
            output.push("Yay 2 points!");
          }
          else if(i%1===0){
            output.push("Oops you lose!");
          }else{output.push("hold");}
        }
        rollDice();
        console.log(output);

        finalOutput();
        e.preventDefault();


      }
  });
});
