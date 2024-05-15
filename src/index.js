const pauseButton = document.querySelector('.pause-btn')
const slider = document.querySelector('.slide-trackers')
const slowed = document.querySelector('.sliders')

pauseButton.addEventListener('click', () => {
    console.log('pause')
    slider.classList.toggle('pause') 
});

slowed.addEventListener('mouseover', ()=>{
    slider.classList.add('slowed')
    slider.classList.remove('normal')
})
slowed.addEventListener('mouseout', ()=>{
    slider.classList.remove('slowed')
    slider.classList.add('normal')
})