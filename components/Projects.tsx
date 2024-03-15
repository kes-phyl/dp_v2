import React from 'react'
import { ProjectCard, RevProjectCard } from '.'


const Projects = () => {
  return (
    <section id='project' className='h-[120vh] content-center'>
    <div className='flex mb-10'>
         <div className='ml-10 sm:ml-[220px] md:ml-[150px] xl:ml-[400px]  text-3xl text-[#708090] flex mr-10'>
                <span className='text-[#00c1f5]'>03.</span> Projects</div>
        <div className='h-4 w-[10%] border-b border-[#610000]'></div>
    </div>

    <ProjectCard/>
    <RevProjectCard/>
    </section>
  )
}

export default Projects