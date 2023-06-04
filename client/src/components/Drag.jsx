import { motion } from 'framer-motion'

const Drag = () => {

    return (
        <div className='w-full h-screen flex flex-col justify-center items-center border-b-2 border-white bg-slate-700 text-black'>
            <motion.div 
            className='w-[200px] h-[200px] bg-slate-400 text-center border rounded-lg'
            drag
            // drag= "x" 
            // drag = "y"
            dragConstraints={{ left:50, right: 50, top: 50, bottom: 50 }}
            whileDrag={{ scale: 1.5 }} //these are called gestures
            >Animate!</motion.div>
        </div>
    )
}

export default Drag
