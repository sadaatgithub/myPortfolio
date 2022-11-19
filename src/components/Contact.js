
import ContactForm from "./ContactForm"
import Heading from "./Heading"

import { useInView } from "react-intersection-observer"

const Contact = () => {
const {ref,inView} = useInView({
  triggerOnce: true,
  threshold:0.1,}
)

  return (
    <>
    <div  ref={ref} name="contact" className="flex flex-col justify-center items-center mt-10 sm:mt-24  min-h-[100vh] bg-[#f5f5f5] dark:bg-[#252525] py-12 overflow-hidden
    transition duration-1000 ease-in-out">
      <Heading title={"CONTACT ME"} inView={inView} animProp={"slideInRight"}/>

            <div className="flex flex-col p-1 items-center justify-center gap-y-4 sm:gap-x-4  w-full sm:p-4 mt-14 h-full">
            <ContactForm/>
            </div>
        </div></>
  )
}

export default Contact