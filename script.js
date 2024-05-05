var main= document.querySelector(".main")

var crsr= document.querySelector(".cursor")

main.addEventListener("mousemove",function(dets){   // mousemove kispr krege main div pr isliye us pr event llgaya h
    crsr.style.left=dets.x+"px"
    crsr.style.top=dets.y+"px"      // ye property tb add hogi jb cursor div position absolute hoga
})