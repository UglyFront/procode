const ADRESS = "62.113.110.179";

let slider = document.getElementById("courses__slider");
let sliderHandler = document.getElementById("slider-handler");
let adaptiveNav = document.getElementById("adaptive-nav");
let burger = document.getElementById("burger");
let adaptive_nav__inner = document.getElementById("adaptive-nav__inner");

let headerState = false;

function headerHandler(e) {
    console.log("qwe")
    headerState = !headerState;
    if(headerState) {
        // adaptiveNav.style.visibility = "visible";
        adaptiveNav.classList.add("visibleMenu");
    } else  adaptiveNav.classList.remove("visibleMenu");
}

function stopPropagat(e) {
    e.stopPropagation();
}


burger.addEventListener("click", headerHandler);
adaptiveNav.addEventListener("click", (e) => headerHandler(e));

const courses = [
    {
        id: 1,
        name: "Введение Minecraft Education Edition",
        descr: "Изучение основ программирования на легендарной платформе Майкрософт.",
        age: "7 - 12 лет",
        duration: "~9 месяцев",
        img: "https://news.microsoft.com/wp-content/uploads/prod/sites/243/2017/05/Key-Art-Copy.png"

    },
    {
        id: 2,
        name: "Разработка сайтов",
        descr: "Создание  собственного сайта с помощью HTML и CSS.",
        age: "12 - 16 лет",
        duration: "~9 месяцев",
        img: "https://www.dalee.ru/ai/post/66/images/shutterstock_379834030-min.jpg"
    },
    {
        id: 3,
        name: "Основы Python в Майнкрафте",
        descr: "Изучение Python через популярную игру.",
        age: "9 - 12 лет",
        duration: "~9 месяцев",
        img: "https://www.hse.ru/data/2019/09/12/1537849837/3%D0%BF%D0%B8%D1%82%D0%BE%D0%BD%20%D0%BB%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF.png"
    },
   
    {
        id: 4,
        name: "Программирование игр на Python",
        descr: "Разработка игр на простом и популярном языке программирования.",
        age: "11 - 14 лет",
        duration: "~5  месяцев",
        img: "https://files.realpython.com/media/Project-based-Make-A-Simple-Asteroids-Clone-with-Pygame_Watermarked.36f4ec74e4ca.jpg"

    },
    {
        id: 5,
        name: "Программирование для дошкольников",
        descr: "Первые шаги в мире алгоритмов и математике.",
        age: "5 - 7 лет",
        duration: "~9 месяцев",
        img: "https://i.ytimg.com/vi/6C8DEWjXijU/maxresdefault.jpg"

    },
    {
        id: 6,
        name: "Разработка 3D игр на популярном движке",
        descr: "Изучение Unity 3D в разработке компьютерных игр.",
        age: "11 - 16 лет",
        duration: "~4 месяца",
        img: "https://i.pinimg.com/originals/ee/91/19/ee911955105316f7298077af04c21a40.jpg"

    },
    {
        id: 7,
        name: "Математика в Майнкрафт",
        descr: "Изучение основ математики и логики на популярной платформе.",
        age: "7 - 11 лет",
        duration: "~9 месяцев",
        img: "https://rutab.net/b/uploads/images/00/00/01/2016/01/19/dcd547.jpg"
    },
    {
        id: 8,
        name: "Photoshop с использованием графического планшета",
        descr: "Курc по использованию графического планшета в Photoshop.",
        age: "10 - 15 лет",
        duration: "~6 месяцев",
        img: "https://itc.ua/wp-content/uploads/2019/11/5c810a98ec05c4bb24000137-5.jpg"
    },
    {
        id: 9,
        name: "Создание сайтов на Tilda",
        descr: "Разработка сайтов без опыта на популярном конструкторе.",
        age: "10 - 14 лет",
        duration: "~5 месяцев",
        img: "https://miro.medium.com/max/949/1*d8scguNcogH-Ayj8ZOc6kA.png"
    },
    {
        id: 10,
        name: "Основы программирования в Roblox",
        descr: "Изучение основ программирование на языке Lua.",
        age: "9 - 12 лет",
        duration: "~9 месяцев",
        img: "https://itc.ua/wp-content/uploads/2021/11/kak-ustanovit-igru-roblox-i-igrat-v-nee-na-ubuntu.jpg"
    },
    {
        id: 11,
        name: "Программирование в Scratch",
        descr: "Изучение основ блочного программирования.",
        age: "7 - 10 лет",
        duration: "~4 месяца",
        img: "https://files.schudio.com/fulwell-junior-school/images/news/Unnamed.jpg"
    },
    {
        id: 12,
        name: "Создание игр в Unreal Engine",
        descr: "Создание игр на ведущем игровом движке.",
        age: "11 - 16 лет",
        duration: "~4 месяца",
        img: "https://newxboxone.ru/wp-content/uploads/2021/05/awqe2qz5dvpw9euvrdjuzhz__0i.png"
    },
    {
        id: 13,
        name: "Создание чат-ботов на Python",
        descr: "Программирование ботов на востребованном языке.",
        age: "12 - 16 лет",
        duration: "~3 месяца",
        img: "https://project-seo.net/wp-content/uploads/2021/02/chat-bot.jpeg"
    },
    {
        id: 14,
        name: "Создание модов в Майнкрафт",
        descr: "Основы 3D моделирования и знакомство с языком Java.",
        age: "7 - 12 лет",
        duration: "~3 месяца",
        img: "https://geekstand.top/wp-content/uploads/2020/01/bees-update.jpg"
    },
    {
        id: 15,
        name: "Изи офис",
        descr: "Базовый и продвинутый курсы по Microsoft Office.",
        age: "8 - 13 лет",
        duration: "~6 месяцев",
        img: "https://office-download.net/templates/newsoft/icon/office-2020/microsoft-office-2020.jpg"
    },
];




