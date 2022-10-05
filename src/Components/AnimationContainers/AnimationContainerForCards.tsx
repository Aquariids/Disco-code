import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import React, { ReactNode } from 'react';

interface IAnimationContainerForCards {
    children:ReactNode
}

const AnimationContainerForCards = ({children}:IAnimationContainerForCards):JSX.Element => {
    const router = useRouter();
    return (
        <>
        <AnimatePresence>
            <motion.div
               key={router.asPath}
               initial={{ scale: 0 }}
               animate={{  scale: 1 }}
               transition={{
                 type: "spring",
                 stiffness: 260,
                 damping: 30,
               }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
        </>
    );
};

export default AnimationContainerForCards;