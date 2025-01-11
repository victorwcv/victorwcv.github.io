import { motion } from 'motion/react';
import { FC, useState } from 'react';

interface Props {
  projectName: string;
  projectDescription: string;
  height: string;
  imgSrc: string;
  alt?: string;
  onclick: () => void;
}

const ProjectSquare: FC<Props> = ({
  height,
  imgSrc,
  alt,
  projectName,
  projectDescription,
  onclick,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`${height} relative overflow-hidden `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.img
        className="h-full w-full object-cover"
        src={imgSrc}
        alt={alt}
        initial={{ scale: 1 }}
        animate={{ scale: isHovered ? 1.1 : 1, transition: { duration: 0.8 } }}
        transition={{ duration: 0.4 }}
      />
      <motion.div
        className="bg-zinc-900/80 absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0, transition: { duration: 0.5 } }}
        transition={{ duration: 0.4 }}
      ></motion.div>
      <motion.div
        className="absolute inset-0 flex flex-col justify-center items-center"
        initial={{ x: '-100%' }}
        animate={{
          x: isHovered ? '0%' : '-100%',
          transition: { duration: 0.5 },
        }}
        transition={{ duration: 0.4 }}
        onClick={() => onclick()}
      >
        <h3 className="text-2xl font-bold text-center text-white">
          {projectName}
        </h3>
        <small className="text-lg text-center text-zinc-400">
          {projectDescription}
        </small>
      </motion.div>
    </div>
  );
};

export default ProjectSquare;
