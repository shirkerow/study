'use strict';

// const addtwonum = (x,y) =>{
//     return x+y;
// }

// alert(addtwonum(3,4));

// class calculator{
//     constructor(x,y){
//         this.x = x;
//         this.y = y;
//     }
//     addtwonum(){
//         return (this.x + this.y);
//     }
// }

// const calc = new calculator(3,4);
// let res = calc.addtwonum();
// alert (res);

class supernuclear{
    constructor(){
        this.name ='nuclear';
    }
opname(){
    return this.name;
}
}

class submarine extends supernuclear{
 opname(){
     return super.opname()+'submarine';
 }
 opfer(){
     return 'angrifer'
 }
}

 const wrath = new submarine;
 alert(wrath.opname() + wrath.opfer()); 
