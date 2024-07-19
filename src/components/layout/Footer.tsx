function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex w-full items-center justify-center py-4">
      <div className="prose mx-auto max-w-screen-xl px-4 text-center text-sm md:flex md:px-8">
        <p className="text-gray-400">
          {currentYear} by{" "}
          <a
            href="https://www.sintio.ch"
            className="text-gray-400 hover:text-gray-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sintio AG
          </a>{" "}
          Switzerland. This project is open source and licensed under the{" "}
          <a
            href="https://www.gnu.org/licenses/gpl-3.0.en.html"
            className="text-gray-400 hover:text-gray-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            GNU General Public License v3.0
          </a>
          . For more information and contributions, check our GitHub repository{" "}
          <a
            href="https://github.com/sintio-ag/sintio-supported-chargers"
            className="text-gray-400 hover:text-gray-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>
          .
        </p>
      </div>
    </footer>
  );
}

export default Footer;
