class Mover{
  constructor(img){
    this.pos=createVector(30,300);
    this.vel=createVector(1,0);
    this.acc=createVector(0,0);
    this.pic=img;
    this.score=0
                         
  }
  
  update(){
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0,0);
  }
  
  show(){
    fill("green");
    // ellipse(this.pos.x,this.pos.y, 50,50);
    image(this.pic, this.pos.x,this.pos.y, 50,50);
    textSize(20)
    text("SCORE: "+ this.score, this.pos.x,100);
  }
  
  applyForce(f){
    this.acc.add(f);
  }
  
  edges(){
    if(this.pos.y>350 ){
      this.vel.y=this.vel.y*-0.5;// algorithmic change
      this.pos.y=350
    }
    
    // Algorithmic change to force player to stay inside the game
    else if(this.pos.y < 0){
      this.vel.y=this.vel.y*-0.7;// algorithmic change
      this.pos.y=0
            }
  }
  
  hit(o){
    if((o.pos.x >= this.pos.x && o.pos.x <= (this.pos.x + 80)) &&
        (o.pos.y >= this.pos.y && o.pos.y <= (this.pos.y + 80))) {
        o.pos.y = -400;
        console.log("Player just hit baddie #"+o.getId());
        this.score++;
      
      // Algorithmic change to the scoring system
      if(this.score%50==0 && this.score !=0 ){
        this.score = this.score + 100;
      }
    }
    
  }
  
}