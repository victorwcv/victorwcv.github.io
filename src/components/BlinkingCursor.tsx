import { motion } from 'framer-motion';

const BlinkingCursor = () => {
  return (
    <motion.span
      className="font-extrabold"
      animate={{ opacity: [1, 0, 1] }} // Cambiar opacidad entre 1 y 0
      transition={{
        repeat: Infinity, // Repetir indefinidamente
        duration: 1, // Duración de cada ciclo (en segundos)
      }}
    >
      _
    </motion.span>
  );
};

export default BlinkingCursor;
