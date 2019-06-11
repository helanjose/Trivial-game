var intervalId;
var time=60;
var correct=0;
var wrong=0
var radioValue1='';
var radioValue2='';
var radioValue3='';

var ansbank=['Primary Memory','Output device' ,'Carbon Copy'];






window.onload = function() {
    $("#start").click(function() {
        $(".container-fluid").hide();
        $(".container-fluid2").hide();

    } );
    
 
startTimer();

    $("input[type='radio']").click(function(){
        radioValue1 = $("input[name='q1']:checked").val();
        console.log("radio1"+radioValue1);
        
        radioValue2 = $("input[name='q2']:checked").val();
        
        radioValue3 = $("input[name='q3']:checked").val();
        
       
    });
   
setInterval(check,60000);
    


$("#finished").click(function(){
  check();



});

function display(){
  
  $(".container-fluid2").show();
  
  var newdiv=$("<div>");
  $('.container-fluid2').append(newdiv.text("correct:"+correct));
  
  var newdiv2=$("<div>");
  newdiv.append(newdiv2.text("wrong:"+wrong));
  
  
}





function check()
{
  var counts=0;
  var user_input=[radioValue1,radioValue2,radioValue3];
   // $newdiv=("<div>");
   for(var i=0;i<ansbank.length;i++)
{
  for(var j=0;j<user_input.length;j++)
  {
    if(ansbank[i]==user_input[j])
    {
      counts+=1;
    }
  }
}
console.log("counts"+counts);
if(counts==3){
  correct=3;
  wrong=0;
  console.log("correct"+correct);
}
else if(counts==2){
  correct=2;
  wrong=1;
  console.log("correct"+correct);
}
else{
  if(counts==1)
  {
    correct=1;
    wrong=2;
    console.log("correct"+correct);
  }
  else{
    correct=0;
    wrong=3;
    console.log("correct:"+correct+"wrong:"+wrong);
  }
}

display();  
     

}

function startTimer() {
    
      intervalId=setInterval(count,1000);
     // console.log("inside start");
    
    }
  function count(){
     // console.log("inside count");
      time-=1;
      var current_time=timeConverter(time);
      $("#display").html(current_time);

  }
  
function timeConverter(t) {

    //  Takes the current time in seconds and convert it to minutes and seconds (mm:ss).
    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);
  
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
  
    if (minutes === 0) {
      minutes = "00";
    }
  
    else if (minutes < 10) {
      minutes = "0" + minutes;
    }
  
    return minutes + ":" + seconds;
  }
  
}