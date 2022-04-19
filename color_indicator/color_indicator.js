Joomla = window.Joomla || {};

((Joomla) => {
window.addEventListener("load",(e)=>{
  const a = document.getElementById("jform_metadesc");
  if(a){
    const parent = a.parentElement;
    a.addEventListener("input",(e)=>{
      var content = e.target.value;
      // console.log(b);  
      var para = document.createElement("span");
      var lastChild = parent.lastChild;
      var textToAdd = document.createTextNode(content.length);
      para.appendChild(textToAdd);
      lastChild.replaceWith(para);

      if(content.length<50){
        para.style.color="red";
      }
      else if(content.length>=50 && content.length<=80){
        para.style.color="yellow";
      }
      else if(content.length>=81 && content.length<=160){
        para.style.color="DarkGreen";
      }
      else{
        para.style.color="red";
      }

    });
  }
});


// MetaDescription present in Global configuration
window.addEventListener("load",(e)=>{
const a = document.getElementById("jform_MetaDesc");
if(a){
const parent = a.parentElement;
a.addEventListener("input",(e)=>{
var content = e.target.value;
// console.log(b);  
var para = document.createElement("span");
var lastChild = parent.lastChild;
var textToAdd = document.createTextNode(content.length);
para.appendChild(textToAdd);
lastChild.replaceWith(para);

if(content.length<50){
  para.style.color="red";
}
else if(content.length>=50 && content.length<=80){
  para.style.color="yellow";
}
else if(content.length>=81 && content.length<=160){
  para.style.color="DarkGreen";
}
else{
  para.style.color="red";
}

});
}
});
})(Joomla)
