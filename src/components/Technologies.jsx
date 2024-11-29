import { RiReactjsLine } from "react-icons/ri"
import { FaAngular } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { motion } from "motion/react"


const iconVariants = (duration) => ({
  initial : {y:-10},
  animate:{
    y: [10,-10],
    transition : {
      duration : duration,
      repeat : Infinity,
      repeatType : "reverse"
    }
  }
})

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <motion.h2 initial={{opacity:0,y:-100}} whileInView={{opacity:1,y:0}} transition={{duration:1.5}} className="my-20 text-4xl">Technologies</motion.h2>
        <motion.div initial={{opacity:0,x:-100}} whileInView={{opacity:1,x:0}} transition={{duration:1.5}} className="flex flex-wrap justify-center gap-6">

            <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiReactjsLine className="text-7xl text-cyan-400" />
            </motion.div>

            <motion.div variants={iconVariants(3)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaAngular className="text-7xl text-red-600" />
            </motion.div>

            <motion.div variants={iconVariants(5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaNodeJs className="text-7xl text-green-500" />
            </motion.div>

            <motion.div variants={iconVariants(2)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiMongodb className="text-7xl text-green-500" />
            </motion.div>

            <motion.div variants={iconVariants(3.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
            <BiLogoPostgresql className="text-7xl text-sky-700" />
            </motion.div>

            <motion.div variants={iconVariants(4)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
            <IoLogoJavascript className="text-7xl text-yellow-400" />
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Technologies