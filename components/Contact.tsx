import Link from "next/link"


const Contact = () => {
  return (
    <section id="contact" className='h-[80vh] text-center mt-20 text-[#708090]'>    
    <div className='mb-10 text-lg'>
            <span className='text-[#00c1f5]'>04.</span><h4 className="inline">What's Next?</h4> 
    </div>
        <h1 className="text-3xl mb-3">Get In Touch</h1>
        <div className="lg:w-[700px] md:w-[700px] xl:w-[700px] lg:text-base md:text-base xl:text-base w-[350px] text-xs m-auto">
        <p>My inbox is always open. Whether you have a question, an opportunity or just want to say hi, I’ll try my best to get back to you!</p>
        </div>

    <Link href='mailto:danphylbert@gmail.com'>
    <button className="say_hello">Say Hello</button>
    </Link>
</section>
  )
}

export default Contact