// let i = document.querySelector(".seven").textContent;
// console.log(i);
 
function display(num){
    document.querySelector("#result").value 
    += num;
}

// function evaluation(fn) {
//     return new Function('return ' + fn)();
//   }

// document.querySelector(".result").addEventListener("click", function(){
//     let input = document.querySelector("#result").value ;
//     let result = evaluation(input);
//     document.querySelector("#result").value = result;
// })

function calculation() {
    var arr=[];

    if (document.getElementById("result").value.includes("+")) {
     arr = document.getElementById("result").value.split('+');
        return parseFloat(arr[0]) + parseFloat (arr[1]);
    }

    else if (document.getElementById("result").value.includes("-")) {
     arr = document.getElementById("result").value.split('-');
        return parseFloat (arr[0]) - parseFloat (arr[1]);
    }

    else if (document.getElementById("result").value.includes("/")) {
     arr = document.getElementById("result").value.split('/');
        return parseFloat (arr[0]) / parseFloat (arr[1]);
    }

    else {
     arr = document.getElementById("result").value.split('*');
        return parseFloat (arr[0]) * parseFloat (arr[1]);
    }
}

function ans() {
    var a = calculation()
    document.getElementById('result').value = a;
}


function clr() {
    document.getElementById('result').value = "";
}