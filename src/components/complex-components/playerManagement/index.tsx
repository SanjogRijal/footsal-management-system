import { useEffect, useState } from "react";

export default function PlayersManagementComponent() {
  const [data, setData] = useState<[]>([]);
  const getData = async () => {
    const data = await fetch('http://localhost:3000/players');
    setData(await data.json())
  }
  useEffect(() => {
    getData();
  })
  return <div>
      {JSON.stringify(data)}
  </div>
}