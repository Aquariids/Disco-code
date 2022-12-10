import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import s from './Logo.module.css';
import { AnimatePresence, motion } from 'framer-motion';
import { logoProps } from './Logo.props';

const logo = ({ path, src }: logoProps): JSX.Element => {

    const router = useRouter();


    if (router.pathname === path) {
        return (
            <AnimatePresence>
                <motion.div className={s.logo}
                    transition={{ type: "spring", stiffness: 50 }}
                    key={router.pathname}
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                >
                    <Link href={'/'}><img alt='logo' style={{ width: '48px', height:'48px', cursor: 'pointer', borderRadius: '15px' }} src={src} /></Link>
                </motion.div>
            </AnimatePresence>
        );
    } else if (router.asPath.startsWith(path)) {
        return (
            <div className={s.logo}><Link href={'/'}><img alt='logo' style={{ width: '48px', height:'48px', cursor: 'pointer',borderRadius: '15px' }} src={src} /></Link> </div>
        );
    } else {
        return (
            <AnimatePresence>
            <motion.div className={s.logo}
                transition={{ type: "spring", stiffness: 50 }}
                key={router.pathname}
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
            >
                <Link href={'/'}><img alt='logo'  style={{ width: '48px', height:'48px', cursor: 'pointer', borderRadius: '15px' }} src={src} /></Link>
            </motion.div>
        </AnimatePresence>
        );

    }

};

export default logo;