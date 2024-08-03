import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import clsx from 'clsx';
import { ReactNode } from 'react';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

export const metadata: Metadata = {
  title: 'Countries',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(inter.className)}>{children}</body>
      <Script src={`https://maps.googleapis.com/maps/api/js?key=${API_KEY}`} />
    </html>
  );
}
