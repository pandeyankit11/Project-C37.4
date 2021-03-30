class Question{
    constructor(){
        this.title=createElement('h1');
        this.input1=createInput("Enter Your Name Here...");
        this.input2=createInput("Enter Your Option No.");
        this.button=createButton('Submit');
        this.question=createElement('h3');
        this.option1 =createElement('h4');
        this.option2 =createElement('h4');
        this.option3 =createElement('h4');
        this.option4 =createElement('h4');
         }
         hide(){
             this.title.hide();
             this.input1.hide();
             this.button.hide();
             this.input2.hide();
         }
         display(){
            this.title.html("MyQuiz Game");
            this.title.position(720,0);

            this.question.html("Question:- What starts and ends with the letter 'E', but has only one letter?");
            this.question.position(450,80);
            this.option1.html("1. Everyone ");
            this.option1.position(450,100);
            this.option2.html("2. Envelop ");
            this.option2.position(450,120);
            this.option3.html("3. Estimate ");
            this.option3.position(450,140);
            this.option4.html("4. Example ");
            this.option4.position(450,160);

            this.input1.position(450,230);
            this.input2.position(950,230);
            this.button.position(760,250);

            this.buttton.mousePressed(()=>{
                this.title.hide();
                this.input1.hide();
                this.input2.hide();
                this.button.hide();
                contestant.name =this.input1.value();
                contestantCount+=1;
                contestant.index =contestantCount;
                contestant.update();
                contestant.updateCount(contestantCount);
            });
           }
          }
         
