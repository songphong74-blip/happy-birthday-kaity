const intro = document.getElementById("intro");
const main = document.getElementById("main");
const envelope = document.getElementById("envelope");
const openBtn = document.getElementById("openBtn");
const music = document.getElementById("music");

const message = `Happy Birthday Chị Kaity 🎂💖

Chúc chị Kaity có một tuổi mới thật nhiều sức khỏe,
luôn xinh đẹp, hạnh phúc và gặp thật nhiều may mắn.

Mong mọi điều tốt đẹp sẽ luôn đồng hành cùng chị,
công việc thuận lợi, cuộc sống ngập tràn tiếng cười.

Cảm ơn chị đã luôn mang đến sự ấm áp và yêu thương.

Chúc chị luôn rạng rỡ,
mỗi ngày đều là một ngày thật đáng nhớ.

❤️ Chúc mừng sinh nhật chị ❤️`;

openBtn.onclick = () => {

    envelope.classList.add("open");

    setTimeout(() => {

        intro.style.display = "none";

        main.style.display = "block";

        music.play().catch(()=>{});

        typeText();

        startSlide();

        setInterval(createHeart,350);

        setInterval(createFlower,900);

        fireworks();

    },1200);

};

function typeText(){

    let i=0;

    const box=document.getElementById("typing");

    const timer=setInterval(()=>{

        box.innerHTML += message.charAt(i);

        i++;

        if(i>=message.length){

            clearInterval(timer);

        }

    },35);

}

let current=0;

function startSlide(){

    const slides=document.querySelectorAll(".slide");

    setInterval(()=>{

        slides[current].classList.remove("active");

        current++;

        if(current>=slides.length){

            current=0;

        }

        slides[current].classList.add("active");

    },3500);

}

function createHeart(){

    const heart=document.createElement("div");

    heart.className="heart";

    heart.innerHTML="💖";

    heart.style.left=Math.random()*100+"vw";

    heart.style.animationDuration=(4+Math.random()*4)+"s";

    heart.style.fontSize=(20+Math.random()*20)+"px";

    document.querySelector(".hearts").appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },8000);

}

function createFlower(){

    const flower=document.createElement("div");

    flower.className="flower";

    flower.innerHTML="🌸";

    flower.style.left=Math.random()*100+"vw";

    flower.style.animationDuration=(5+Math.random()*5)+"s";

    flower.style.fontSize=(16+Math.random()*20)+"px";

    document.querySelector(".flowers").appendChild(flower);

    setTimeout(()=>{

        flower.remove();

    },10000);

}

function fireworks(){

    const wrap=document.getElementById("fireworks");

    for(let j=0;j<10;j++){

        setTimeout(()=>{

            explode();

        },j*500);

    }

    function explode(){

        const x=Math.random()*window.innerWidth;

        const y=Math.random()*window.innerHeight*0.6;

        for(let i=0;i<30;i++){

            const s=document.createElement("div");

            s.className="spark";

            s.style.left=x+"px";

            s.style.top=y+"px";

            s.style.background=`hsl(${Math.random()*360},100%,60%)`;

            const angle=Math.random()*Math.PI*2;

            const dist=60+Math.random()*80;

            s.style.setProperty("--x",Math.cos(angle)*dist+"px");

            s.style.setProperty("--y",Math.sin(angle)*dist+"px");

            wrap.appendChild(s);

            setTimeout(()=>s.remove(),1000);

        }

    }

}
