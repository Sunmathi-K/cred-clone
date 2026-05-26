function FeatureCard({ title, desc }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:scale-105 transition duration-300 shadow-2xl">

      <h3 className="text-2xl font-bold mb-4">
        {title}
      </h3>

      <p className="text-gray-400">
        {desc}
      </p>

    </div>
  );
}

export default FeatureCard;