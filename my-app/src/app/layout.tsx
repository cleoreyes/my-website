import localFont from "next/font/local";
import "./globals.css";
import NavBar from "./components/navbar";

const opensauce = localFont({
  src: [
    {
      path: "/static-fonts/open-sauce/OpenSauceTwo-Light.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "/static-fonts/open-sauce/OpenSauceTwo-Regular.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "/static-fonts/open-sauce/OpenSauceTwo-Medium.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "/static-fonts/open-sauce/OpenSauceTwo-SemiBold.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "/static-fonts/open-sauce/OpenSauceTwo-Bold.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "/static-fonts/open-sauce/OpenSauceTwo-ExtraBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "/static-fonts/open-sauce/OpenSauceTwo-Black.ttf",
      weight: "600",
      style: "normal",
    },
  ],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={opensauce.className}
      >
        <NavBar/>
        {children}
      </body>
    </html>
  );
}
