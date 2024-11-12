function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <h2 className="section-title">Contact</h2>
        <div className="contact-wrapper load-hidden">
          <p className="contact-wrapper__text">Let&apos;s build something cool!!</p>
          <a
            rel="noreferrer"
            target="_blank"
            className="cta-btn cta-btn--resume"
            href="mailto:atul.mourya@gmail.com"
          >
            Contact me
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;