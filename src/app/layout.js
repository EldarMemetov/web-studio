import "./globals.css";
import { Header } from "./components/Header/Header";

export default function RootLayout({ children }) {
  console.log("RootLayout rendered");

  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
