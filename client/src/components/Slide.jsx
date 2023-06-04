import { useState } from 'react'
import { motion } from 'framer-motion'

const Slide = () => {

    const [slide, setSlide] = useState(false)

    return (
        <div className='w-full h-screen flex flex-col justify-center items-center border-b-2 border-white bg-slate-700 text-black'>
            <motion.div 
            className='w-[200px] h-[200px] bg-slate-400 text-center border rounded-lg'
            animate={{ x: slide ? 200 : -200 }}
            // transition={{ delay: 1 }}
            // transition={{ type: 'tween', duration: 1 }}
            // transition={{ type: "spring", bounce: 5 }}
            // transition={{ type: "inertia", velocity: 40 }}
            onClick={() => setSlide(!slide)}
            >Animate!</motion.div>
        </div>
    )
}

export default Slide