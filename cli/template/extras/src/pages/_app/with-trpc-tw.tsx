import { type AppType } from "next/app";
import { Geist } from "next/font/google";

import { api } from "~/utils/api";

import "~/styles/globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div className={`${geist.className} ${geist.variable}`}>
      <Component {...pageProps} />
    </div>
  );
};

export default api.withTRPC(MyApp);
