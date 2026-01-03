export const metadata = {
  title: 'Price Compare',
  description: 'Compare prices across vendors',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header style={{ padding: '1rem', borderBottom: '1px solid #ddd' }}>
          <h1>Price Compare</h1>
        </header>

        <main style={{ padding: '1rem' }}>{children}</main>
      </body>
    </html>
  );
}
