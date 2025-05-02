import "./globals.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import { AuthProvider } from "../context/AuthContext";

export const metadata = {
  title: "CREvolt - Loan Pre-Screening Solutions",
  description: "Fast, secure loan pre-screening solutions for Optigo lenders",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
