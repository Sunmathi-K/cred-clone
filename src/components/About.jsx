import { motion } from "framer-motion";

function About() {
  return (
    <section className="py-24 px-8 md:px-20 grid md:grid-cols-2 gap-10 items-center">

      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-5xl font-bold mb-6">
          members-only experience
        </h2>

        <p className="text-gray-400 leading-8">
          CRED is built for people who believe financial responsibility
          should be rewarded.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="bg-white/10 border border-white/10 rounded-3xl p-10 backdrop-blur-xl">
          <h3 className="text-3xl font-semibold">
            Premium UI Experience
          </h3>
        </div>
      </motion.div>

    </section>
  );
}

export default About;