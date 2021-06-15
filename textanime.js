let header= document.querySelector("h1");
console.log(header);
header.innerHTML = header.innerText.split("").map(function(char) {
  if(char == " ") {
     char = "&nbsp;";
  }
  return "<span>"+char+"</span>";
}).join("");

anime.timeline({loop:true})
.add({
  targets: "h1 span",
  translateY: ["50px", 0],
  scale: [5, 1],
  duration: 4500,
  opacity: [0, 1],
  delay: function(element, i) {
  return i*50;
  }
});