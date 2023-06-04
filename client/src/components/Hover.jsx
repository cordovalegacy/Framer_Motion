import { motion } from 'framer-motion'

const Hover = () => {

    return (
        <div className='w-full h-screen flex flex-col justify-center items-center border-b-2 border-white bg-slate-700 text-black'>
            <motion.div
                className='w-[200px] h-[200px] bg-slate-400 text-center border rounded-lg'
                whileHover={{ scale: 1.2, rotate: 90 }}
                whileTap={{ scale: 0.8, rotate: -90, borderRadius: "100%" }}
                onHoverStart={e => { console.log("Hover Start") }} //similar to mouseenter
                onHoverEnd={e => { console.log("Hover End") }} //similar to mouseleave
            >Animate!</motion.div>
        </div>
    )
}

export default Hover