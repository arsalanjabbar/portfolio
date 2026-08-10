const topbar=document.querySelector('.topbar'),menu=document.querySelector('.menu');
menu?.addEventListener('click',()=>{const open=topbar.classList.toggle('nav-open');menu.setAttribute('aria-expanded',open)});
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>topbar.classList.remove('nav-open')));
