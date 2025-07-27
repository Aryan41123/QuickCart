import { Outfit } from "next/font/google";
import "./globals.css";
import { AppContextProvider } from "@/context/AppContext";
import { Toaster } from "react-hot-toast";
import Sidebar from "@/components/sidebar";
import Navbar from "@/components/Navbar";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'


const outfit = Outfit({ subsets: ['latin'], weight: ["300", "400", "500"] })

export const metadata = {
  title: "QuickCart - GreatStack",
  description: "E-Commerce with Next.js ",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={`${outfit.className} antialiased text-gray-700`} >
        <Toaster />
        <AppContextProvider>
          <Navbar />
          <Sidebar />
          <main>{children}</main>
        </AppContextProvider>
      </body>
    </html>
    </ClerkProvider>
  );
}
