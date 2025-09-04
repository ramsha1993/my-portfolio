// pages/_app.js
import "@/styles/globals.css";
import { Roboto } from "next/font/google"; // ✅ correct import

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // pick the weights you need
  variable: "--font-roboto", // ✅ defines the CSS variable
});

export default function App({ Component, pageProps }) {
  return (
    <main className={roboto.variable}>
      <Component {...pageProps} />
    </main>
  );
}
