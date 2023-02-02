Player1_name = localStorage.getItem("Player1_name");
Player2_name = localStorage.getItem("Player2_name");
player1_score = 0;
player2_score = 0;
document.getElementById("Player1_name").innerHTML= Player1_name + ":";
document.getElementById("Player2_name").innerHTML= Player2_name + ":";
document.getElementById("Player1_score").innerHTML = player1_score;
document.getElementById("Player2_score").innerHTML = player2_score;
document.getElementById("Player_Question").innerHTML = "Question Turn - " + Player1_name;
document.getElementById("Player_Answer").innerHTML = "Answer Turn - " + Player2_name;
function Send(){
    get_word = document.getElementById("word").value;
    word = get_word.toLowerCase();
    console.log("word inLowerCase = "+ word);

   charAt1 = word.charAt(1);
   console.log(charAt1);

   length_divide_2 = Math.floor(word.length/2);
   charAt2 = word.charAt(length_divide_2);
   console.log(charAt2);

   length_minus_1 = word.length - 1;
   charAt3 = word.charAt(length_minus_1);
   console.log(charAt3);

   remove_charAt1=word.replace(charAt1,"_");
   remove_charAt2=remove_charAt1.replace(charAt2,"_");
   remove_charAt3=remove_charAt2.replace(charAt3,"_");
   console.log(remove_charAt3);

   Question_word = "<h4 id='word_display'> Q."+remove_charAt3+"</h4>";
   input_box = "<br> Answer :  <input type='text' id='input_check_box'> ";
   check_button = "<br><br> <button class='btn btn-info' onclick='Check'()'>Check</button>";
   row =Question_word+input_box+check_button;
   document.getElementById("output").innerHTML = row ;
   document.getElementById("word").value ="";




}
Question_turn="Player1";
Answer_turn="Player2";

function Check(){
    get_answer = document.getElementById("input_check_box").value;
    answer = get_answer.toLowerCase();
    console.log("answer in lower case -" + answer);
    if(answer == word)
         {
              if(Answer_turn == "Player1")  
    {
    player1_score = player1_score+1;
    document.getElementById("Player1_score").innerHTML=player1_score;
    }
    else{
        player2_score = player2_score+1;
        document.getElementById("Player2_score").innerHTML=player2_score;
    
}
}
if(Question_turn == "Player1")
{
  Question_turn = "Player2"
  document.getElementById("Player_Question").innerHTML = "Question Turn -" +Player2_name;
}
else{
Question_turn = "Player1"
document.getElementById("Player_Question").innerHTML = "Question Turn - "+Player1_name;
}
if(Answer_turn == "Player1")
{
    Answer_turn = "Player2"
    document.getElementById("Player_Answer").innerHTML = "Answer Turn - "+Player2_name;
}
else
{
Answer_turn = "Player1"
document.getElementById("Player_Answer").innerHTML = "Answer Turn - "+Player1_name;
}
document.getElementById("output").innerHTML = "";
 }

