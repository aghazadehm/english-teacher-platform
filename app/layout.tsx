import "./globals.css";

export const metadata = {
  title: 'English Teacher Platform',
  description: 'AI-ready multi-tenant platform for English teachers'
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
