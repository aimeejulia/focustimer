window.addEventListener("load", function(){
    setTimeout(
        function open(event){
            document.querySelector(".popup").style.display = "block";
        },
        1000
    )
});


document.querySelector("#close").addEventListener("click", function(){
    document.querySelector(".popup").style.display = "none";
});

//on load code from here: https://codingartistweb.com/2021/08/show-popup-automatically-after-page-load-using-javascript/

var m = document.querySelector('#m')
    s = document.querySelector('#s'),
    start = document.querySelector('#stopgo'),
    stoptime=0;

start.addEventListener('click', function(){
    if (stopgo.value==="Go") {
        timer(parseInt(m.value, 10), parseInt(s.value, 10)); 
        stopgo.value="Stop";
    }
   else {
       stopgo.value="Go";
       clearTimeout(stoptime);
    }
}, false); 

function timer(min, sec) {
    m.value = (min < 10 ? "0" + min : min);
    s.value = (sec < 10 ? "0" + sec : sec);

    
    if (min || sec) {
        sec ? --sec : (--min, sec = 59);
        stoptime = setTimeout(function() {timer(min, sec);}, 999);
    }
}


//countdown function code from here: https://gist.github.com/deviousdodo/1361126

