import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer'; // Ensure the path is correct
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
