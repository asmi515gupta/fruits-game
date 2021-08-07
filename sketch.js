var fruit1,fruit2,fruits;
var basket,basketImg;
var background;
var fruit1Img,fruit2Img,backImg;
var count=0;


function preload(){
    fruit1Img= loadImage("apple2.png")
    fruit2Img= loadImage("grapes.jpg")
    backImg= loadImage("background.jpg")
    basketImg=loadImage("basket.jpg")
}


function setup(){
createCanvas(1000,600)


basket = createSprite(500,500,50,50);
basketgrp=new Group()
fruitgrp=new Group() 


}

function draw(){
background("white");
    
   
   
        
    
    background.scale=2.5
    basket.scale=0.5

   
  
    
    basket.addImage(basketImg)

    basketgrp.add(basket);

    
    
    
    if(keyDown(RIGHT_ARROW)){
        basket.x= basket.x+5;
    }

    if(keyDown(LEFT_ARROW)){
        basket.x= basket.x-5;
    }

    if (frameCount % 50 ===0) {
        fruits = createSprite(random(0,1000),60, 100, 600)

        fruits.velocityY = 3;
        var r=random(1,20)
        //console.log(r);
        var rand = Math.round(random(1,2));
        switch(rand){
            case 1: fruits.addImage("fruit1",fruit1Img);
            break;
            case 2: fruits.addImage("fruit1", fruit2Img);
            fruits.scale=0.1;
            break;
        }
        fruitgrp.add(fruits);
        fruits.depth=basket.depth;


        //if(fruits.y>500){
           // count=count+1
            //console.log(count);
        //}
        
        if(basketgrp.isTouching(fruitgrp)){

            count=count+1
            console.log(count);
            fruitgrp.destroyEach();


           console.log(fruits.depth)
           console.log(basket.depth) }
            

    }

     text(count,100,100);
    

    

    drawSprites();
        }