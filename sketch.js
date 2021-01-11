var dog,happyDog,database,foodS,foodStock;

function preload()
{
dog.loadImage=("dogImg.png");
happyDog.loadImage=("dogImg2.png");
}

function setup() {
	createCanvas(500,500);
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() { 
  background(46,139,87);
  if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happyDog);
  } 

  drawSprites();
  //add styles here

}
function readStock(data){
foodS=data.val();
}

function writeStock(x){
  if(x<=0){
   x=0;
  }else{
   x=x-1;

  }

  database.ref('/').updates({
    Food:x
  })

}



