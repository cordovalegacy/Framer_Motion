import { Link } from "react-router-dom"
import { motion } from "framer-motion"

const Pages = () => { // !Add the motion plus props to each page if there are multiple route elements
    return (
        <motion.div
            className='w-full h-screen flex flex-col justify-center items-center border-b-2 border-white bg-slate-700 text-black'
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "100%" }}
            exit={{ opacity: 0, x: window.innerWidth, transition: { duration: 0.1 } }}
        >
            <Link to={'/left'}>Left</Link>
            <Link to={'/'}>Middle</Link>
            <Link to={'/right'}>Right</Link>
        </motion.div>
    )
}

export default Pages
