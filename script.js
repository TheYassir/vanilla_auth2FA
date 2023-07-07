document.addEventListener('DOMContentLoaded', function() {
    var inputs = Array.from(document.querySelectorAll('.pincode'));
    inputs[0].focus()
    inputs.map(input => input.addEventListener('keyup', event => focusNext(input)) );
    inputs.map(input => input.addEventListener('blur', event => verif(input)) );
    inputs.map(input => input.addEventListener('focus', event => supp(input)) );

}); 




function getValue() {
    var inputs = document.querySelectorAll(".pincode");
    
    var allValueInput = [];
    var error = false;
    
    for (let i = 0; i < inputs.length; i++) {
        if(inputs[i].value.length < 1 || inputs[i].value.length > 1){
            if(inputs[i].value.length < 1){
                error = true;
            } else {
                setRed(inputs[i]);
                error = true;
            }
        } else {
            var regex = new RegExp("[a-z0-9]", "i");
            var valid ;
            valid = regex.test(inputs[i].value);
            if(valid === true) {
                allValueInput.push(inputs[i].value);
            } else {
                error = true;
            }
        }
    }
    if(error === false){
        let client = allValueInput.join("").toUpperCase();
        console.log("vous etes log")
    }
}

function clean() {
    var inputs = document.querySelectorAll(".pincode");
    inputs.forEach(function(input) {
        removeColorAndBorder(input);
        input.value = "";
    });
}


function setBgRed(e){
    removeColorAndBorder(e)
    e.classList.add("border-dark","bg-danger");
}
function setRed(e){
    removeColorAndBorder(e)
    e.classList.add("border", "border-danger", "text-danger");
}
function setGreen(e){
    removeColorAndBorder(e)
    e.classList.add("border", "border-success", "text-success");
}
function removeColorAndBorder(e){
    e.classList.remove("border", "border-danger", "text-danger", "border-success", "text-success", "border-dark","bg-danger");
}




function verif(input){
    if(input.value.length < 1 || input.value.length > 1){
        if(input.value.length < 1){
            setBgRed(input);
        } else {
            setRed(input);
        }
    } else {
        var regex = new RegExp("[a-z0-9]", "i");
        var valid ;
        valid = regex.test(input.value);

        if(valid === true) {
            setGreen(input);
        } else {
            setRed(input);
        }
    }
}

function focusNext(input){
    var inputs = Array.from(document.querySelectorAll('.pincode'));
    var arr = [20, 16, 9, 13];
    
    if (!arr.includes(event.keyCode)) {

        let x = input.tabIndex ;
        if(x === 8){
            document.querySelector('#connexion').click();
        } else {
            inputs[x].focus();
        }
    }
}

function supp(input){
    input.value = ""
}
