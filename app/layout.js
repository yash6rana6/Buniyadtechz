import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});



const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "School Management System | Buniyad Techz",
  description:
    "Experience Buniyad Techz's modern School Management System — designed to automate attendance, exams, reports, and fee management with a user-friendly dashboard.",
  keywords: [
    "school management system",
    "school ERP software",
    "education software",
    "student attendance",
    "exam management",
    "Buniyad Techz",
  ],
  authors: [{ name: "Buniyad Techz" }],
  openGraph: {
    title: "School Management System | Buniyad Techz",
    description:
      "Automate attendance, exams, and reports with Buniyad Techz School Management System — a complete ERP solution for modern schools.",
    url: "https://your-domain.vercel.app/school-management-system",
    siteName: "Buniyad Techz",
    images: [
      {
        url: "https://your-domain.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Buniyad Techz School Management System",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "School Management System | Buniyad Techz",
    description:
      "Smart ERP system by Buniyad Techz for automating school operations and reports.",
    images: ["https://buniyadtechz.vercel.app/blogs/erp-system"],
  },
  metadataBase: new URL("https://buniyadtechz.vercel.app/"),
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="sticky top-0 z-50 bg-slate-950">
          <Navbar/>
        </div>
        {children}
      </body>
    </html>
  );
}
