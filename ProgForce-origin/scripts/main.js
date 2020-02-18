const body = document.getElementsByTagName('body')[0];
const callBackLink = document.getElementById('callback');
const closeLink = document.getElementById('close');

callBackLink.addEventListener("click", ()=> {
  body.style.overflow = "hidden";
});

closeLink.addEventListener("click", ()=> {
  body.style.overflow = "visible";
});