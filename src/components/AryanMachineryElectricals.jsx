import BusinessCard from './BusinessCard'
import { aryanMachineryBranches } from './dealerData'

function AryanMachineryElectricals() {
  return (
    <section className="business-group" aria-labelledby="aryan-machinery-title">
      <div className="business-group-heading">
        <p className="eyebrow">Agricultural product wholesaler</p>
        <h3 id="aryan-machinery-title">Aryan Machinery and Electricals</h3>
      </div>
      <div className="location-grid single-location-grid">
        {aryanMachineryBranches.map((location) => (
          <BusinessCard location={location} key={`${location.name}-${location.plusCode}`} />
        ))}
      </div>
    </section>
  )
}

export default AryanMachineryElectricals
