import "./globals.css";

export const metadata = {
  title: "Danish - Full Stack Developer",
  description: "Danish - Full Stack Developer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body 
        className="antialiased"
        style={{ fontFamily: '"Helvetica Now Display DW", sans-serif' }}
      >
        {children}
      </body>
    </html>
  );
}
