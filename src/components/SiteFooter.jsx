import AryanLogo from './AryanLogo'
import { businessEmail, developerSocialLinks, footerBranches, footerLinks, socialLinks } from './dealerData'

function SocialLinkList({ links, label }) {
  return (
    <div className="social-list" aria-label={label}>
      {links.map((link) => (
        <a href={link.href} key={link.label} aria-label={link.label} target="_blank" rel="noreferrer">
          <i className={link.icon} aria-hidden="true"></i>
        </a>
      ))}
    </div>
  )
}

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <AryanLogo compact />
          <p>
            Aryan Motors, a tractor dealership by Rajendra Yadav, serving farmers through John Deere tractors,
            implements, parts, finance and service support.
          </p>
        </div>

        <div className="footer-column">
          <h3>Explore</h3>
          <nav className="footer-links" aria-label="Footer navigation">
            {footerLinks.map((link) => (
              <a href={link.href} key={link.label}>
                <i className={link.icon} aria-hidden="true"></i>
                <span>{link.label}</span>
              </a>
            ))}
          </nav>
        </div>

        <div className="footer-column">
          <h3>Connect</h3>
          <SocialLinkList links={socialLinks} label="Aryan Motors social media" />
          <p className="footer-contact">
            <a href={businessEmail.href}>{businessEmail.label}</a>
          </p>
        </div>

        <div className="footer-column footer-branches">
          <h3>Branches</h3>
          <div className="footer-branch-list">
            {footerBranches.map((branch) => (
              <address key={`${branch.name}-${branch.plusCode}`}>
                <strong>{branch.subtitle}</strong>
                <span>{branch.address}</span>
                <span>{branch.phone}</span>
              </address>
            ))}
          </div>
        </div>
      </div>

      <p className="footer-disclaimer">
        Prices, specifications, features, finance schemes and availability shown on this website are indicative only and may change according to John Deere policies, finance partner terms, taxes, stock status and showroom-level updates. Please visit Aryan Motors showroom or contact the dealership team for the latest confirmed details.
      </p>

      <div className="footer-bottom">
        <p>All rights reserved @Aryan Motors.</p>
        <div className="developer-credit">
          <span>Developed with ❤️ by aka_shekhar</span>
          <SocialLinkList links={developerSocialLinks} label="aka_shekhar social media" />
        </div>
      </div>
    </footer>
  )
}

export default SiteFooter
