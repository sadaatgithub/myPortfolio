import React from 'react'

import { useInView } from 'react-intersection-observer';

const Heading = ({title,animProp}) => {

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold:0.5,
   
  });

    const animateProperty = "animate-" + animProp

  return (
    <>
    <div ref={ref} className="overflow-hidden">
    <h2 className= {`${inView? animateProperty +" " +"transition-all duration-500":"opacity-0"} text-center mt-8 text-2xl sm:text-4xl font-bold  text-slate-700
     dark:text-gray-200 mb-2 font-nunito
     p-2  tracking-widest  border-b-4 border-teal-400 `}>
      {title}
    </h2>
    </div>
    </>
  )
}

export default Heading