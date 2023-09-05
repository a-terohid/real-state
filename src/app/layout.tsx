import './globals.css'
import type { Metadata } from 'next'
import { Bricolage_Grotesque } from "@/utils/fonts" 
import Layout from '@/layout/Layout'
import NextAuthProvider from '@/providers/NextAuthProvider'

export const metadata: Metadata = {
  title: 'Real State',
  description: 'Property Purchase and Rental System',
}

export default function RootLayout({ children }: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={Bricolage_Grotesque.className}>
        <NextAuthProvider>
          <Layout>
            {children}
          </Layout>
        </NextAuthProvider>
      </body>
    </html>
  )
}
