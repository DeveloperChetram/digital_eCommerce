import { FaArrowRight } from "react-icons/fa";

const Home = () => {
  return (
    <main>
     <div className='mt-20 flex flex-col'  > 
        <h1 className=' font-medium text-4xl text-center leading-12'>Achieve More with Our Collection of <br />
<span className='text-[#BF40BF]'> High-Quality</span> Resources...</h1>
<p className='text-xl text-center mt-5 '>Discover the best quality eBooks and resources designed to support your projects,<br /> learning, and more. <span className='font-bold text-[#BF40BF]  inline-flex items-center gap-2 ml-2 cursor-pointer'>Explore 
  < FaArrowRight className="text-lg mt-.5 " /> </span> </p>
     </div>
    </main>
  )
}

export default Home
