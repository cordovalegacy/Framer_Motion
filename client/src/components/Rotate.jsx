import { useState } from 'react'
import { motion } from 'framer-motion'

const Rotate = () => {

    const [rotate, setRotate] = useState(false)

    return (
        <div className='w-full h-screen flex flex-col justify-center items-center border-b-2 border-white bg-slate-700 text-black'>
            <motion.div
                className='w-[200px] h-[200px] bg-slate-400 text-center border rounded-lg'
                animate={{ rotate: rotate ? 360 : 0 }}
                // animate={{ rotate: [0, 500, 500, 0], x: [0, 200, 0] }}
                // transition={{ repeat: Infinity, duration: 1 }}
                // transition={{ duration: 2 }}
                // transition={{ delay: 1 }}
                // transition={{ type: 'tween', duration: 1 }}
                // transition={{ type: "spring", bounce: 5, stiffness: 260, damping: 20 }}
                // transition={{ type: "inertia", velocity: 500 }}
                onClick={() => setRotate(!rotate)}
            >Animate!</motion.div>
        </div>
    )
}

export default Rotate
