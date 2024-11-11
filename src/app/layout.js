import { AppProvider } from "@/component/Context";
import "./globals.css";

export const metadata = {
  title: "Empiregram",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AppProvider>
          {children}
        </AppProvider>
      </body>
    </html>
  );
}