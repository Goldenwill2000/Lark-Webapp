"use client";
import { useEffect, useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const getEmployees = async () => {
    try {
      const response = await fetch(
        "https://lark-webapp-next.vercel.app/api/Talenox/GetEmployees",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  const getAccessToken = async () => {
    try {
      const response = await fetch(
        "https://lark-webapp-next.vercel.app/api/Lark/GetAccessToken",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            code: localStorage.getItem("token"),
          }),
        }
      );
      const data = await response.json();
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    if (
      localStorage.getItem("token") ||
      localStorage.getItem("token") !== null ||
      localStorage.getItem("token") !== ""
    ) {
      const urlParams = new URLSearchParams(window.location.search);
      const code = urlParams.get("code");
      if (!code) return;
      getAccessToken();
      setIsAuthorized(true);
    }
    getEmployees();
  });

  return (
    <div
      className={styles.page}
      onClick={() => {
        //target blank
        window.open(
          "https://open.larksuite.com/open-apis/authen/v1/authorize?app_id=cli_a78e232992b9902f&redirect_uri=https%3A%2F%2Flark-webapp-next.vercel.app%2F&state=test"
        );
      }}
    >
      {isAuthorized ? "Authorized" : "Not Authorized"}
    </div>
  );
}
