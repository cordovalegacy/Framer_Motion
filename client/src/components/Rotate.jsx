import { useState } from 'react'
import { motion } from 'framer-motion'

const Rotate = () => {

    const [rotate, setRotate] = useState(false)

    return (
        <div className='w-full h-screen flex flex-col justify-center items-center bg-slate-700 text-black'>
            <motion.div 
            className='w-[200px] h-[200px] bg-slate-400 text-center border rounded-lg'
            animate={{ rotate: rotate ? 360 : 0 }}
            onClick={() => setRotate(!rotate)}
            >Animate!</motion.div>
        </div>
    )
}

export default Rotate
