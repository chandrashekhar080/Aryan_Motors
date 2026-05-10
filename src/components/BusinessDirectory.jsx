import AryanMotorsBranches from "./AryanMotorsBranches";

function BusinessDirectory() {
  return (
    <section className="section location-section" id="locations">
      <div className="section-heading">
        <p className="eyebrow">Aryan Motors</p>
        <h2>Aryan Group branches and businesses.</h2>
        <p>
          Use the details below for showroom visits, calls and directions.
          Ratings, hours and review counts.
        </p>
      </div>
      <div className="business-directory">
        <AryanMotorsBranches />
        {/* <AryanMachineryElectricals /> */}
        {/* <AryanEnterprisesPunasa /> */}
      </div>
    </section>
  );
}

export default BusinessDirectory;
