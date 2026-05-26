import FeatureCard from "./FeatureCard";

function Features() {

  const features = [
    {
      title: "Rewards",
      desc: "Get rewarded for every payment."
    },
    {
      title: "Credit Score",
      desc: "Track your credit health instantly."
    },
    {
      title: "UPI Payments",
      desc: "Fast & secure UPI experience."
    },
    {
      title: "Cashback",
      desc: "Earn cashback on transactions."
    }
  ];

  return (
    <section className="py-24 px-8 md:px-20">

      <h2 className="text-5xl font-bold mb-16 text-center">
        Features
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

        {features.map((item, index) => (
          <FeatureCard
            key={index}
            title={item.title}
            desc={item.desc}
          />
        ))}

      </div>

    </section>
  );
}

export default Features;