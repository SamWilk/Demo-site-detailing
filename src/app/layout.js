import "./globals.css";

export const metadata = {
  title: "Detail King 904 | Jacksonville Mobile Auto Detailing",
  description:
    "Detail King 904 provides professional detailing, paint correction, certified ceramic coating, window tinting, and water spot removal in Jacksonville, FL and surrounding areas.",
  icons: {
    icon: "/site-icon.svg",
  },
  keywords: [
    "Detail King 904",
    "Jacksonville mobile detailing",
    "Jacksonville ceramic coating",
    "Jacksonville paint correction",
    "Jacksonville window tinting",
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
