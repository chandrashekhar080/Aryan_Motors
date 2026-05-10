import BusinessCard from './BusinessCard'
import { aryanMotorsBranches } from './dealerData'

function AryanMotorsBranches() {
  return (
    <section className="business-group" aria-labelledby="aryan-motors-branches-title">
      <div className="business-group-heading">
        <p className="eyebrow">Tractor dealership branches</p>
        <h3 id="aryan-motors-branches-title">Aryan Motors</h3>
      </div>
      <div className="location-grid">
        {aryanMotorsBranches.map((location) => (
          <BusinessCard location={location} key={`${location.name}-${location.plusCode}`} />
        ))}
      </div>
    </section>
  )
}

export default AryanMotorsBranches
