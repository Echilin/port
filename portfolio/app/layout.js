import "./globals.css";
import Nav from "@/app/components/Nav";
import Footer from "@/app/components/Footer";

export const metadata = {
  title: "Portfólio | Echilin",
  description: "Desenvolvedora Front-end & UX entusiasta 💻✨",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
        <Nav />
        <main className="flex-1 flex items-center justify-center px-6 py-12">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
