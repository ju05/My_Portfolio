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
        document.getElementById('theme-style').href = 'style.css',
        document.getElementById('muggle-greeting').innerHTML = '<div id = "muggle-greeting" class="greeting-wrapper"><h1 id="hello">Hello there, <br>I am Juliana Schmidt!</h1></div>'
        document.getElementById('profile-pic').src = 'images/j.amaralwork@gmail.com.jpg',
        document.getElementById('linkedin-icon').style.color = '#FF605C',
        document.getElementById('github-icon').style.color = '#FFBD44',
        document.getElementById('email-icon').style.color = '#00CA4E'        
    }

    if(mode == 'blue'){
        document.getElementById('theme-style').href = 'blue.css',
        document.getElementById('muggle-greeting').innerHTML = '<div id = "muggle-greeting" class="greeting-wrapper"><h1 id="hello">Hello there, <br>I am Juliana Schmidt!</h1></div>'
        document.getElementById('profile-pic').src = 'images/profile-j.amaralwork@gmail.com.jpeg',
        document.getElementById('linkedin-icon').style.color = '#f3098e87',
        document.getElementById('github-icon').style.color = '#f3098e87',
        document.getElementById('email-icon').style.color = '#f3098e87'
    }

    if(mode == 'harry'){
        document.getElementById('theme-style').href = 'harry.css',
        document.getElementById('muggle-greeting').innerHTML = '<img src="images/hello-hp.png" style=" width: 100%; justify-content: center;" alt="hello there,  I am Juliana Schmidt in Harry Potters font">',
        document.getElementById('profile-pic').src = "images/j.amaralwork@gmail_hp.jpg",
        document.getElementById('linkedin-icon').style.color = '#d3a425b6',
        document.getElementById('github-icon').style.color = '#d3a425b6',
        document.getElementById('email-icon').style.color = '#d3a425b6'
    }
    localStorage.setItem('theme', mode)

}

// animated text
let textArray = ["Full Stack Developer", "Python Developer", "Data Science fascinated", "Enthusiastic team player", "Gryffindor's Wizard"];
let textIndex = 0;

let whatIDo = document.getElementById("what-i-do");

setInterval(function() {
  whatIDo.innerHTML = textArray[textIndex];
  textIndex = (textIndex + 1) % textArray.length;
}, 2000);

// draggable div
let isDragging = false;
let currentX;
let currentY;
let initialX;
let initialY;
let xOffset = 0;
let yOffset = 0;

const preview = document.getElementById("preview");
const previewShadow = document.getElementById("preview-shadow");

preview.addEventListener("mousedown", dragStart);
preview.addEventListener("mouseup", dragEnd);
preview.addEventListener("mouseout", dragEnd);
preview.addEventListener("mousemove", drag);

function dragStart(e) {
  initialX = e.clientX - xOffset;
  initialY = e.clientY - yOffset;

  if (e.target === preview) {
    isDragging = true;
  }
}

function dragEnd(e) {
  initialX = currentX;
  initialY = currentY;

  isDragging = false;
}

function drag(e) {
  if (isDragging) {
    e.preventDefault();
    currentX = e.clientX - initialX;
    currentY = e.clientY - initialY;

    xOffset = currentX;
    yOffset = currentY;

    setTranslate(currentX, currentY, preview);
  }
}

function setTranslate(xPos, yPos, el) {
  el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
}

window.addEventListener("beforeunload", function() {
  preview.style.transform = "translate3d(0, 0, 0)";
  xOffset = 0;
  yOffset = 0;
});

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
    message => alert("Your message was sent. I'll be in touch soon. Thank you! ")
    );
    }