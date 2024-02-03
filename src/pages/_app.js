import "@/styles/globals.css";
import Theme from "@/theme";
import { ThemeProvider } from "@mui/material";
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function App({ Component, pageProps }) {
  return <ThemeProvider theme={Theme}><SpeedInsights/><Component {...pageProps} /></ThemeProvider>
}
