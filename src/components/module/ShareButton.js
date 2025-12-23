"use client";
import { useEffect, useState } from "react";

import { LuShare2 } from "react-icons/lu";
import styles from "@/components/module/ShareButton.module.css";

const ShareButton = () => {
  const [copied, setCopied] = useState(false);

  const [url, setUrl] = useState("");

  useEffect(() => {
    setUrl(window.location.href);
  }, []);
  const copyHandler = async (url) => {
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className={styles.container}>
      <LuShare2 />
      <button onClick={() => copyHandler(url)}>
        {" "}
        {copied ? "لینک صفحه کپی شد!" : "اشتراک گذاری"}
      </button>
    </div>
  );
};
export default ShareButton;
