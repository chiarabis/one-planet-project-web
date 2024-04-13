import './loader.css'
import {motion} from 'framer-motion'

export default function Loader() {
  return (
    <>
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        className='loader'
        >
            <span>Loading mission...</span>
            <div className="spinner"></div>
        </motion.div>
    </>
  )
}
