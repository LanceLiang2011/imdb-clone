import './globals.css';

export const metadata = {
  title: 'IMDB Clone',
  description: 'A IMDB Clone for learning Next.js 13',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
