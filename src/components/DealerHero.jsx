import { useEffect, useState } from 'react'
import AryanLogo from './AryanLogo'
import { shortcutLinks } from './dealerData'
import ShortcutIcon from './ShortcutIcon'

const heroSlides = [
  {
    id: 'mp-farmer',
    eyebrow: 'Madhya Pradesh farmers',
    title: 'Built for the fields around us',
    src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Farmer_from_Madhya_Pradesh_India_(1).jpg?width=1600',
  },
  {
    id: 'jhabua-field',
    eyebrow: 'Khandwa district',
    title: 'Reliable power for every season',
    src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Ploughing_a_field.jpg?width=1600',
  },
  {
    id: 'umaria-paddy',
    eyebrow: 'Khargone district',
    title: 'Support that reaches the farm',
    src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Ploughing_a_paddy_field_with_oxen,_Umaria_district,_Madhya_Pradesh,_India.jpg?width=1600',
  },
]

function HeroArtwork({ slide, active }) {
  return (
    <div className={active ? 'hero-field active' : 'hero-field'} aria-hidden={!active}>
      <img src={slide.src} alt="" loading={active ? 'eager' : 'lazy'} />
    </div>
  )
}

function HeroBanner() {
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length)
    }, 4500)

    return () => window.clearInterval(timer)
  }, [])

  const goToPrevious = () => {
    setActiveSlide((current) => (current - 1 + heroSlides.length) % heroSlides.length)
  }

  const goToNext = () => {
    setActiveSlide((current) => (current + 1) % heroSlides.length)
  }

  const currentSlide = heroSlides[activeSlide]

  return (
    <section className="screenshot-hero" aria-label="Aryan Motors hero banner carousel">
      <button className="hero-arrow hero-arrow-left" type="button" aria-label="Previous slide" onClick={goToPrevious}>
        <i className="fa-solid fa-chevron-left" aria-hidden="true"></i>
      </button>
      {heroSlides.map((slide, index) => (
        <HeroArtwork active={index === activeSlide} slide={slide} key={slide.id} />
      ))}
      <div className="hero-message">
        <span>{currentSlide.eyebrow}</span>
        <strong>{currentSlide.title}</strong>
      </div>
      <button className="hero-arrow hero-arrow-right" type="button" aria-label="Next slide" onClick={goToNext}>
        <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
      </button>
      <div className="hero-dots" aria-label="Slide position">
        {heroSlides.map((slide, index) => (
          <button
            aria-label={`Go to ${slide.title} slide`}
            className={index === activeSlide ? 'active' : ''}
            key={slide.id}
            onClick={() => setActiveSlide(index)}
            type="button"
          ></button>
        ))}
      </div>
    </section>
  )
}

function DealerHero() {
  return (
    <header className="dealer-header" id="home">
      <div className="site-header">
        <AryanLogo />
        <nav className="shortcut-row header-shortcuts" aria-label="Product shortcuts">
          {shortcutLinks.map((item) => (
            <a
              className="shortcut-card"
              href={item.href}
              key={item.label}
              target={item.external ? '_blank' : undefined}
              rel={item.external ? 'noreferrer' : undefined}
            >
              <span className="shortcut-media">
                <ShortcutIcon icon={item.icon} />
              </span>
              <span>{item.label}</span>
            </a>
          ))}
        </nav>
        <a className="request-call-btn" href="#contact">Request a Call</a>
      </div>

      <HeroBanner />
    </header>
  )
}

export default DealerHero
