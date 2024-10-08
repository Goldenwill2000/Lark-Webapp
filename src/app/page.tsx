"use client";

import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  const getEmployees = async () => {
    try {
      const response = await fetch(
        "http://localhost:3001/api/Talenox/GetEmployees",
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
  return (
    <div className={styles.page} onClick={getEmployees}>
      Test
    </div>
  );
}
