import "./globals.css";

export const metadata = {
  title: "Clean Drive Mobile Spa | Tampa Bay Mobile Car Detailing",
  description:
    "Clean Drive Mobile Spa provides mobile car spa services, interior detailing, and exterior detailing in Tampa, St. Pete, and Clearwater.",
  icons: {
    icon: "/site-icon.svg",
  },
  keywords: [
    "Clean Drive Mobile Spa",
    "Tampa mobile detailing",
    "St. Pete mobile detailing",
    "Clearwater mobile detailing",
    "Tampa car detailing",
    "mobile car spa Tampa Bay",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
