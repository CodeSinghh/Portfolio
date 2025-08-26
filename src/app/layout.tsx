import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { Noto_Serif, Playfair_Display } from 'next/font/google';

const notoSerif = Noto_Serif({ 
  subsets: ['latin'],
  variable: '--font-noto-serif',
  display: 'swap',
});

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Cloud Chronicle Redux',
  description: "Yesterday's News, Tomorrow's Code",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Literata:opsz,wght@7..72,400;700&display=swap" rel="stylesheet" />
      </head>
      <body className={`${notoSerif.variable} ${playfair.variable} font-body antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
