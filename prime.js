document.querySelector("button").onclick = function(){
    let num = document.querySelector("input").value;
    let check = num % 2;
    num = Number(num);
    if (num % 2 >= 1) {
       document.querySelector("p").innerHTML = "prime";
    }
    else {
        document.querySelector("p").innerHTML = " not prime";
    }
    console.log(typeof(num))
}
