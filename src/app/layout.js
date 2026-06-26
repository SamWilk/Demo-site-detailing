import "./globals.css";

export const metadata = {
  title: "Florida Boys Mobile Detail | Jacksonville Mobile Car Detailing",
  description:
    "Florida Boys Mobile Detail provides mobile auto detailing, handwashing, touchless wash, and protection services across the Jacksonville, FL area.",
  icons: {
    icon: "/site-icon.svg",
  },
  keywords: [
    "Florida Boys Mobile Detail",
    "Jacksonville mobile detailing",
    "Jacksonville car wash",
    "Jacksonville auto detailing",
    "mobile car detailer Jacksonville",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
