// waiting for the document to load
$(document).ready(function() {

//interface logic
      //search for the event
      $("#button").click(function(e){
        //fetch input from the input field
        var input = parseInt($("#number").val());
         document.write(input);
        //outputing the answer
        $("ul").append("<li>"+ output +"</li>");



// business logic
      //array to store the numbers
      var numbers=[];
     //getting the numbers in the range of 1- user's input
    function rangeFinder() {
         for(var i =0;i<=input;i++){
          numbers.push(i);
         }
    };
    rangeFinder();
    document.write(numbers);
    //test divisibility by 3
    var output=[];
    function divisibility3(){
      for(var i=0;i<=numbers.length;i++){
        if(numbers[i]%3===0){
          output.push("ping");
        }
        else{
          output.push(i);
        };  }
    }
    divisibility3();
    document.write(output);

    rangeFinder();
    document.write(numbers);
    //test divisibility by 5
    var output=[];
    function divisibility5(){
      for(var i=0;i<=numbers.length;i++){
        if (numbers[i]%5===0){
          output.push("pong");
        }
      else{
        output.push(i);
      }; }
    }
    divisibility5();
    document.write(output);

    rangeFinder();
    document.write(numbers);
    //test divisibility by 15
    var output=[];
    function divisibility15(){
      for(var i=0;i<=numbers.length;i++){
        if(numbers[i]%15===0){
          output.push("pingpong");
        }
        else{
          output.push(i);
        }; }
      }
    divisibility15();
    document.write(output);



    e.preventDefault();
  });
});
