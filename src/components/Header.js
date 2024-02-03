import {
    Box,
    Button,
    Grid,
    Typography

} from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import HeaderStyles from '@/styles/Header.module.css'
import { Close, Menu } from '@mui/icons-material'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
const navLinks = [
    {
        name: "Home",
        path: "/"
    },
    {
        name: "About",
        path: "/about"
    },
    {
        name: "Services",
        path: "/services"
    },
    {
        name: "Schedule a Meeting",
        path: "/schedule"
    },

]
const Header = () => {
    const [menuVisible, setMenuVisible] = useState(false);
    const pathname = usePathname();
    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };
    return (
        <Box bgcolor="#ffffff">
            <motion.div
                initial={{ y: '-100%' }}   // Initial position outside the top edge
                animate={{ y: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}  // Smooth animation
                exit={{ y: '-100%' }}       // Exit position (back outside the top edge)
            >
                <Grid container>
                    <Grid item sm={3} xs={8}>
                        <Box px={2}>
                            <Image src='/logo.png' width="50" layout='responsive' height="25" alt="Techingivo Logo" />
                        </Box>
                    </Grid>
                    <Grid item sm={9} xs={4} pr={2}>
                        <Button className={HeaderStyles.menuButton} onClick={toggleMenu}>{menuVisible ? <Close fontSize='large' /> : <Menu fontSize='large' />}</Button>
                        <Box className={menuVisible ? HeaderStyles.navLinksOpen : HeaderStyles.navLinks}>
                            {navLinks.map((link, key) => (<Link href={link.path} className={pathname == link.path ? HeaderStyles.activeNavLink : HeaderStyles.navLink} key={key}>{link.name}</Link>))}
                        </Box>
                    </Grid>
                </Grid>
            </motion.div>
        </Box>
    )
}

export default Header