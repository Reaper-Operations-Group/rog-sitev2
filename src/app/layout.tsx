import type { Metadata } from "next";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { Experimental_CssVarsProvider } from "@mui/material";
import theme from "@/theme";
import Analytics from "../../components/Analytics/Analytics";
import { Providers } from "../../components/Auth/Providers";

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
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <Experimental_CssVarsProvider theme={theme}>
            <Providers>
                {children}
            </Providers>
          </Experimental_CssVarsProvider>
        </AppRouterCacheProvider>

        <Analytics />
      </body>
    </html>
  );
}
