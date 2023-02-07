console.log('linked')

// Theme options
let theme = localStorage.getItem('theme')
if(theme == null){
    setTheme('light')
}else{
    setTheme(theme)
}
let themeDots = document.getElementsByClassName("theme-dot")

for (var i=0; themeDots.length > i; i++){
    themeDots[i].addEventListener('click', function(){
        let mode = this.dataset.mode
        console.log('clicked', mode)
        setTheme(mode)
    })
}

function setTheme(mode){
    if(mode == 'light'){
        document.getElementById('theme-style').href = 'style.css'
    }

    if(mode == 'blue'){
        document.getElementById('theme-style').href = 'blue.css'
    }

    if(mode == 'purple'){
        document.getElementById('theme-style').href = 'purple.css'
    }
    localStorage.setItem('theme', mode)

}

// cards animation in 'more projects'
let cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('mouseenter', function() {
    let img = this.querySelector('.card-img');
    img.style.filter = 'blur(5px)';
  });
  
  card.addEventListener('mouseleave', function() {
    let img = this.querySelector('.card-img');
    img.style.filter = 'blur(0)';
  });
});

let tabs = document.querySelectorAll('.tab');
let tabContents = document.querySelectorAll('.tab-content-item');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    let tabId = tab.getAttribute('id');
    let tabContent = document.querySelector(`#${tabId}-content`);

    tabContents.forEach(tc => {
      tc.style.display = 'none';
    });

    tabContent.style.display = 'block';
  });
});

// text animation
const elts = {
    text1: document.getElementById("text1"),
    text2: document.getElementById("text2")
};

const texts = [
    "Full Stack",
    "Python",
    "Data Fascinated",
    "Back-end",
    "Front-end",
    "Yogui",
    "Potterhead",
    "Motiveted",
];

const morphTime = 1;
const cooldownTime = 0.25;

let textIndex = texts.length - 1;
let time = new Date();
let morph = 0;
let cooldown = cooldownTime;

elts.text1.textContent = texts[textIndex % texts.length];
elts.text2.textContent = texts[(textIndex + 1) % texts.length];

function doMorph() {
    morph -= cooldown;
    cooldown = 0;

    let fraction = morph / morphTime;

    if (fraction > 1) {
        cooldown = cooldownTime;
        fraction = 1;
    }

    setMorph(fraction);
}

function setMorph(fraction) {
    elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
    elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

    fraction = 1 - fraction;
    elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
    elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

    elts.text1.textContent = texts[textIndex % texts.length];
    elts.text2.textContent = texts[(textIndex + 1) % texts.length];
}

function doCooldown() {
    morph = 0;

    elts.text2.style.filter = "";
    elts.text2.style.opacity = "100%";

    elts.text1.style.filter = "";
    elts.text1.style.opacity = "0%";
}

function animate() {
    requestAnimationFrame(animate);

    let newTime = new Date();
    let shouldIncrementIndex = cooldown > 0;
    let dt = (newTime - time) / 1000;
    time = newTime;

    cooldown -= dt;

    if (cooldown <= 0) {
        if (shouldIncrementIndex) {
            textIndex++;
        }

        doMorph();
    } else {
        doCooldown();
    }
}

animate();

// contact form
function sendEmail(){
    visitorEmail = document.getElementById("email").value
    visitorMessage = document.getElementById("message").value
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "j.amaralwork@gmail.com",
        Password : "D62D2373A1188A4289578919A288604A8627",
        To : "j.amaralwork@gmail.com",
        From : "j.amaralwork@gmail.com",
        Subject : "New message from your portfolio",
        Body : visitorEmail + "<br>" + visitorMessage + "<br>" + visitorMessage
    }).then(
    message => alert(message)
    );
    }