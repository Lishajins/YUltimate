import type { Metadata } from "next";
import "./globals.css";
import { AuthProvider } from '@/contexts/AuthContext';
import { Layout } from '@/components/Layout';

export const metadata: Metadata = {
  title: "YUltimate - Ultimate Frisbee Hub",
  description: "Tournament management and coaching platform for Ultimate Frisbee",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <AuthProvider>
          <Layout>
            {children}
          </Layout>
        </AuthProvider>
      </body>
    </html>
  );
}
