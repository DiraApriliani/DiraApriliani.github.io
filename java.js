const wrapper = document.guerySelector(".wrapper");
const guestion = document.guerySelector(".guestion");
const gif = document.guerySelector(".gif");
const yesBtn = document.guerySelector(".yes-btn");
const noBtn = document.guerySelector(".no-btn");

yesBtn.addEventListener("click", () => {
question.innerHTML - "I'm Okeyyy";
gif.src =
"https://raw.githubusercontent.com/DzarelDeveloper/Img/main/gif.webp" ;
});

noBtn.addEventListener("mouseover", () => {
const noBtnRect = noBtn.getBoundingClientRect();
const maxX = window. innerWidth - noBtnRect.width;
const maxY = window. innerHeight - noBtnRect.height;

const randomX = Math.floor(Math.random( ) * maxX);
const randomY = Math.floor(Math.random( ) * maxY);

noBtn.style.left = randomX + "px";
noBtn.style.top = randomY + "px";
});
