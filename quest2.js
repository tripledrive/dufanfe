window.onload = function(){
    var myimg = ''
    if(getParam('img') != ''){
        myimg = getParam('img') + '.jpg'
        let img_element = document.createElement('img');
        img_element.src = myimg;
        document.getElementById("cimg").appendChild(img_element);
    }
}

function getParam(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

document.getElementById("submit").onclick = function(){
    console.log("test")
    if(document.getElementById("answer").value == "メクレイド" || document.getElementById("answer").value == "めくれいど"){
        location.href = "clear1.html"
    }else if(document.getElementById("answer").value == "みらいよち" || document.getElementById("answer").value == "ミライヨチ" || document.getElementById("answer").value == "未来予知"){
        location.href = "clear2.html"
    }else{
        alert('回答が間違っています')
    }
};