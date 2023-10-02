/*function tool() {
    document.querySelector(".tool").innerHTML = "<li>Point Calculator</li><li>E-Fetena</li><li>E-Study</li>"
    document.querySelector(".contact").style.display = "none"
}
function contact(){
    document.querySelector(".contact").innerHTML = "<li>Telegram</li><li>Whatsapp</li><li>Phone number</li>"
   // document.querySelector(".tool").remove()
   document.querySelector(".tool").style.display = "none"
}*/
let sun = "pngwing.com (29).png";
let moon = "pngwing.com (30).png"
let date = new Date();
let time = date.getHours();
console.log(time)
time = 12;
if (time <= 17 ) {
// document.body.style.backgroundColor = "yellow "
document.querySelector("#img").src = sun;
  document.body.style.backgroundImage = "url('vintage-cloud-sky.jpg')";
document.body.style.color = "white";
document.querySelector("input").style.backgroundColor = "white"
document.querySelector("input").style.border = "2px solid black"
document.querySelector("button").style.backgroundColor = "white";
}
if (time <= 6 ) {
    alert("xewat")
}
if (time >= 18) {
  document.querySelector("#img").src = moon;
  document.body.style.backgroundImage = "url('—Pngtree—starry night sky background_975889.jpg')";
document.body.style.color = "white";
document.querySelector("input").style.backgroundColor = "white"
document.querySelector("input").style.border = "2px solid black"
document.querySelector("button").style.backgroundColor = "white";
}
console.log(time)
console.log(document.querySelector(".input").innerWidth);
let hr = " Hour";
let input = document.querySelector("input");
function subs(){
let hr = " Hour";
let input = document.querySelector("input");
 
    if (input.value > 1) {
        hr = " Hours"
           document.querySelector("#ho").innerHTML = input.value + hr;
    }
    else if (input.value == "") {
        document.querySelector("#ho").innerHTML = ""
    }
    else if (input.value[0] == "0") {
        document.querySelector("#ho").innerHTML = "why bro"
    }
    if (input.value[0] > 5) {
        document.querySelector("#ho").innerHTML = "Bro it is not recommended to study that long"
    }
    else {
         hr = " Hour"
           document.querySelector("#ho").innerHTML = input.value + hr;
    }
}
function submit() {
   document.querySelector(".notes").style.display = "block"; document.querySelector('.quote').style.display = 'flex';
let times = input.value;
document.querySelector(".input").innerHTML = "You Set Your Study time to " + input.value + " Hours<br>" + times +  " Hour left<br>";
var increase = setInterval(function() {
    times--;

  

if(times == 0) {
    clearInterval(increase)
    document.querySelector(".input").innerHTML = "You finished your time "
}    
}, 3600000);     
let qu = times; 
document.querySelector('.quote').innerHTML = "All our dreams can come true, if we have the courage to pursue them." 
try {
    
    var quote = setInterval(function(){
        qu--;
       
        if (qu == 9) {
            document.querySelector(".quote").innerHTML = "Only the educated are free. "
        }
        if (qu == 8) {
            document.querySelector(".quote").innerHTML = "The roots of education are bitter, but the fruit is sweet."
        }
        if (qu == 7) {
            document.querySelector(".quote").innerHTML = "Learning is not attained by chance; it must be sought for with ardor and diligence"
        }
        if (qu == 6) {
            document.querySelector(".quote").innerHTML = "Continuous learning is the minimum requirement for success in any field."
        }
        if (qu == 5) {
            document.querySelector(".quote").innerHTML = "The aim of education is the knowledge, not of facts, but of values."
        }
        if (qu == 4) {
            document.querySelector(".quote").innerHTML = "Education is one thing no one can take away from you"
        }
        if (qu == 3) {
            document.querySelector(".quote").innerHTML = "The principal goal of education in the schools should be creating men and women who are capable of doing new things, not simply repeating what other generations have done."
        }
        if (qu == 2) {
            document.querySelector(".quote").innerHTML = "Difficult roads often lead to beautiful destinations. ..."
        }
          if (qu == 1) {
            document.querySelector(".quote").innerHTML = "We don't even know how strong we are until we are forced to bring that hidden"
        }
        
    }, 60000)
} catch (error) {
    console.log(error)
}
}
document.querySelector("#two").src = "pngwing.com (31).png";

document.querySelector("#two").onclick = function(){
   let nums = 0;
   nums++; document.querySelector("#note").innerHTML += "<div id='txt'><input type='text' placeholder='type your notes here' id='inp'></div>";
   document.querySelector("#two").onclick = function(){
       document.querySelector("#txt").innerHTML = "<p>" + document.querySelector("#inp").value + "</p>";
       document.querySelector("#two").onclick = function(){
           document.querySelector("#note").innerHTML += "<div id='txt'><input type='text' placeholder='type your notes here' id='inp'></div>";
       }
   }
   
    console.log(document.querySelector("input").id)
}

