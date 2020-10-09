var time = performance.now();
var countUserHits = 1
var f = 0
var tochka = document.getElementById('c5');
var yellowSquare = document.getElementById('boxl'); //желт.квадрат
var dotYellowSquare = document.getElementById('c6'); //точка ж.кв
var container = document.getElementById('container') //контейнер        
var positionDotYellowSqaure = 0 //позиция точки желтого квадрата
var positionYellowSquare = 0 //позиция желтого квадрата
var finalPositionDotRedSquare = 150 //окончательная позиция точки красного к.
var positionDotRedSquare = 0 //позиция точки красного квадрата       
var positionOnTheXRedSqaure = 0 //позиция по x красного квадрата
var positionOnTheYRedSqaure = 0 //позиция по y красного квадрата 

    //физика кнопок передвижения
    //вправо
document.onkeypress = function(event) {
    if (event.key == "d") {
        moveX();
    } else if (event.key.toLowerCase() == "w") {
        moveY();
    } else if (event.key.toLowerCase() == "a") {
        moveReverseX();
    } else if (event.key.toLowerCase() == "s") {
        moveReverseY();
    } else if (event.key.toLowerCase() == "l") {
        movef();
    }
}

//Вправо
function moveX() {
    finalPositionDotRedSquare -= 10
    positionOnTheXRedSqaure += 10;
    if (positionOnTheXRedSqaure > 150) {
        positionOnTheXRedSqaure -= 10;
    }
    box.style.left = positionOnTheXRedSqaure + 'px';
}
//влево            
function moveReverseX() {
    finalPositionDotRedSquare += 10
    positionOnTheXRedSqaure -= 10;
    if (positionOnTheXRedSqaure < 0) {
        positionOnTheXRedSqaure += 10;
    }
    box.style.left = positionOnTheXRedSqaure + 'px';
}
//вверх                   
function moveY() {
    positionOnTheYRedSqaure += 10;
    if (positionOnTheYRedSqaure > 150) {
        positionOnTheYRedSqaure -= 10;
    }
    box.style.top = positionOnTheYRedSqaure + 'px';
}
//вниз      
function moveReverseY() {
    positionOnTheYRedSqaure -= 10;
    if (positionOnTheYRedSqaure < 0) {
        positionOnTheYRedSqaure += 10;
    }
    box.style.top = positionOnTheYRedSqaure + 'px';
}
//конец физика кнопок передвижения
// физика точки              
function movef() {
    var t = setInterval(movea, 1);

    function movea() {
        if (positionDotRedSquare >= finalPositionDotRedSquare) {
            absolut()
            clearInterval(t);
        } else {
            positionDotRedSquare += 2;
            tochka.style.left = positionDotRedSquare + 'px';
        }

        function absolut() {
            positionDotRedSquare -= finalPositionDotRedSquare;
            tochka.style.left = positionDotRedSquare + 'px';
            //строки трекера и убийство врага 
            if (positionDotRedSquare == 0) {
                clearInterval(t);
                if (positionYellowSquare + 30 > positionOnTheYRedSqaure && positionYellowSquare - 30 < positionOnTheYRedSqaure) {
                    tanto()
                }

                function tanto() {
                    go()
                }
            }
        }
    }
};

function go() {
    c35.innerHTML = countUserHits;
    if (countUserHits) {
        countUserHits += 1
        if (countUserHits == 101) {
            alert("Поздравляю!Ты набрал 5 очков!")
            hides.style.display = "block";
            hide.style.display = "none"
        }
    }
}
//конец физики точек
//начало ии(искусственного интелекта)
//автоматическое передвижение желтого квадрата
window.onload = kok(), popa()

function kok() {
    var mim = setInterval(moveu, 500);

    function moveu() {
        if (positionYellowSquare >= 150) {
            clearInterval(mim);
            frop()
        } else {
            positionYellowSquare += 10;
            yellowSquare.style.top = positionYellowSquare + 'px';
        }
    }

    function frop() {
        var mimo = setInterval(movelo, 500);

        function movelo() {
            if (positionYellowSquare == 0) {
                clearInterval(mimo);
                kok();
            } else {
                positionYellowSquare -= 10;
                yellowSquare.style.top = positionYellowSquare + 'px';
            }
        }
    }
};
//точка желтого квадрата           
function popa() {
    tyto = setInterval(tumpi, 2000);

    function tumpi() {
        var pi = setInterval(kervi, 0.5);

        function kervi() {
            if (-150 >= positionDotYellowSqaure) {
                positionDotYellowSqaure += 150;
                clearInterval(pi);
            } else {
                positionDotYellowSqaure -= 1;
            }
            dotYellowSquare.style.left = positionDotYellowSqaure + 'px';
            //трекер и убийство игрока
            if (positionDotYellowSqaure == -finalPositionDotRedSquare) {
                tyu()
            }

            function tyu() {
                if (positionYellowSquare + 30 > positionOnTheYRedSqaure && positionYellowSquare - 30 < positionOnTheYRedSqaure) {
                    clearInterval(tyto);
                    clearInterval(pi);
                    alert("К сожалению ты умер,попробуй  снова и постарайся не умереть");
                    box.removeChild(tochka)
                    container.removeChild(box)
                    hide.style.display = "none";
                    hidess.style.display = "block";
                    f += 1;
                    if (f == 2) {
                        privet()
                    }
                }
            }
        }
    }
};