let choosePage=0;


let res = ``;

function render() {
   courses.forEach((i) => {
    
        slider.innerHTML +=
            `<div class="course">
        
            <div class="course__inner">
    
            <div class="course__preview">
            
                <img class="course__img" src=${i.img}>
            
            </div>
    
            <div class="course__description">
                <h3 class="course__description__header">${i.name}</h3>
                <p class="course__description__text">${i.descr}</p>
    
                <div class="course__description__age-duration">
                
                    <div class="description__age-box">${i.age}</div>
    
                    <div class="description__duration-box">${i.duration}</div>
                
                </div>
    
            </div>
    
           
            </div>
            </div>`
    })


     // <button class="course__sign-up">Записаться</button>
}




let page = 0



function incr() {
    const slideAll = document.querySelectorAll(".course")
    let width = slideAll[0].offsetWidth // 1 слайд


    page++


    if (page >= courses.length ) {
        page = 0
        for (i = 0; i < slideAll.length; i++) {
            slideAll[i].style.transform = `translateX(0px)`
        }

    }
    else {
        for (i = 0; i < slideAll.length; i++) {
            slideAll[i].style.transform += `translateX(-${width+100}px)`
        }

    }

    // if (!noClean) {
    //     clearInterval(interval)
    // }


}
function decr() {
    const slideAll = document.querySelectorAll(".course")
    let width = slideAll[0].offsetWidth // 1 слайд




    if (page <= 0) {
        page = slideAll.length - 1
        for (i = 0; i < slideAll.length; i++) {
        slideAll[i].style.transform += `translateX(-${slideAll.length * ( width  + 100) - 445}px)`;
        }
    }
    else {
        page--
        for (i = 0; i < slideAll.length; i++) {
            slideAll[i].style.transform += `translateX(${width+100}px)`;
        }
    }
    // clearInterval(interval)



}



render();





let interval = setInterval(() => {
    incr(true)
}, 5500)


//ACCORDEON

const quetions = document.querySelectorAll(".accordeon__el");
const answer = document.querySelectorAll(".answer-el");
const plus = document.querySelectorAll(".plus")

