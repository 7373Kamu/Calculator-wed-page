const display = document.getElementById("display")
function appendTODisplay(input){
    display.value +=input;
}
function clearDisplay(){
    if(display.value >"0"){
        display.value=""
    }else{
        display.value="0"
    }
}
function calculateResult(){
    try{
    display.value=eval(display.value)
    }
    catch{
        display.value="Error"
    }
}
function clearLastElement()
{
    display.value=display.value.slice(0,-1);
}