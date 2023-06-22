import '@components/styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from "@material-tailwind/react";
import { SessionProvider, useSession } from "next-auth/react"
import { Navbar } from './components/Navbar';
import { ChakraProvider,extendTheme } from "@chakra-ui/react";

import { mode } from "@chakra-ui/theme-tools";

const theme = extendTheme({
  config: {
    useSystemColorMode: true,
    initialColorMode: "dark"
    
  },
  styles:{
    global: (props) => ({
      body: {
        bg: mode('#ffffff','#282828')(props),
      }
    })
  }
  
});

export default function App({ Component, pageProps: {session , ...pageProps}, }: AppProps) {


  
  return (
    
    <SessionProvider session={session}>
      
      
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
        </ChakraProvider>
      
    </SessionProvider>
  )
}
