import BusinessCard from './BusinessCard'
import { aryanEnterprisesBranches } from './dealerData'

function AryanEnterprisesPunasa() {
  return (
    <section className="business-group" aria-labelledby="aryan-enterprises-title">
      <div className="business-group-heading">
        <p className="eyebrow">Food machinery supplier</p>
        <h3 id="aryan-enterprises-title">Aryan Enterprises Punasa</h3>
      </div>
      <div className="location-grid single-location-grid">
        {aryanEnterprisesBranches.map((location) => (
          <BusinessCard location={location} key={`${location.name}-${location.plusCode}`} />
        ))}
      </div>
    </section>
  )
}

export default AryanEnterprisesPunasa
