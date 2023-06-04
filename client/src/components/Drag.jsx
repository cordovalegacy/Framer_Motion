import { motion } from 'framer-motion'
import { useRef } from 'react'

const Drag = () => {

    const DragRef = useRef(null)

    return (
        <div className='w-full h-screen flex flex-col justify-center items-center border-b-2 border-white bg-slate-700 text-black'>
            <motion.div
                className='w-[200px] h-[200px] bg-slate-400 text-center border rounded-lg'
                ref={DragRef}
                drag
                dragConstraints={{ left: 50, right: 50, top: 50, bottom: 50 }}
                whileDrag={{ scale: 1.5 }} //these are called gestures
            // drag= "x" 
            // drag = "y"
            // dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
            // onDragEnd={(event, info) => console.log(info.point.x, info.point.y)} drop equivalent
            >Animate!</motion.div>
        </div>
    )
}

export default Drag
