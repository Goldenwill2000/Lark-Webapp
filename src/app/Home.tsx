"use client";
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import { APIPaths } from "./utilities/Paths";
import { getEmployees, getTalenoxAccessToken } from "./utilities/Requests";

export default function Home() {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [authCode, setAuthCode] = useState("");

  const fetchEmployees = async () => {
    let response = await getEmployees();
    console.log(response);
  };

  const fetchTalenoxAccessToken = async (code: string) => {
    let response = await getTalenoxAccessToken(code);
    console.log(response);
  };

  useEffect(() => {
    const url = new URLSearchParams(window.location.search);
    const authCode = url.get("code");

    if (authCode) {
      fetchTalenoxAccessToken(authCode);
      return;
    }

    // window.location.href = APIPaths.talenoxOAuth2Endpoint;
    // window.location.href = APIPaths.larkOAuth2Endpoint;
  }, []);

  return <div>{isAuthorized ? "Authorized" : "Not Authorizeds"}</div>;
}
