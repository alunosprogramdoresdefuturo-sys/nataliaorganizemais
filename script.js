// =========================
// ORGANIZEMAIS
// MAIN JS
// =========================

// HEADER SCROLL

window.addEventListener("scroll", () => {

    const header = document.querySelector(".header");

    if(window.scrollY > 50){

        header.style.background = "#ffffff";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.08)";

    }else{

        header.style.background = "#ffffff";
        header.style.boxShadow = "none";

    }

});

// =========================
// ANIMAÇÃO HERO
// =========================

const phone = document.querySelector(".phone");

if(phone){

    let position = 0;

    setInterval(() => {

        position += 0.02;

        phone.style.transform =
        `translateY(${Math.sin(position) * 8}px)`;

    },16);

}

// =========================
// NOTIFICAÇÕES
// =========================

const notifications =
document.querySelectorAll(".notification");

notifications.forEach((card,index)=>{

    card.style.opacity = "0";
    card.style.transform = "translateX(50px)";

    setTimeout(()=>{

        card.style.transition = "all .8s ease";

        card.style.opacity = "1";

        card.style.transform =
        "translateX(0px)";

    },index * 300);

});

// =========================
// CARDS HOVER
// =========================

const cards =
document.querySelectorAll(".category");

cards.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.boxShadow =
        "0 20px 40px rgba(0,0,0,.08)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.boxShadow =
        "none";

    });

});

// =========================
// BOTÃO COMEÇAR
// =========================

const btnPrimary =
document.querySelector(".btn-primary");

if(btnPrimary){

    btnPrimary.addEventListener("click",(e)=>{

        e.preventDefault();

        alert(
            "Bem-vindo ao OrganizeMais!"
        );

    });

}

// =========================
// EFEITO CONTADOR
// =========================

function revealElements(){

    const elements =
    document.querySelectorAll(
        ".category, .testimonial-box"
    );

    elements.forEach(el=>{

        const top =
        el.getBoundingClientRect().top;

        const screen =
        window.innerHeight - 100;

        if(top < screen){

            el.style.opacity = "1";
            el.style.transform =
            "translateY(0px)";

        }

    });

}

document
.querySelectorAll(
".category, .testimonial-box"
)
.forEach(el=>{

    el.style.opacity = "0";
    el.style.transform =
    "translateY(40px)";

    el.style.transition =
    "all .8s ease";

});

window.addEventListener(
"scroll",
revealElements
);

revealElements();

// =========================
// SCROLL SUAVE MENU
// =========================

document
.querySelectorAll('a[href^="#"]')
.forEach(anchor=>{

    anchor.addEventListener(
        "click",
        function(e){

            e.preventDefault();

            const target =
            document.querySelector(
                this.getAttribute("href")
            );

            if(target){

                target.scrollIntoView({
                    behavior:"smooth"
                });

            }

        }
    );

});

// =========================
// DATA ATUAL
// =========================

const now = new Date();

console.log(
`OrganizeMais iniciado em:
${now.toLocaleDateString()}`
);

// =========================
// PRELOAD
// =========================

window.addEventListener(
"load",
()=>{

    document.body.style.opacity = "1";

}
);