document.getElementById("OpenOfCanvass").onclick = ()=>{
    window.scrollTo(0,0);
    document.getElementById("OffCanvas").classList.remove("hidden");
  }
document.getElementById("closeOfCanvas").onclick = ()=>{
    document.getElementById("OffCanvas").classList.add("hidden");
  }
document.querySelectorAll("#OffCanvas .nav ul li").forEach(el=>{
    el.addEventListener("click",()=>{
        document.getElementById("OffCanvas").classList.add("hidden");
    })
});
document.getElementById("PayRollSlider").addEventListener("click",function(evt){
    console.log(evt.target.tagName);
    if(evt.target.tagName == "LI" ){
        document.getElementById("payRollImg").src = evt.target.getAttribute("data-img");
        // getAttribute("data-img");
    }else if(evt.target.parentElement.tagName == "LI"){
        document.getElementById("payRollImg").src = evt.target.parentElement.getAttribute("data-img");
    }
});
document.getElementById("FeaturesCards").addEventListener("click",function(evt){
    console.log(evt.target.tagName);
    if(evt.target.tagName == "DIV" ){
        document.getElementById("plansImg").src = evt.target.getAttribute("data-img");
        // getAttribute("data-img");
    }else if(evt.target.parentElement.tagName == "DIV"){
        document.getElementById("plansImg").src = evt.target.parentElement.getAttribute("data-img");
    }
});