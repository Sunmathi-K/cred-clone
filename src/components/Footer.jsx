import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="py-16 px-8 border-t border-white/10">

      <div className="flex flex-col md:flex-row justify-between gap-10">

        <div>
          <h1 className="text-3xl font-bold mb-4">
            CRED
          </h1>

          <p className="text-gray-500">
            premium fintech experience.
          </p>
        </div>

        <div className="space-y-3">
          <p>About</p>
          <p>Careers</p>
          <p>Privacy Policy</p>
          <p>Terms</p>
        </div>

        <div className="flex gap-5 text-2xl">
          <FaInstagram />
          <FaTwitter />
          <FaLinkedin />
        </div>

      </div>

    </footer>
  );
}

export default Footer;