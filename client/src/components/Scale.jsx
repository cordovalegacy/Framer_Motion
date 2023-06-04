import { motion } from 'framer-motion'

const Scale = () => {

    return (
        <div className='w-full h-screen flex flex-col justify-center items-center border-b-2 border-white bg-slate-700 text-black'>
            <motion.div 
            className='w-[200px] h-[200px] bg-slate-400 text-center border rounded-lg'
            whileHover={{ scale: 2 }}
            >Animate!</motion.div>
        </div>
    )
}

export default Scale
