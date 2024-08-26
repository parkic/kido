(function () {
  if(document.querySelector('.scroll-wrapper')) {
    const wrapper = document.querySelector('.scroll-wrapper')
    const cards = gsap.utils.toArray('.scroll-wrapper .feature-card')
    const totalWidth = cards.reduce((acc, card) => acc + card.offsetWidth + 36, 0);

    console.log(totalWidth)
    const scrollSpeedFactor = 1
    
    gsap.to('.scroll-container', {
      x: -totalWidth + window.innerWidth,
      ease: 'none',
      scrollTrigger: {
        trigger: '.scroll-wrapper',
        pin: true,
        scrub: 1,
        end: () => `+=${(totalWidth) * scrollSpeedFactor}`
      },
    });
    
  }
})()