const buttons = document.querySelectorAll(".button")
const clearbutton = document.getElementById("clear")
let = curStr = ""


for(let i=0;i<buttons.length;i++){
    buttons[i].addEventListener('click', (button)=>{
        if(button.target.innerText == "="){
            curStr = eval(curStr);
        }
        else if(button.target.innerText == "AC"){
            document.getElementById("textoutput").value = ""
            curStr = ""
        }
        else if(button.target.innerText == "C"){
            curStr = curStr.substring(0, curStr.length-1)
        }
        else{
            curStr += button.target.innerText
        }
        document.getElementById("textoutput").value = curStr
    })
}