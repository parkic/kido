(function () {
  if (document.querySelector('.scroll-wrapper')) {
    const wrapper = document.querySelector('.scroll-wrapper')
    const cards = gsap.utils.toArray('.scroll-wrapper .feature-card')
    const totalWidth = cards.reduce((acc, card) => acc + card.offsetWidth + 36, 0)

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
    })
  }

// Parents Landing Page
  if (document.querySelector('#parents-landing-page .values-section')) {

    // Value boxes Above Title
    document.addEventListener('DOMContentLoaded', () => {
      const valueBoxes = document.querySelectorAll("#parents-landing-page .value-box")
  
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          const aboveTitle = entry.target.querySelector('.above-title')
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            aboveTitle.style.backgroundColor = 'var(--orange)' 
          } else {
            aboveTitle.style.backgroundColor = ''
          }
        })
      }, {
        threshold: 0.5 
      })
  
      valueBoxes.forEach(box => observer.observe(box))
    })

    // Feature Boxes
    document.addEventListener('DOMContentLoaded', () => {
      const featureBoxes = document.querySelectorAll("#parents-landing-page .feature-box")
  
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.7) {
            entry.target.style.boxShadow = '0 0 20px rgba(0, 0, 0, 0.1)'
            entry.target.style.borderColor = 'var(--orange)' 
            entry.target.style.transform = 'scale(1.04)'
            entry.target.style.transition = 'all 0.3s ease-in-out' 
          } else {
            entry.target.style.boxShadow = ''
            entry.target.style.borderColor = ''
            entry.target.style.transform = ''
            }
        })
      }, {
        threshold: 0.7 
      })
  
      featureBoxes.forEach(box => observer.observe(box)) 
    })
  

    // GSAP ScrollTrigger for Value Boxes
    const valueWrappers = gsap.utils.toArray(".value-wrapper")
    const valueBoxes = gsap.utils.toArray(".value-box")
    const valueBox = document.querySelector(".value-box")
    const valueBoxHeight = valueBox ? valueBox.offsetHeight : 300
    const isMobile = window.innerWidth < 768;
    let maxHeight = 0

    valueBoxes.forEach(box => {
      const height = box.offsetHeight
      if (height > maxHeight) {
        maxHeight = height
      }
    })

    valueWrappers.forEach((wrapper, i) => {
        const valueBox = valueBoxes[i]

        valueBoxes.forEach(box => {
          box.style.height = `${maxHeight}px`
        })

        if (i % 2 === 1) {
          valueBox.classList.add('lg:flex-row-reverse')
        }
        switch (i + 1) {
          case 1:
            valueBox.style.backgroundColor = "#F9F9F9"
            break
          case 2:
            valueBox.style.backgroundColor = "#F2F2F2"
            break
          case 3:
            valueBox.style.backgroundColor = "#DFDFDF"
            break
          default:
            valueBox.style.backgroundColor = "#F9F9F9"
            break
        }
        
        let scale = 1,
          rotation = 0
        // if (i !== valueBoxes.length - 1) {
          scale = 0.9 + 0.025 * i
          rotation = -10
        // }
        gsap.to(valueBox, {
          scale: scale,
          rotationX: rotation,
          transformOrigin: "top center",
          ease: "none",
          scrollTrigger: {
            trigger: wrapper,
            start: isMobile ? "top 40px" : "top " + (80 + 15 * i),
            end: `bottom ${valueBoxHeight * 0.8}`,
            endTrigger: ".values",
            scrub: true,
            pin: wrapper,
            pinSpacing: false,
            // markers: {
            //   indent: 150 * i
            // },
            id: i + 1
          }
        })
    })
  }

  


})()