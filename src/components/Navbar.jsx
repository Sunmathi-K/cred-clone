function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/30 backdrop-blur-md px-8 py-5 flex justify-between items-center">
      <h1 className="text-3xl font-bold tracking-widest">
        CRED
      </h1>

      <button className="border border-white px-5 py-2 rounded-full hover:bg-white hover:text-black transition">
        Download App
      </button>
    </nav>
  );
}

export default Navbar;