import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Incogito | Anonymous video chat",
  description: "Incogito is a platform for anonymous video or voice chat with random people.",
};

export default function RootLayout({
  children,
  }: Readonly<{
    children: React.ReactNode;
  } >) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
