const style = document.createElement("style");
  style.innerHTML= `.activity{
    transition: top 1s,opacity 1s;
    position: relative;
    top: 100px;
    opacity: 0;
    
}

.activity.active{
    top: 0;
    opacity: 1;
}`;
  document.head.appendChild(style);

function detect_scroll_activity(){
    document.querySelectorAll(".activity").forEach(item=>{
      if (item.getBoundingClientRect().top - window.innerHeight + 20 < 0) {
        item.classList.add("active");
      }
      else{
        item.classList.remove("active");
      }
    })
  }

  document.addEventListener("scroll",detect_scroll_activity);
  detect_scroll_activity();

  