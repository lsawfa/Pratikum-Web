function FooterComponent() {
  const customStyle2 = {
    height: "30px",
    width: "15px",
    marginRight: "5px",
  };

  const customStyle = {
    height: "20px",
    width: "20px",
    marginRight: "5px",
  };

  return (
    <footer className="text-center text-lg-start bg-light text-muted my-5 bg-white">
      <section className="container text-center text-md-start">
        <div className="row">
          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <img src="/images/logo-ilab.png" alt="Logo iLab" width="200" />

            <div className="py-5">
              © 2023 Copyright{" "}
              <a className="text-reset fw-bold" href="https://github.com/lsawfa">
                Larynt Sawfa
              </a>
            </div>
          </div>

          <div className="col-md-2 col-lg-3 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-4">Services</h6>
            <p className="mb-2">
              <a href="mailto:laryntsawfakenanga@gmail.com" className="text-reset text-decoration-none">
                Email Marketing
              </a>
            </p>
            <p className="mb-2">
              <a href="https://www.linkedin.com/in/laryntsawfa/" className="text-reset text-decoration-none">
                Campaigns
              </a>
            </p>
            <p className="mb-2">
              <a href="https://www.linkedin.com/in/laryntsawfa/" className="text-reset text-decoration-none">
                Branding
              </a>
            </p>
            <p>
              <a href="https://maps.app.goo.gl/RrqjLnyv4B7LLvVN8" className="text-reset text-decoration-none">
                Offline
              </a>
            </p>
          </div>

          <div className="col-md-3 col-lg-3 col-xl-2 mb-4">
            <h6 className="text-uppercase fw-bold mb-4">About</h6>
            <p className="mb-2">
              <a href="https://www.linkedin.com/in/laryntsawfa/" className="text-reset text-decoration-none">
                Our Story
              </a>
            </p>
            <p className="mb-2">
              <a href="https://www.linkedin.com/in/laryntsawfa/" className="text-reset text-decoration-none">
                Benefits
              </a>
            </p>
            <p className="mb-2">
              <a href="https://www.linkedin.com/in/laryntsawfa/" className="text-reset text-decoration-none">
                Team
              </a>
            </p>
            <p>
              <a href="https://www.linkedin.com/in/laryntsawfa/" className="text-reset text-decoration-none">
                Careers
              </a>
            </p>
          </div>

          <div className="col-md-3 col-lg-3 col-xl-2 mb-4">
            <h6 className="text-uppercase fw-bold mb-4">Follow Us</h6>
            <p className="flex mb-3 row">
              <a href="https://web.facebook.com/Larynt.sawfa/" className="flex justify-start text-reset text-decoration-none">
                <img src="/images/logo-facebook.png" style={customStyle2} alt="Facebook" /> Facebook
              </a>
            </p>
            <p className="mb-3">
              <a href="https://x.com/B_hundred_Hyun?s=20" className="flex justify-start text-reset text-decoration-none">
                <img src="/images/logo-twitter.png" style={customStyle} alt="Twitter" /> Twitter
              </a>
            </p>
            <p>
              <a href="https://instagram.com/laryntsa" className="flex justify-start text-reset text-decoration-none">
                <img src="/images/logo-instagram.png" style={customStyle} alt="Instagram" /> Instagram
              </a>
            </p>
          </div>
        </div>
      </section>
    </footer>
  );
}

export default FooterComponent;