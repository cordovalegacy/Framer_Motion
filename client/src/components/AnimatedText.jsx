import { motion } from 'framer-motion' // !animation package

const AnimatedText = ({ text, className = "" }) => {

    const quote = {
        initial: {
            opacity: 0 //*invisible to start
        },
        animate: {
            opacity: 1, //*become visible
            transition: { 
                delay: 0.25, //*waits a quarter second then starts animation
                duration: 1.1, //*animation lasts 1.1 sec
                staggerChildren: 0.08 //*creates a domino animation effect (super cool)
            }
        }
    }

    const singleWord = {
        initial: {
            opacity: 0, 
            y: 50 //*starts half way from where positioned on the screen vertically
        },
        animate: {
            opacity: 1,
            y: 0, //*go to actual starting point
            transition: {
                duration: 2
            }
        }
    }
    return (
        <div className='w-full h-screen flex flex-col justify-center items-center border-b-2 border-white bg-slate-700 text-black'>
            <motion.h1
                variants={quote}
                initial="initial"
                animate="animate"
                className={`inline-block w-full text-black font-bold capitalize ${className}`}
            >{text.split(" ").map((word, idx) => (
                /* Super Unique Key (each word) */
                <motion.span
                    key={word + '-' + idx}
                    className="inline-block"
                    variants={singleWord}
                >
                    {word}&nbsp;
                </motion.span>
            ))}</motion.h1>
        </div>
    )
}

export default AnimatedText
