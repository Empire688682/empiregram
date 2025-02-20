// app/layout.js
"use client";
import { AppProvider, useGlobalContext } from "@/component/Context";
import "./globals.css";
import Head from "next/head";
import MenuBar from "@/component/MenuBar/MenuBar";
import { usePathname } from "next/navigation";
import { useState, useEffect  } from "react";

export default function RootLayout({ children }) {
  const pathName = usePathname();
  const [showMenu, setShowMenu] = useState(pathName !== "/");
  useEffect(()=>{
    setShowMenu(pathName !== "/"); 
  },[pathName]);

  console.log("showMenu", pathName);
  return (
    <AppProvider>
      <InnerLayout>
      {
        showMenu && <MenuBar/>
      }
        {children}
      </InnerLayout>
    </AppProvider>
  );
}

function InnerLayout({ children }) {
  const { defaultMode } = useGlobalContext();

  return (
    <html lang="en">
      <Head>
        <title>Empiregram</title>
        <meta name="description" content="This is Empiregram" />
        <meta name="author" content="JayEmpire" />
        <meta
          name="format-detection"
          content="telephone=no, date=no, email=no, address=no"
        />
        <meta property="og:title" content="JayEmpire" />
        <meta property="og:description" content="Your one time chat app" />
        <meta property="og:image" content="URL to your image" />
        <meta property="og:url" content="URL of your app" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="JayEmpire" />
        <meta
          name="twitter:description"
          content="This is Empiregram, your one time chat app"
        />
        <meta name="twitter:image" content="URL to your image" />
      </Head>
      <body>
        <div className={defaultMode === "dark" ? "dark" : "light"}>
          {children}
        </div>
      </body>
    </html>
  );
}
