var canvas,gameState,contestantCount,database,question,contestant,quiz;
var backgroundImage,allContestants,answer;
gameState=0;

function setup(){
  canvas = createCanvas(850,300);
  database = firebase.database();
  quiz=new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  background("pink");
  if(contestantCount===4){
    quiz.update(1);
 }
if(gameState===1){
  quiz.play();
 }
}
