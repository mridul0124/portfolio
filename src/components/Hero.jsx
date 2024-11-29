import { HERO_CONTENT } from "../Data/data.js"
import profilePicture from "../assets/kevinRushProfile.jpg"
import { motion } from "motion/react"


const container = (delay) =>({
   hidden : {x:-100,opacity:0},
   visible : {
    x: 0,
    opacity :1,
    transition : {duration: 0.5, delay: delay}
   }
})

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
    <div className="flex flex-wrap">
    <div className="w-full lg:w-1/2">
    <div className="flex flex-col items-center lg:items-start">
      <motion.h1 
      variants={container(0)}
      initial = "hidden" whileInView = "visible"
      className="pb-16 text-4xl font-thin tracking-tight lg:mt-16  lg:text-6xl">Mridul Pandit</motion.h1>
      <motion.span variants={container(0.5)}
      initial = "hidden" whileInView = "visible" className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 
      text-4xl bg-clip-text tracking-tight text-transparent">
        Full Stack Developer</motion.span>
      <motion.p variants={container(1)}
      initial = "hidden" whileInView = "visible" className="my-2 max-w-xl py-6 font-light tracking-tighter text-justify">
      {HERO_CONTENT}
      </motion.p>
    </div>
    </div>
    <div className="w-full lg:w-1/2 lg:p-8">
    <motion.div initial={{opacity:0,x:100}} whileInView={{opacity:1,x:0}}
   transition={{duration:0.5}} className="flex justify-center">
   <img 
   src={profilePicture} alt="Mridul Pandit" />
    </motion.div>
    </div>
    </div>
      </div>
  )
}

export default Hero