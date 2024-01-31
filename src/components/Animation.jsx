import React, { useEffect } from 'react';
import { motion } from "framer-motion";

const AnimationWrapper = ({ children }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >
            {children}
        </motion.div>
    )
}

export default AnimationWrapper;