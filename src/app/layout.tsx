import type { Metadata } from "next";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { Box, Container, Experimental_CssVarsProvider } from "@mui/material";
import theme from "@/theme";
import Analytics from "@/components/Analytics/Analytics";
import { Providers } from "@/components/Auth/Providers";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: "ROG Website",
  description: "Website created for the reaper operations group",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={
      {
        height: "100vh",
        margin: 0,
      }
    }>
      <body style={
        {
          height: "100vh",
          margin: 0,
          backgroundColor: "whitesmoke"
        }
      }>
        <AppRouterCacheProvider>
          <Experimental_CssVarsProvider theme={theme}>
            <Providers>
              <Header/>
              {children}
              <Footer/>
            </Providers>
          </Experimental_CssVarsProvider>
        </AppRouterCacheProvider>

        <Analytics />
      </body>
    </html>
  );
}
