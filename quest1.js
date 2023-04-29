document.getElementById("submit").onclick = function(){
    console.log("test")
    if(document.getElementById("answer").value == "エレメント" || document.getElementById("answer").value == "えれめんと"){
        location.href = "quest2.html"
    }else{
        alert('回答が間違っています')
    }
};