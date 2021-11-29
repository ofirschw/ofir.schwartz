function func_name() {
    console.log('ofir schwartz');
}


function myFunction() {
    const name = document.getElementById("check");
    if (!name.checkValidity()) {
        document.getElementById("demo").innerHTML = name.validationMessage;
    } else {
        document.getElementById("demo").innerHTML = "Input OK";
    }

    const text = document.getElementById("subject");
    if (!inpObj3.checkValidity()) {
        document.getElementById("demo3").innerHTML = text.validationMessage;
    } else {
        document.getElementById("demo3").innerHTML = "Input OK";
    }

}