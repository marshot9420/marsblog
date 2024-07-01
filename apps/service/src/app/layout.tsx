import "../styles/globals.css";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "MarsBlog",
  description: "MARSHOT의 블로그입니다.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
