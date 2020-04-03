'use strict';
const topmenu = document.getElementById('topmenu');

let today = new Date();
let born = new Date("1995/12/31");
let age = Math.floor(Math.floor((today - born) / 86400000)/365); //ミリ秒→日数→年に変換
document.getElementById("age").innerHTML=age;  //年齢を動的に出力

topmenu.addEventListener("mouseleave",() =>{          //上メニュー閉じる
    topmenu.className = "";
})

topmenu.addEventListener("mouseenter",() =>{        //上メニュー開く
    topmenu.className = "opennow";
})

var clkme = document.getElementById("clkme");
var canvas = document.getElementById("maingraphic");
var ctx = canvas.getContext("2d");
var ballRadius = [1,2,3,4,5];　//ボールサイズ
var n = 0;
var colors = ["#F06543","#DABECA","#B2FFD6","#F6D8AE","#0AD3FF"]    //ボールの色
var x = [canvas.width/3, canvas.width/6, canvas.width/2,canvas.width/7,canvas.width/5]; //ボール始点
var y = [canvas.height-80,canvas.height-40,canvas.height-10,canvas.height-40,canvas.height-70];//ボール始点
var dx = [6,3,7,-8,7];　//ボール移動値
var dy = [-2,5,5,6,6];　//ボール移動値
var drawedx = [[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0]];
var drawedy = [[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0]];
var drawedsiz = [[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0]];

function drawBall(i) {
    ctx.beginPath();
    ctx.arc(x[i], y[i], ballRadius[i], 0, Math.PI*2);                               //先端の描画
    drawedx[i][0] = x[i];
    drawedy[i][0] = y[i];
    drawedsiz[i][0] = ballRadius[i] 
    ctx.fillStyle = colors[i];
    ctx.fill();
    ctx.closePath();
    for(let l = 10;l > 0;l--){                                                      //軌跡用描画処理
        drawedx[i][l] = drawedx[i][l-1];
        drawedy[i][l] = drawedy[i][l-1];
        drawedsiz[i][l] = drawedsiz[i][l-1];
        if(drawedsiz[i][l]-(ballRadius[i]/10) >= 0){
            ctx.beginPath();
            ctx.arc(drawedx[i][l], drawedy[i][l], drawedsiz[i][l]-(ballRadius[i]/10), 0, Math.PI*2);
            ctx.fillStyle = colors[i];
            ctx.fill();
            ctx.closePath();
            drawedsiz[i][l] = drawedsiz[i][l]-(ballRadius[i]/10);
        }
    }   
}

function draw() {                                                                   //描画処理
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for(let i=0;i < n;i++){                                                         //ball描画処理*個数
    drawBall(i);
    if(x[i] + dx[i] > canvas.width-ballRadius[i] || x[i] + dx[i] < ballRadius[i]) { //反射処理
        dx[i] = -dx[i];
    }
    if(y[i] + dy[i] > canvas.height-ballRadius[i] || y[i] + dy[i] < ballRadius[i]) {   
        dy[i] = -dy[i];
    }
    x[i] += dx[i]*0.5;                                                                    //位置移動
    y[i] += dy[i]*0.5;
    }
}
setInterval(draw, 30);

clkme.addEventListener("click",() =>{                                              //クリック時処理           
    if(n<5){
        n = n + 1;                                                                  //ball追加
    }else{
        clearInterval(draw);
    }
    if(n <= 4){                                                                     //text変更
        clkme.innerHTML='You can Add more ball';  
    }else{
        clkme.innerHTML='';
        document.getElementById("welcome").className = "open";
        document.getElementById("welcometext").className = "open";
    }
 })

document.getElementById("welcome").addEventListener("click",() =>{
    location.hash = "jump2";
})

const tr1 = document.getElementById("tr1"); //以下趣味コンテンツの開閉処理
const tr2 = document.getElementById("tr2");
const tr3 = document.getElementById("tr3");
const tr4 = document.getElementById("tr4");
const tr5 = document.getElementById("tr5");
const tr6 = document.getElementById("tr6");

tt1.addEventListener("click",() =>{
    if(tr1.className === 'ditailoff'){
        tr1.className="";
    }else{
        tr1.className = "fadeout"
        setTimeout(function(){tr1.className = "ditailoff"},400);
    }
    document.getElementById("ltri1").classList.toggle("triangleleft");
    document.getElementById("rtri1").classList.toggle("triangleright");
})

tt2.addEventListener("click",() =>{
    if(tr2.className === 'ditailoff'){
        tr2.className="";
    }else{
        tr2.className = "fadeout"
        setTimeout(function(){tr2.className = "ditailoff"},400);
    }
    document.getElementById("ltri2").classList.toggle("triangleleft");
    document.getElementById("rtri2").classList.toggle("triangleright");
})

tt3.addEventListener("click",() =>{
    if(tr3.className === 'ditailoff'){
        tr3.className="";
    }else{
        tr3.className = "fadeout"
        setTimeout(function(){tr3.className = "ditailoff"},400);
    }
    document.getElementById("ltri3").classList.toggle("triangleleft");
    document.getElementById("rtri3").classList.toggle("triangleright");
})

tt4.addEventListener("click",() =>{
    if(tr4.className === 'ditailoff'){
        tr4.className="";
    }else{
        tr4.className = "fadeout"
        setTimeout(function(){tr4.className = "ditailoff"},400);
    }
    document.getElementById("ltri4").classList.toggle("triangleleft");
    document.getElementById("rtri4").classList.toggle("triangleright");
})

tt5.addEventListener("click",() =>{
    if(tr5.className === 'ditailoff'){
        tr5.className="";
    }else{
        tr5.className = "fadeout"
        setTimeout(function(){tr5.className = "ditailoff"},400);
    }
    document.getElementById("ltri5").classList.toggle("triangleleft");
    document.getElementById("rtri5").classList.toggle("triangleright");
})

tt6.addEventListener("click",() =>{
    if(tr6.className === 'ditailoff'){
        tr6.className="";
    }else{
        tr6.className = "fadeout"
        setTimeout(function(){tr6.className = "ditailoff"},400);
    }
    document.getElementById("ltri6").classList.toggle("triangleleft");
    document.getElementById("rtri6").classList.toggle("triangleright");
})