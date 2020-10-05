var time = performance.now();
var fi =   1
     var k=0
     var f=0  
    var c=0      
    var tochka = document.getElementById('c5');          
    var mo=document.getElementById('boxl');//желт.квадрат
    var tum = document.getElementById('c6');//точка ж.кв
    var D=document.getElementById('container')//контейнер        
    var tuko=0//позиция точки желтого квадрата
    var poramo=25//вспомогательная переменная при убийстве
    var posk =0//позиция желтого квадрата
    var timep=150//окончательная позиция точки красного к.
    var pos=0 //позиция точки красного квадрата       
    var posx=0//позиция по x красного квадрата
    var posy=0//позиция по y красного квадрата  
     //физика кнопок передвижения
     //вправо
     document.onkeypress=function(event){
         if(event.key=="d"){
        movex();
         }
        else if(event.key=="w"){
            moveg();
             }
             else if(event.key=="a"){
                movey();
                 }
                 else if(event.key=="s"){
                    movez();
                     }
                     else if(event.key=="l"){
                    movef();
                     }}
            function movex() {
                timep-=10
             posx += 10;
            if(posx >150){
                 posx -= 10;            
                }
                 box.style.left = posx+'px';
             }                         
            //влево            
             function movey() { 
            timep+=10  
            posx -= 10;
            if (posx < 0){
                  posx += 10;
            } box.style.left = posx+'px';
            }     
            //вверх                   
            function movez() {    
                   posy += 10;                
                  if (posy > 150){ posy -= 10;}
                     box.style.top = posy+'px';
            } 
            //вниз      
            function moveg() {    
            posy -= 10;         
            if(posy <0){
                 posy += 10;                  
            }
             box.style.top = posy+'px';
            }               
            //конец физика кнопок передвижения
             // физика точки              
                    function movef() {
                        var t = setInterval(movea, 1);
                             function movea() {
                                if(pos >= timep){
                                absolut()
                                clearInterval(t);
                                                }
                                else{
                                pos += 2;
                                tochka.style.left = pos+'px';
                                    }      
                                    function absolut(){    
                                        pos-=timep; 
                                        tochka.style.left = pos+'px';           
                                        //строки трекера и убийство врага 
                                        if(pos == 0){
                                        clearInterval(t);
                                        if(posk+30>posy&&posk-30<posy){
                                        tanto()
                                            }                                               
                                            function tanto (){                 
                                                    go()
                                                }}}}};
      function go(){
        c35.innerHTML=fi;
        if(fi){
            fi+=1
            if(fi==101){
                alert("Поздравляю!Ты набрал 5 очков!")
                 hides.style.display ="block";
 hide.style.display="none"
            }
        }
         }           
    //конец физики точек
//начало ии(искусственного интелекта)
//автоматическое передвижение желтого квадрата
     window.onload = kok(),popa ()
     function kok() {
     var mim = setInterval(moveu, 500);  
    function moveu() {
        if(posk >= 150) {
            clearInterval(mim);
             frop()
        }
        else {
        poramo +=10
            posk += 10;
            mo.style.top = posk+'px';
                }                   
          }   
       function frop(){
                var mimo = setInterval(movelo, 500); 
                function movelo() {
                    if(posk == 0) {
            clearInterval(mimo);
            kok();
        }
        else {
        poramo=-10
            posk -= 10;
            mo.style.top = posk+'px';
                 }    }    }    } ;   
         //точка желтого квадрата           
         function popa(){
        tyto=setInterval(tumpi,2000);         
         function tumpi(){        
  var pi = setInterval(kervi,0.5);
    function kervi() {
     if(-150 >= tuko){
     tuko+=150;
            clearInterval(pi);
            }
            else{
            tuko -= 1;
         }
         tum.style.left = tuko+'px';
         //трекер и убийство игрока
            if(tuko==-timep){
             tyu()            
         }         
         function tyu(){       
             if(posk+30>posy&&posk-30<posy){
             clearInterval(tyto);
             clearInterval(pi);
 alert ("К сожалению ты умер,попробуй  снова и постарайся не умереть");
                 box.removeChild(tochka )
                 D.removeChild(box) 
                     hide.style.display = "none";  
                       hidess.style.display="block"; 
                        f+=1;
                        if(f==2){
                        privet ()                            
                        }
                       }
                }         
             }}
         }; 