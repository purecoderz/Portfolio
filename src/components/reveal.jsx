import { motion } from 'motion/react'

// Fade + rise on scroll into view. Runs once; respects reduced-motion via the
// global CSS override in index.css. Pass `x` to slide in sideways instead.
export function Reveal({ children, className = '', delay = 0, x = 0, y = 24 }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
