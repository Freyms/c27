class Tower{
constructor (x,y,w,h){
let options = {
isStatic: true,
}
this.w = w;
this.h = h;
this.body = Bodies.rectangle(x,y,this.w,this.h,options);
}
}