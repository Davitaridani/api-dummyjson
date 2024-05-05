"use client";

import Navbar from "@/components/Navbar";
import { store } from "@/redux/store";
import { Inter } from "next/font/google";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider store={store}>
          <ToastContainer />
          <Navbar />
          {children}
        </Provider>
      </body>
    </html>
  );
}
