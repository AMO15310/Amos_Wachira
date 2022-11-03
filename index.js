const button1 = document.querySelector(".b1");
const button2 = document.querySelector(".b2");
const button3 = document.querySelector(".b3");
const button4 = document.querySelector(".b4");
const body = document.querySelector("body");
const navbar = document.querySelector("#navbar");
const tabs = document.querySelector(".tabsinner");
const about = document.querySelector(".about");

const typedtextelement = document.querySelector(".typed-text");
const breaking = `${"<br>"}`;
const paragraph = [
  `My name is Amos Wachira and this  portfolio is a representation of all  that i've learned and accomplished  as a self taught developer and a  proffesional medical engineering student.`,
];
const typingdelay = 200;
const newstringdelay = 1000;
let charindex = 0;
let paragraphIndex = 0;

const type = () => {
  if (charindex < paragraph[paragraphIndex].length) {
    typedtextelement.textContent += paragraph[paragraphIndex].charAt(charindex);

    charindex++;

    setTimeout(type, 150);
  }
};
setTimeout(type, 4000);
const images = [];
images.push(
  "./images/mountain.jpg",
  "./images/skies.jpg",
  "./images/mountgreen.jpg",
  "./images/image2.jpg"
);
button1.addEventListener("click", () => {
  body.style.backgroundImage = `url(${images[0]})`;
  if (body.style.backgroundImage == `url("./images/mountain.jpg")`) {
    button1.style.backgroundColor = `aqua`;
    button2.style.backgroundColor = `white`;
    button3.style.backgroundColor = `white`;
    button4.style.backgroundColor = `white`;
  }
});
button2.addEventListener("click", () => {
  body.style.backgroundImage = `url(${images[1]})`;
  if (body.style.backgroundImage == `url("./images/skies.jpg")`) {
    button2.style.backgroundColor = `aqua`;
    button1.style.backgroundColor = `white`;
    button3.style.backgroundColor = `white`;
    button4.style.backgroundColor = `white`;
  }
});
button3.addEventListener("click", () => {
  body.style.backgroundImage = `url(${images[2]})`;
  if (body.style.backgroundImage == `url("./images/mountgreen.jpg")`) {
    button3.style.backgroundColor = `aqua`;
    button2.style.backgroundColor = `white`;
    button1.style.backgroundColor = `white`;
    button4.style.backgroundColor = `white`;
  }
});
button4.addEventListener("click", () => {
  body.style.backgroundImage = `url(${images[3]})`;
  if (body.style.backgroundImage == `url("./images/image2.jpg")`) {
    button4.style.backgroundColor = `aqua`;
    button3.style.backgroundColor = `white`;
    button2.style.backgroundColor = `white`;
    button1.style.backgroundColor = `white`;
  }
});

setInterval(() => {
  body.style.backgroundImage = `url(${
    images[Math.floor(Math.random() * images.length)]
  }`;
  if (body.style.backgroundImage == `url("./images/mountain.jpg")`) {
    button1.style.backgroundColor = `aqua`;
    button2.style.backgroundColor = `white`;
    button3.style.backgroundColor = `white`;
    button4.style.backgroundColor = `white`;
    about.style.color = "white";
  }
  if (body.style.backgroundImage == `url("./images/skies.jpg")`) {
    button2.style.backgroundColor = `aqua`;
    button1.style.backgroundColor = `white`;
    button3.style.backgroundColor = `white`;
    button4.style.backgroundColor = `white`;
    about.style.color = "white";
  }
  if (body.style.backgroundImage == `url("./images/mountgreen.jpg")`) {
    button3.style.backgroundColor = `aqua`;
    button2.style.backgroundColor = `white`;
    button1.style.backgroundColor = `white`;
    button4.style.backgroundColor = `white`;
    about.style.color = "black";
  }
  if (body.style.backgroundImage == `url("./images/image2.jpg")`) {
    button4.style.backgroundColor = `aqua`;
    button3.style.backgroundColor = `white`;
    about.style.color = "white";
    button2.style.backgroundColor = `white`;
    button1.style.backgroundColor = `white`;
  }
}, 5000);

tabs.classList = "tabs-none";
navbar.addEventListener("click", () => {
  // console.log("clicked");
  tabs.classList.toggle("tabs-none");
  console.log(tabs.classList);
  setTimeout(() => {
    tabs.classList.toggle("tabs-none");
  }, 5000);
});
