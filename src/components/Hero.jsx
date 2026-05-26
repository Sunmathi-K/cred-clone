import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-5 relative overflow-hidden">

      <div className="absolute w-[500px] h-[500px] bg-purple-600 rounded-full blur-[120px] opacity-20"></div>

      <motion.h1
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-8xl font-extrabold leading-tight"
      >
        rewards for paying <br /> credit card bills.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-6 text-gray-400 text-lg"
      >
        join the exclusive club of trusted members.
      </motion.p>

      <motion.button
        whileHover={{ scale: 1.05 }}
        className="mt-10 bg-white text-black px-8 py-4 rounded-full font-semibold"
      >
        Download CRED
      </motion.button>
    </section>
  );
}

export default Hero;