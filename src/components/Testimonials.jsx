function Testimonials() {
  return (
    <section className="py-24 text-center px-8">

      <h2 className="text-5xl font-bold mb-16">
        loved by members
      </h2>

      <div className="grid md:grid-cols-3 gap-10">

        <div className="bg-white/5 p-10 rounded-3xl">
          <h1 className="text-6xl font-bold">4.8★</h1>
          <p className="text-gray-400 mt-4">
            App Store Rating
          </p>
        </div>

        <div className="bg-white/5 p-10 rounded-3xl">
          <h1 className="text-6xl font-bold">50M+</h1>
          <p className="text-gray-400 mt-4">
            Downloads
          </p>
        </div>

        <div className="bg-white/5 p-10 rounded-3xl">
          <h1 className="text-6xl font-bold">10M+</h1>
          <p className="text-gray-400 mt-4">
            Trusted Users
          </p>
        </div>

      </div>

    </section>
  );
}

export default Testimonials;