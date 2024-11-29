import {MyProject} from "../Data/data"
import { motion } from "motion/react"

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-12">
       <motion.h2 initial={{opacity:0,y:-100}} whileInView={{opacity:1,y:0}} transition={{duration:1}} className="text-4xl my-20">Projects</motion.h2> 
       {
        MyProject.map((project,index)=>(
            <div key={index} className="mb-8 flex flex-wrap lg:justify-center">

                <motion.div initial={{opacity:0,x:-100}} whileInView={{opacity:1,x:0}} transition={{duration:1}}  className="w-full lg:w-1/4">
                <img src={project.image} width={200} 
                height={200} alt={project.title} className="mb-6 rounded"  />
                </motion.div>

                <motion.div initial={{opacity:0,x:100}} whileInView={{opacity:1,x:0}} transition={{duration:1}} className="w-full max-w-xl lg:w-3/4">
                 <h6 className="mb-2 font-semibold text-start">{project.title}</h6>
                 <p className="mb-4 text-neutral-400 text-justify">{project.description}</p>
                 <div   className="flex flex-wrap flex-row">
                 {
                    project.technologies.map((tech,index)=>(
                        <span key={index} className="mr-2 rounded bg-neutral-900 
                        px-2 py-1 text-sm font-medium text-purple-500">{tech}</span>
                    ))
                 }
                 </div>
                </motion.div>
                </div>
        ))
       }
        </div>
  )
}

export default Projects;