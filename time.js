let day = document.getElementById('days');
let hour = document.getElementById('Hours');
let min = document.getElementById('Minutes');
let sec = document.getElementById('Seconds');

let d = 0;
let h = 0;
let m = 0;
let s = 0;
let interval ;
let startbtn = document.getElementById('start');
startbtn.addEventListener('click',startclock);
let stopbtn = document.getElementById('stop');
stopbtn.addEventListener('click',stopclock);
let resetbtn = document.getElementById('reset');
resetbtn.addEventListener('click',resetclock);
function clock (){
    sec.innerHTML = s ;
    s++;
    if( s == 60){
        s = 0 ;
        m++;
        min.innerHTML = m ;
    }
    else if ( m == 60){
        m = 0 ;
        h ++;
        hour.innerHTML = h ;
    }
    else if (h == 24){
        h = 0;
        d++;
        day.innerHTML = d;
    }
}
function startclock(){
    if (!interval){
        interval = setInterval(clock,1000);
    }
}
function stopclock (){
    clearInterval(interval);
    interval = null ;
}
function resetclock (){
    clearInterval(interval);
    interval = null ;
    
    day.innerHTML = 0 ;
    hour.innerHTML = 0 ;
    min.innerHTML = 0 ;
    sec.innerHTML = 0 ;
}