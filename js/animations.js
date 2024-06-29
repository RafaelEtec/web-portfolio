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

const startsplash = anime.timeline({
  loop: false,
  autoplay: true,
});

const startsplash2 = anime.timeline({
  loop: false,
  autoplay: true,
  delay: 2000,
})

startsplash
.add({
  targets: '#hexagon path',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutQuart',
  duration: 2000,
})
.add({
  targets: '#hexagon #R',
  duration: 1000,
  opacity: 1,
  easing: 'easeInOutQuart',
});

startsplash2
.add({
  targets: '#hexagon #R2',
  opacity: 0.2,
  easing: 'easeInOutQuart',
})
.add({
  targets: '#hexagon #R2'
});