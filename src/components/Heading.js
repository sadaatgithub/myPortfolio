import React from 'react'



const Heading = ({title,inView,animProp}) => {

    const animateProperty = "animate-" + animProp

  return (
    <>
    <h2 className= {`${inView? animateProperty +" " +"transition duration-500":"opacity-0"} text-center mt-8 text-2xl sm:text-4xl font-bold  text-slate-700
     dark:text-gray-200 mb-2 font-nunito
     p-2  tracking-widest  border-b-4 border-teal-400 `}>
      {title}
    </h2>
    </>
  )
}

export default Heading