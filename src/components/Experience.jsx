import { EXPERIENCES } from "../Data/data"
import { motion } from "motion/react"

const Experience = () => {
  return (
    <div className="border-b border-neutral-900  pb-12">
       <motion.h2  initial={{opacity:0,y:-100}} whileInView={{opacity:1,y:0}} transition={{duration:1}} className="text-4xl my-20">Experience</motion.h2>
       {/* <div className="flex flex-wrap"> */}
        <div className="w-full">
            {EXPERIENCES.map((xprnc,index)=>(
              <motion.div initial={{opacity:0,y:-100}} whileInView={{opacity:1,y:0}} transition={{duration:1.5}} key={index} className="mb-8 flex flex-wrap lg:justify-center border border-gray-800 rounded-lg p-4">
                <div className="w-full lg:w-4/5">
                <div className="flex flex-wrap justify-between mb-3">
                  <p className="text-xl font-bold">{xprnc.role} - {xprnc.company}</p>
                  <p className="text-xl font-bold">{xprnc.year}</p>
                </div>
                <p className="text-justify my-5 text-neutral-400">{xprnc.description}</p>

                <div   className="flex flex-wrap flex-row lg:justify-center lg:items-center">
                {
                    xprnc.technologies.map((tech,index)=>(
                            <span key={index} className="mr-2 mt-4 rounded bg-neutral-900 
                        px-2 py-1 text-sm font-medium text-purple-500">{tech}</span>     
                        
                    ))
                }
                </div>
                </div>
              </motion.div>
            ))}
        </div>
        {/* </div>  */}
        </div>
  )
}

export default Experience

// {
//     year: "2023 - Present",
//     role: "Senior Full Stack Developer",
//     company: "Google Inc.",
//     description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
//     technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
//   },