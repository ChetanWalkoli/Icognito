import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Incogito | Random video or voice chat with Random people",
  description: "Incogito is a platform for anonymous video or voice chat with random people.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
