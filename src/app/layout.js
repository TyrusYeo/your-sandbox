import '../styles/fonts.css'
import '../styles/globals.css'

export const metadata = {
  title: "Serendipitous Connections",
  description: "Connect with strangers serendipitously",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-arizona bg-background text-text">
        {children}
      </body>
    </html>
  );
}