import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Aymar Avilés - Portafolio',
  description: 'Desarrollador Web Full Stack & Automatización con IA',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-[#070709] text-white min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
