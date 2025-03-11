class Rectangle {
  constructor(width,height){
    this.width = width;
    this.height = height;

  }
  set width(newWidth){
    if(newWidth > 0){
      this._width = newWidth;
    }
    else{
      console.log("Width must be a positive number")
    }
  }
    set height(newheight){
      if(newheight > 0){
        this._height = newheight;
      }
      else{
        console.log("Height must be a positive number")
      }
    }

    get width(){
      return this._width;
    }

    get height(){
      return this._height;
    }

    get area(){
      return this._width * this._height;
    }
  }

const rectangle = new Rectangle(3 ,4);
console.log(rectangle.width);
console.log(rectangle.height);
console.log(rectangle.area);

