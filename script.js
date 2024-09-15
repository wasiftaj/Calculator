function zerobtn() {
    var input = document.getElementById("display");

    input.disable = false;
    
    input.value += 0;

    input.disable = true;
}

document.addEventListener("keydown", function(event) {
    if (event.key == 0){
        zerobtn();
    }
});

function dotbtn() {
    var input = document.getElementById("display");

    input.disable = false;
    
    input.value += ".";

    input.disable = true;
}

document.addEventListener("keydown", function(event) {
    if (event.key == "."){
        dotbtn();
    }
});


function threebtn() {
    var input = document.getElementById("display");

    input.disable = false;
    
    input.value += "3";

    input.disable = true;
}

document.addEventListener("keydown", function(event) {
    if (event.key == "3"){
        threebtn();
    }
});




function twobtn() {
    var input = document.getElementById("display");

    input.disable = false;
    
    input.value += "2";

    input.disable = true;
}

document.addEventListener("keydown", function(event) {
    if (event.key == "2"){
        twobtn();
    }
});



function onebtn() {
    var input = document.getElementById("display");

    input.disable = false;
    
    input.value += "1";

    input.disable = true;
}

document.addEventListener("keydown", function(event) {
    if (event.key == "1"){
        onebtn();
    }
});


function sixbtn() {
    var input = document.getElementById("display");

    input.disable = false;
    
    input.value += "6";

    input.disable = true;
}

document.addEventListener("keydown", function(event) {
    if (event.key == "6"){
        sixbtn();
    }
});



function fivebtn() {
    var input = document.getElementById("display");

    input.disable = false;
    
    input.value += "5";

    input.disable = true;
}

document.addEventListener("keydown", function(event) {
    if (event.key == "5"){
        fivebtn();
    }
});



function fourbtn() {
    var input = document.getElementById("display");

    input.disable = false;
    
    input.value += "4";

    input.disable = true;
}

document.addEventListener("keydown", function(event) {
    if (event.key == "4"){
        fourbtn();
    }
});



function ninebtn() {
    var input = document.getElementById("display");

    input.disable = false;
    
    input.value += "9";

    input.disable = true;
}

document.addEventListener("keydown", function(event) {
    if (event.key == "9"){
        ninebtn();
    }
});



function eightbtn() {
    var input = document.getElementById("display");

    input.disable = false;
    
    input.value += "8";

    input.disable = true;
}

document.addEventListener("keydown", function(event) {
    if (event.key == "8"){
        eightbtn();
    }
});



function sevenbtn() {
    var input = document.getElementById("display");

    input.disable = false;
    
    input.value += "7";

    input.disable = true;
}

document.addEventListener("keydown", function(event) {
    if (event.key == "7"){
        sevenbtn();
    }
});

function clearInput() {
    document.getElementById("display").disabled = false;


    document.getElementById("display").value = "";


    setTimeout(function() {
        document.getElementById("display").disabled = true;
    }, 10);

}


function dividebtn() {
    var input = document.getElementById("display");

    input.disable = false;
    
    input.value += "/";

    input.disable = true;
}

document.addEventListener("keydown", function(event) {
    if (event.key == "/"){
        dividebtn();
    }
});

function multiplybtn() {
    var input = document.getElementById("display");

    input.disable = false;
    
    input.value += "*";

    input.disable = true;
}

document.addEventListener("keydown", function(event) {
    if (event.key == "*"){
        multiplybtn();
    }
});



function sumbtn() {
    var input = document.getElementById("display");

    input.disable = false;
    
    input.value += "+";

    input.disable = true;
}

document.addEventListener("keydown", function(event) {
    if (event.key == "+"){
        sumbtn();
    }
});


function subtractbtn() {
    var input = document.getElementById("display");

    input.disable = false;
    
    input.value += "-";

    input.disable = true;
}

document.addEventListener("keydown", function(event) {
    if (event.key == "-"){
        subtractbtn();
    }
});



