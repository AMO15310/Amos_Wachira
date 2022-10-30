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
  console.log(paragraph.length);
  if (charindex < paragraph[paragraphIndex].length) {
    typedtextelement.textContent += paragraph[paragraphIndex].charAt(charindex);

    charindex++;

    // paragraphIndex++;
    setTimeout(type, 150);
  }
};
type();
