import {
  actionCards,
  implementsByCategory,
  partsCards,
  supportItems,
  tractorFaqs,
  tractors,
} from './dealerData'
import {
  BankFarmerVisual,
  EmployeeSupportVisual,
  ImplementVisual,
  TractorVisual,
} from './SectionVisuals'
import BusinessDirectory from './BusinessDirectory'
import LeadForm from './LeadForm'
import SiteFooter from './SiteFooter'

function ActionCards() {
  return (
    <section className="action-card-row" aria-label="Aryan Motors quick actions">
      {actionCards.map((card) => (
        <a className="action-card" href={card.href} key={card.title}>
          <i className={card.icon} aria-hidden="true"></i>
          <span>{card.title}</span>
          <p>{card.text}</p>
        </a>
      ))}
    </section>
  )
}

function PartsSection() {
  return (
    <section className="section parts-section" id="parts">
      <div className="section-heading">
        <p className="eyebrow">Parts counter</p>
        <h2>Genuine parts, Reman options and everyday service essentials.</h2>
        <p>Use the cards below to ask Aryan Motors for exact part availability, fitment and pricing.</p>
      </div>
      <div className="parts-grid">
        {partsCards.map((part) => (
          <article className="parts-card" key={part.title}>
            <div className="parts-card-media">
              <img src={part.image} alt={part.title} />
            </div>
            <div className="parts-card-copy">
              <span>{part.kicker}</span>
              <h3>{part.title}</h3>
              <p>{part.text}</p>
              <a href="#contact">{part.action}</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function ImplementsSection() {
  return (
    <section className="section implements-section" id="implements">
      <div className="section-heading">
        <p className="eyebrow">Tractor implements</p>
        <h2>Your matching tractor implement is only a few clicks away.</h2>
        <p>Browse land preparation, sowing, crop care, harvest and residue management implements.</p>
      </div>
      <nav className="implement-category-nav" aria-label="Implement categories">
        {implementsByCategory.map((group) => (
          <a href={`#${group.category.toLowerCase().replaceAll(' ', '-')}`} key={group.category}>
            {group.category}
          </a>
        ))}
      </nav>
      <div className="implement-category-stack">
        {implementsByCategory.map((group) => (
          <section
            className="implement-category"
            id={group.category.toLowerCase().replaceAll(' ', '-')}
            key={group.category}
          >
            <div className="implement-category-heading">
              <h3>{group.category}</h3>
              <p>{group.intro}</p>
            </div>
            <div className="implement-card-grid">
              {group.items.map((implement) => (
                <article className="implement-card" key={`${group.category}-${implement.title}`}>
                  <ImplementVisual image={implement.image} name={implement.title} />
                  <div className="implement-card-copy">
                    <h4>{implement.title}</h4>
                    <p>{implement.text}</p>
                    <a href="#contact">View {implement.title}</a>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </section>
  )
}

function FaqSection() {
  return (
    <section className="section faq-section" id="faqs">
      <div className="section-heading">
        <p className="eyebrow">FAQs</p>
        <h2>Common John Deere tractor questions.</h2>
      </div>
      <div className="faq-list">
        {tractorFaqs.map((faq) => (
          <details className="faq-item" key={faq.question}>
            <summary>{faq.question}</summary>
            <p>{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  )
}

function DealershipSections({ onLeadSubmitted }) {
  return (
    <>
      <ActionCards />

      <section className="section intro-band">
        <div>
          <p className="eyebrow">Rajendra Yadav presents Aryan Motors</p>
          <h2>Your local John Deere tractor dealership for powerful farming decisions.</h2>
        </div>
        <p>
          Explore John Deere tractors, GreenSystem implements, genuine parts, finance guidance and service support from Aryan Motors.
        </p>
      </section>

      <section className="quick-links" aria-label="Quick dealership actions">
        <a href="#contact">Book a test drive</a>
        <a href="#finance">Tractor loan request</a>
        <a href="#parts">Order spare parts</a>
        <a href="#implements">Select implements</a>
      </section>

      <section className="section" id="tractors">
        <div className="section-heading">
          <p className="eyebrow">Tractor range</p>
          <h2>Popular John Deere models</h2>
          <p>Representative models and specs for enquiry. Final features and prices should be confirmed at Aryan Motors.</p>
        </div>
        <div className="tractor-grid">
          {tractors.map((tractor, index) => (
            <article className="tractor-card" key={tractor.model}>
              <TractorVisual tractor={tractor} index={index} />
              <div className="card-topline">
                <span>{tractor.series}</span>
                <strong>{tractor.hp}</strong>
              </div>
              <h3>{tractor.model}</h3>
              <ul>
                <li>{tractor.drive}</li>
                <li>{tractor.transmission}</li>
                <li>{tractor.lift}</li>
              </ul>
              <div className="card-footer">
                <span>{tractor.price}</span>
                <a href="#contact">Enquire</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <PartsSection />

      <ImplementsSection />

      <section className="section support-section" id="service">
        <div className="section-heading">
          <p className="eyebrow">Dealer support</p>
          <h2>Everything after selection matters too.</h2>
        </div>
        <div className="support-grid">
          {supportItems.map((item) => (
            <article className="support-card" key={item.title}>
              <EmployeeSupportVisual title={item.title} variant="service" />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section app-band" id="finance">
        <div>
          <p className="eyebrow">Finance and digital support</p>
          <h2>Finance help plus John Deere&apos;s Anubhuti app for equipment care.</h2>
          <p>
            Customers can discuss finance, register machines, follow service schedules, order parts, view manuals and connect with the dealer network through official John Deere support channels.
          </p>
        </div>
        <div className="finance-visual-grid">
          <EmployeeSupportVisual title="Finance Desk" variant="finance" />
          <EmployeeSupportVisual title="Digital Support" variant="team" />
        </div>
      </section>

      <BusinessDirectory />

      <FaqSection />

      <section className="contact-section" id="contact">
        <div className="contact-copy">
          <p className="eyebrow">Contact Aryan Motors</p>
          <h2>Ask for the latest tractor price, finance plan or service appointment.</h2>
          <p>
            Owner: Rajendra Yadav. Call Punasa at 062649 35603 or Khandwa at 088179 69140 for showroom enquiries.
          </p>
          <BankFarmerVisual />
        </div>
        <LeadForm onSubmitted={onLeadSubmitted} />
      </section>

      <SiteFooter />
    </>
  )
}

export default DealershipSections
