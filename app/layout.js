import './globals.css';

export const metadata = {
  title: 'Royella – Resort and Hotel Boking React Tailwind Website Template',
  description:
    "Royella is a modern website template for resorts and hotels. Built with React, Next.js, and Tailwind CSS, it features a responsive design and an integrated booking system. Perfect for showcasing your resort's unique features and attracting more guests.",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
