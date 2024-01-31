import "@/styles/globals.css";
import Theme from "@/theme";
import { ThemeProvider } from "@mui/material";
import { AnimatePresence } from "framer-motion"

export default function App({ Component, pageProps }) {
  return (
    <AnimatePresence mode="wait" initial={false}>
      <ThemeProvider theme={Theme}><Component {...pageProps} /></ThemeProvider>
    </AnimatePresence>
  )
}
