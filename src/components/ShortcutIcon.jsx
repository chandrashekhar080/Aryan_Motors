const shortcutMedia = {
  tractor: {
    src: 'https://www.deere.co.in/assets/images/region-2/our-company/news/press-releases/2024/johndeereindia-tractor.jpg',
    alt: 'John Deere tractor',
  },
  implement: {
    src: 'https://www.deere.co.in/assets/images/region-1/homepage/in-implements-200x113.jpg',
    alt: 'John Deere farm implement',
  },
  parts: {
    src: 'https://www.deere.co.in/assets/images/region-1/parts-and-service/genuine-parts-parts-portfolio.jpg',
    alt: 'John Deere genuine parts',
  },
}

function ShortcutIcon({ icon }) {
  const media = shortcutMedia[icon] || shortcutMedia.tractor

  return <img src={media.src} alt={media.alt} loading="lazy" />
}

export default ShortcutIcon
