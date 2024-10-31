let display = document.getElementById("display")
let brackets_open = true

function show(key) {
    if (display.textContent === "ERROR") {
        display.textContent = key
    }
    else{
        display.textContent += key 
    }
}

function allclear() {

    display.textContent = ""
}

function delete_last() {
    
    display.textContent = display.textContent.slice(0,-1)
}

function add_brackets() {
    if (brackets_open) {
        show("(");
        brackets_open = false
    } else {
        show(")");
        brackets_open = true
    }
    
}
function calculate() {
    try {
        let result = eval(display.textContent.replace('×', '*'));
        
        // Limit the result to 5 digits after the decimal point
        if (Number.isFinite(result) && result % 1 !== 0) {
            result = result.toFixed(5);
        }

        display.textContent = result;
    } catch (error) {
        display.textContent = "ERROR";

    }
}