quetions.forEach(el => {
    el.onclick = () =>{
        if (el.getAttribute("active")) {
            let attr = el.getAttribute("answer");
            el.removeAttribute("active");
            answer[attr].style.transform = "translateX(-100%)";
            answer[attr].style.visibility = "hidden";
            answer[attr].style.transition = "1s";
            answer[attr].style.fontSize = "6px";
            quetions[attr].style.transition = "0.5s";
            quetions[attr].style.fontSize = "20px";
            plus[attr].style.transform = "rotate(0deg)";
        }
        else {
            let attr = el.getAttribute("answer")
            el.setAttribute("active", true)
            answer[attr].style.transform = "translateX(0%)";
            answer[attr].style.visibility = "visible";
            answer[attr].style.transition = "1s";
            answer[attr].style.fontSize = "18px";
            quetions[attr].style.transition = "0.5s";
            quetions[attr].style.fontSize = "10px";
            plus[attr].style.transform = "rotate(45deg)";
        }
    }
})




// Валидация и формы
let nameform = document.querySelector("#name")
let phone = document.querySelector("#phone")
let emailform = document.querySelector("#email")
let city = document.querySelector("#city")

let nameform2 = document.querySelector("#second-form-name")
let phone2 = document.querySelector("#second-form-phone")
let emailform2 = document.querySelector("#second-form-email")
let city2 = document.querySelector("#second-form-city")

let btn = document.querySelector(".banner__form__send-btn")
let btn2 = document.querySelector("#secondBtn")


function mail() {

        let body = {
            name: nameform.value,
            phone: phone.value,
            email: emailform.value,
            city: city.value
        }


        if ((body.name && body.phone && body.email && body.city) != "") {
            fetch(`http://${ADRESS}:2222/mail?name=${body.name}&phone=${body.phone}&email=${body.email}&city=${body.city}`)
            .then(alert("Мы свяжемся с Вами в ближайшее время!"))
        }
        else {
            alert("Форма пуста...")
        }


}



function mail2() {

    let body = {
        name: nameform2.value,
        phone: phone2.value,
        email: emailform2.value,
        city: city2.value
    }


    if ((body.name && body.phone && body.email && body.city) != "") {
        fetch(`http://${ADRESS}:2222/mail?name=${body.name}&phone=${body.phone}&email=${body.email}&city=${body.city}`)
        .then(alert("Мы свяжемся с Вами в ближайшее время!"))
    }
    else {
        alert("Форма пуста...")
    }

}



btn.onclick = mail
btn2.onclick = mail2







const cbName = document.querySelector(".cbName")
const cbPhone = document.querySelector(".cbPhone")
const cbQuestion = document.querySelector(".cbQuestion")
const cbBtn = document.querySelector("#presentation__modal-sendBtn")

cbBtn.onclick = () => {
    if ((cbName.value && cbPhone.value && cbQuestion.value) != "") {
        fetch(`http://${ADRESS}:2222/cb?n=${cbName.value}&p=${cbPhone.value}&q=${cbQuestion.value}`)
        .then(alert("Мы свяжемся с Вами в ближайшее время!"))
    }
    else {
        alert("Форма пуста...")
    }
} // cb






//MODAL

const blocked = document.querySelector("#blocked")
const modal = document.querySelector("#window")
const close = document.querySelector("#close_modal")


setTimeout(() => {
    blocked.style.opacity = 1;
    blocked.style.zIndex = 100;
    modal.style.transform = "translateX(0%)"
}, 5060)





function closed() {
    modal.style.transition = "1s ease-in-out"
    blocked.style.transition = "1s"
    blocked.style.opacity = 0;
    blocked.style.zIndex = -100;
    modal.style.transform = "translateX(-300%)";
}



modal.onclick = (e) => stopPropagat(e)



close.onclick = closed


// Модалка для обратного звонка 



let callBackBtn = document.getElementById("callBackBtn"); // Handler для вызова модалки
let presentation__modal = document.getElementById("presentation__modal"); // темная область
let presentation__modal_inner = document.getElementById("presentation__modal_inner"); // темная область


function callBackModalHandler () {
    presentation__modal.classList.toggle("showCallBackModal")
}

callBackBtn.addEventListener("click", callBackModalHandler);
presentation__modal.addEventListener("click", callBackModalHandler);






