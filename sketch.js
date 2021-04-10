const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var backgroundImg;
var engine, world;
var backgroundImg;



function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundImg)
    background(backgroundImg);

    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){
    var response= await fetch("https://worldtimeapi.org/api/timezone/Asia/kolkata")
    var responseJSON = await response.json();
    var datetime = responseJSON.datetime
    var hour= datetime.slice(11,13)
    console.log(hour)
    if(hour >=04 && hour <= 06 ){
    bg = "sprites/sunrise1.png"
    }
    
    else if((hour >=06 && hour <= 08 )){
    bg = "sprites/sunrise2.jpg"
    
    }

    else if((hour >=023 && hour == 0 )){
        bg = "sprites/sunset10.jpg"
        
        }
        else if((hour ==0 && hour <= 03 )){
            bg = "sprites/sunset11.jpg"
            
            }
            else{
                bg = "sprites/sunset12.jpg"
                
                }
    backgroundImg= loadImage(bg)

}
