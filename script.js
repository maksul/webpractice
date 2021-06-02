  var age = 25;
    console.log(age); 


    function microsoft (Mak) {
        console.log("I am Mr Microsoft");
    }

var firstNumber = document.getElementById("firstInput");
var SecoundNumber = document.getElementById("secondInput");
var Add = document.getElementById("Add");

function maksul(){
    console.log(Number(firstNumber.value) + Number(SecoundNumber.value));
}
Add.addEventListener("click", maksul);
