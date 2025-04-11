import { ANIMATION_LIST } from "@/@types/animation.const";
import { motion } from "framer-motion";

const AnimatedBlock = ({ icon: Icon, title, description, delay }: (typeof ANIMATION_LIST)[0]) => (
  <motion.div
    className="flex flex-col items-center text-center"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay }}
  >
    <Icon className="h-12 w-12 text-green-700 mb-4" />
    <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600 text-sm">{description}</p>
  </motion.div>
);

export default function Hero() {
  return (
    <section className="bg-white py-20 px-6 md:px-16">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Nossa Missão com a Fauna Silvestre
        </motion.h2>

        <motion.p
          className="text-gray-600 max-w-3xl mx-auto text-lg mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Trabalhamos pela proteção, reabilitação e preservação dos animais
          silvestres brasileiros por meio de ações sustentáveis, educativas e
          integradas.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
          {ANIMATION_LIST.map((item, index) => (
            <AnimatedBlock key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
