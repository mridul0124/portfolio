import aboutImage from "../assets/about.jpg"
import { ABOUT_TEXT } from "../Data/data"
import { motion } from "motion/react"

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-10">
        <motion.h2  initial={{opacity:0,y:-100}} whileInView={{opacity:1,y:0}} transition={{duration:1.5}} className="my-20 text-4xl">About Me</motion.h2>
        <div className="flex flex-wrap">
          <motion.div initial={{opacity:0,x:-100}}
          whileInView={{opacity:1,x:0}} transition={{duration:0.5}}
          className="w-full lg:w-1/2">
          <div className="flex items-center justify-center">
          <img className="rounded-2xl" src={aboutImage} alt="About Image"  />
          </div>
          </motion.div>

          <motion.div initial={{opacity:0,x:100}}
          whileInView={{opacity:1,x:0}} transition={{duration:0.5}} className="w-full lg:w-1/2">
          <div className="flex justify-center">
           <p className="my-2 py-6 max-w-xl">{ABOUT_TEXT}</p>
          </div>
          </motion.div>

        </div>
    </div>
  )
}

export default About