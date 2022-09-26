import { AnimatePresence, motion } from 'framer-motion';
import React, { ReactNode } from 'react';


interface IAnimationContainer {
    children:ReactNode
}

const AnimationContainer = ({children}:IAnimationContainer):JSX.Element => {
    return (
        <AnimatePresence>

            <motion.div
            // transition={{ ease: "easeOut", duration: 0 }}
                transition={{ type: "spring", stiffness: 85 }}
                key={Math.random()}
                initial={{ x: 10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                id="page-transition-container"
            >
                {children}

            </motion.div>
        </AnimatePresence>
    );
};

export default AnimationContainer;