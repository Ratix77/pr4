timeend= new Date();
// IE и FF по разному отрабатывают getYear()
timeend= new Date(timeend.getYear()>1900?(timeend.getYear()+1):(timeend.getYear()+1901),0,1);
// для задания обратного отсчета до определенной даты укажите дату в формате:
// timeend= new Date(ГОД, МЕСЯЦ-1, ДЕНЬ);
// Для задания даты с точностью до времени укажите дату в формате:
// timeend= new Date(ГОД, МЕСЯЦ-1, ДЕНЬ, ЧАСЫ-1, МИНУТЫ);
function time() {
    today = new Date();
    today = Math.floor((timeend-today)/1000);
    tsec=today%60; today=Math.floor(today/60); if(tsec<10)tsec='0'+tsec;
    tmin=today%60; today=Math.floor(today/60); if(tmin<10)tmin='0'+tmin;
    thour=today%24; today=Math.floor(today/24);
    timestr=today +" дней "+ thour+" часов "+tmin+" минут "+tsec+" секунд";
    document.getElementById('t').innerHTML=timestr;
    window.setTimeout("time()",1000);
}
function erw(){
    document.querySelector(".expo").style.display=("inline")
}

function erw1(){
    document.querySelector(".expo").style.display=("none")
}
function erw2(){
    document.querySelector(".fra").style.display=("inline")
    document.querySelector(".fra1").style.display=("none")
}
function erw3(){
    document.querySelector(".fra").style.display=("none")
    document.querySelector(".fra1").style.display=("inline")
}