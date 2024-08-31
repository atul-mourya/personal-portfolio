import { FaAngleUp, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer navbar-static-bottom">
      <div className="container">
        <a rel="noreferrer" href="#top" className="back-to-top">
          <FaAngleUp size="2em" />
        </a>
        <div className="social-links">
          <a rel="noreferrer" href="https://twitter.com/_iAtul" target="_blank">
            <FaTwitter />
          </a>
          <a rel="noreferrer" href="https://www.linkedin.com/in/atul-mourya/" target="_blank">
            <FaLinkedin />
          </a>
          <a rel="noreferrer" href="https://github.com/atul-mourya" target="_blank">
            <FaGithub />
          </a>
        </div>

        <hr />

        <p className="footer__text">
          © {new Date().getFullYear()} - Inspired by{' '}
          <a rel="noreferrer" href="https://github.com/cobidev" target="_blank">
            Jacobo Martínez
          </a>{' '}
          and redeveloped by{' '}
          <a rel="noreferrer" href="https://github.com/atul-mourya" target="_blank">
            Atul Mourya
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;