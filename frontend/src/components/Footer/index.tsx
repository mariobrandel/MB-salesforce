const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 bg-dark">
      <div className="container">
        <p className="text-light">
          App Developed by: {" "}
          <a href="https://github.com/mariobrandel" target="_blank" rel="noreferrer">
            Mario Brandel
          </a>
        </p>
        <p className="text-light">
          <small>
            <strong>Spring React Week</strong>
            <br />
            Event promoted by DevSuperior School:{" "}
            <a
              href="https://instagram.com/devsuperior.ig"
              target="_blank"
              rel="noreferrer"
            >
              @devsuperior.ig
            </a>
          </small>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
