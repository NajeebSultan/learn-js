class Rectangle {
  constructor(width,height){
    this.width = width;
    this.height = height;

  }
  set width(newWidth){
    if(newWidth > 0){
      this.width = newWidth;
    }
    else{
      console.log("Width must be a positive number")
    }
  }
    set height(newheight){
      if(newheight > 0){
        this.height = newheight;
      }
      else{
        console.log("Height must be a positive number")
      }
    }
  }

const rectangle = new Rectangle(-1000000 , "pizza");
console.log(rectangle.width);
console.log(rectangle.height);