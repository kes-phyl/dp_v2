import React from 'react'
import { ProjectCard, RevProjectCard } from '.'


const Projects = () => {
  return (
    <section id='project' className='h-[100vh] content-center'>
    <div className='flex mb-10'>
         <div className='ml-10 sm:ml-[220px] xl:ml-[300px]  text-3xl text-[#708090] flex mr-10'>
                <span className='text-[#00c1f5]'>04.</span> Projects</div>
        <div className='h-4 w-[10%] border-b border-[#610000]'></div>
    </div>

    <ProjectCard/>
    <RevProjectCard/>
    </section>
  )
}

export default Projects