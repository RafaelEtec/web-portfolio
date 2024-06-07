var splashScreen = document.querySelector('.splash');
splashScreen.addEventListener('click',()=>{
  splashScreen.style.opacity = 0;
  setTimeout(()=>{
    splashScreen.classList.add('hidden')
  },800)
})
setTimeout(()=>{
  splashScreen.style.opacity = 0;
  setTimeout(()=>{
    splashScreen.classList.add('hidden')
  }, 800)
}, 3200)


const anim = anime.timeline({
  loop: false,
  direction: 'alternate',
});

anim
.add({
  targets: '#hexagon path',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutQuart',
  duration: 2000,
  delay: function(el, i) { return i * 250 }
})
.add({
  targets: '#hexagon #R',
  duration: 1000,
  opacity: 1,
  easing: 'easeInOutQuart',
});