import { LocationCarousel } from './SectionVisuals'

function BusinessCard({ location }) {
  const mapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(`${location.name} ${location.address}`)}&output=embed`

  return (
    <article className="location-card">
      <LocationCarousel location={location} />
      <div className="location-card-head">
        <div>
          <span className="location-type">{location.type}</span>
          <h3>{location.name}</h3>
          <p>{location.subtitle}</p>
        </div>
        <div className="rating-pill">
          <strong>{location.rating}</strong>
          <span>{location.reviews}</span>
        </div>
      </div>
      <dl className="location-details">
        <div>
          <dt>Address</dt>
          <dd>{location.address}</dd>
        </div>
        <div>
          <dt>Hours</dt>
          <dd>{location.hours}</dd>
        </div>
        <div>
          <dt>Phone</dt>
          <dd>{location.phone}</dd>
        </div>
        <div>
          <dt>Plus code</dt>
          <dd>{location.plusCode}</dd>
        </div>
        {location.website && (
          <div>
            <dt>Website</dt>
            <dd>{location.website}</dd>
          </div>
        )}
      </dl>
      <div className="map-frame-wrap">
        <iframe
          src={mapEmbedUrl}
          title={`${location.name} map`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <p className="location-note">{location.note}</p>
      <div className="location-actions">
        {location.tel ? <a href={`tel:${location.tel}`}>Call</a> : <span className="disabled-action">Call not added</span>}
        <a href={location.mapUrl} target="_blank" rel="noreferrer">Directions</a>
      </div>
    </article>
  )
}

export default BusinessCard
