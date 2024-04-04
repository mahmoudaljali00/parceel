
import "./globals.css";

export const metadata = {
  title: "parceel",
  description: "shaping and import",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
