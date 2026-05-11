function TractorBase({ image, model, tone = "#287a38" }) {
  return (
    <img
      src={image}
      alt={`${model} John Deere tractor`}
      loading="lazy"
      style={{objectFit: 'cover', width: '100%', height: '100%', filter: `drop-shadow(0 0 4px ${tone})`}}
    />
  );
}

export function TractorVisual({ tractor, index }) {
  const tones = [
    "#287a38",
    "#2f8b3d",
    "#226b34",
    "#348642",
    "#1f783a",
    "#2d7a3f",
  ];
  const image = tractor.images?.[index % tractor.images.length] || '/tractor-01.jfif';

  return (
    <div className="product-visual tractor-visual">
      <TractorBase image={image} model={tractor.model} tone={tones[index % tones.length]} />
    </div>
  );
}

export function ImplementVisual({ name, image }) {
  return (
    <div className="product-visual implement-visual">
      <img src={image || '/impliment-01.avif'} alt={name} loading="lazy" />
    </div>
  );
}

export function EmployeeSupportVisual() {
  return (
    <div className="staff-visual">
      <img src="/Service and Support.webp" alt="Aryan Motors service and support" loading="lazy" />
    </div>
  );
}

export function BankFarmerVisual() {
  return (
    <div className="bank-visual">
      <img src="/banner02.jpg" alt="Aryan Motors finance support" loading="lazy" />
    </div>
  );
}

function BranchImageSlide({ slide }) {
  return (
    <div className="location-slide">
      <img src={slide.src} alt={slide.title} loading="lazy" />
    </div>
  );
}

export function LocationCarousel({ location }) {
  const slides = location.images?.length
    ? location.images
    : [
        { title: `${location.subtitle} showroom`, src: '/banner01.jpg' },
        { title: 'John Deere tractor display', src: '/tractor-01.jfif' },
      ];
  const scrollingSlides = [...slides, ...slides];

  return (
    <div
      className="location-carousel"
      aria-label={`${location.subtitle} image carousel`}
    >
      <div className="location-carousel-track">
        {scrollingSlides.map((slide, index) => (
          <BranchImageSlide slide={slide} key={`${slide.title}-${index}`} />
        ))}
      </div>
    </div>
  );
}
