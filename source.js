const locationLogo = document.querySelector('header img');
locationLogo.addEventListener('click', ()=>{
  window.location.assign('./index.html');
});

const collapse = document.querySelector('.collapse');
let navbar = document.querySelector('.navbar');
collapse.addEventListener('click', ()=>{ 
  if(navbar.getAttribute('style')){
    navbar.removeAttribute('style');
  }else{
    navbar.setAttribute('style', 'display: block');
  }
});
