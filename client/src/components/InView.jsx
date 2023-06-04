import { motion } from 'framer-motion'

const InView = () => {

    // !the viewport={{}} property allows us to limit how many 
    // !animations the element goes through

    return (
        <div className='w-full h-screen flex flex-col justify-center items-center border-b-2 border-white bg-slate-700 text-black'>
            <motion.div
                className='w-[200px] h-[200px] bg-slate-400 text-center border rounded-lg'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 1 }}
            >Animate!</motion.div>
        </div>
    )
}

export default InView