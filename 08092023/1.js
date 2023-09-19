var kill = document.querySelector("h5")
var good=document.querySelector("h1")

var love = document.querySelector("#add")
var check=0

love.addEventListener("click",function(){
    if(check ==0){
        love.innerHTML= "Add Items"
        kill.style.color="green"
        kill.innerHTML= "Remove Items"
        good.innerHTML="rishab ji mart"

        check=1
    }else{
        kill.innerHTML="Add to Cart"
        kill.style.color="red"
        love.innerHTML= "Add Items"
        good.innerHTML="mosa ji mart"

        check=0
    }

}


)
