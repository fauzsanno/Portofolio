import './globals.css';
import type { Metadata } from 'next';
export const metadata: Metadata = {title:'Joe Rettob — Digital Lab',description:'Personal portfolio: web development, data analysis and machine learning.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
