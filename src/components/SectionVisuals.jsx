function TractorBase({ tone = "#287a38" }) {
  return (
    <img
      src="https://www.deere.co.in/assets/images/region-2/our-company/news/press-releases/2024/johndeereindia-tractor.jpg"
      alt="john deere tractor"
      style={{objectFit: 'cover', width: '100%', height: '100%', filter: `drop-shadow(0 0 4px ${tone})`}}
    />
  );
}

export function TractorVisual({ index }) {
  const tones = [
    "#287a38",
    "#2f8b3d",
    "#226b34",
    "#348642",
    "#1f783a",
    "#2d7a3f",
  ];

  return (
    <div className="product-visual tractor-visual">
      <TractorBase tone={tones[index % tones.length]} />
    </div>
  );
}

export function ImplementVisual() {
  return (
    <div className="product-visual implement-visual">
         <img src="https://www.deere.co.in/assets/images/region-1/homepage/in-implements-200x113.jpg" alt="john deere tractor" />

    </div>
  );
}

export function EmployeeSupportVisual() {
  return (
    <div className="staff-visual">
          <img src="https://www.deere.co.in/assets/images/region-1/finance/John-Deere-Finance-India-Tractor-Loan.jpg" alt="john deere tractor" />

    </div>
  );
}

export function BankFarmerVisual() {
  return (
    <div className="bank-visual">
     <img src="https://www.deere.co.in/assets/images/region-1/finance/John-Deere-Finance-India-Tractor-Loan.jpg" alt="john deere tractor" />
    </div>
  );
}

function LocationSlide() {
  return (
    <div className="location-slide">
           <img src="/banner01.jpg" alt="john deere tractor" />

    </div>
  );
}

export function LocationCarousel({ location }) {
  const slides = [
    { title: `${location.subtitle} Showroom`, variant: "showroom" },
    { title: "Tractor Display", variant: "tractor" },
    { title: "Directions & Service", variant: "map" },
    { title: "Parts Counter", variant: "service" },
  ];
  const scrollingSlides = [...slides, ...slides];

  return (
    <div
      className="location-carousel"
      aria-label={`${location.subtitle} image carousel`}
    >
      <div className="location-carousel-track">
        {scrollingSlides.map((slide, index) => (
          <LocationSlide key={`${slide.title}-${index}`} />
        ))}
      </div>
    </div>
  );
}
