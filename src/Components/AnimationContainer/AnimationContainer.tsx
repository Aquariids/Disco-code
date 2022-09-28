import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import React, { ReactNode } from 'react';

interface IAnimationContainer {
    children:ReactNode
}

const AnimationContainer = ({children}:IAnimationContainer):JSX.Element => {
    const router = useRouter();
    return (
        <>
        <AnimatePresence>
            <motion.div
                transition={{ type: "spring", stiffness: 85 }}
                key={router.asPath}
                initial={{ x: 0, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                id="page-transition-container"
            >
                {children}
            </motion.div>
        </AnimatePresence>
        </>
    );
};

export default AnimationContainer;