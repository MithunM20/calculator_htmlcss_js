var screen=document.getElementById('screen');

function btnClick(value){
    screen.value += value;
}

function allClear(){
    screen.value="";
}

function clearScreen(){
    screen.value=screen.value.slice(0,-1);
}

function findResult() {
    try {
        var result = eval(screen.value);
        screen.value = result;
    } catch (error) {
        screen.value = "Error";
        setTimeout(allClear, 2000); 
    }
}