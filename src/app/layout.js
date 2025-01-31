import "./globals.css";
import { Inter } from "next/font/google";
import { AuthProvider } from "../usecontext/AuthContext";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "LendGuard - Loan Pre-Screening Solutions",
  description: "Fast, secure loan pre-screening solutions for Optigo lenders",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AuthProvider>
        <body className={inter.className}>{children}</body>
      </AuthProvider>
    </html>
  );
}


