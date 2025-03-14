import type { Metadata } from "next";
import { ToastContainer } from "react-toastify";
import "./globals.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <link href="https://fonts.cdnfonts.com/css/jk-abode" rel="stylesheet" />
      </head>
      <body>
        <ToastContainer autoClose={3000} />
        {children}
      </body>
    </html>
  );
}
