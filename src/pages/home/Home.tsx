import { useEffect } from "react";

export default function Home() {
  const getEmployees = async () => {
    const response = await fetch("https://api.talenox.com/api/v2/employees", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer " + "8oAoCS9vpPZIpyvdUWlpNZ2IZjn2M8SIEcaS-b61Bd0",
      },
    });
    const data = await response.json();
    console.log(data);
  };

  useEffect(() => {
    getEmployees();
  });
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}
