import { Badge } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function PlayersManagementComponent() {
  const [data, setData] = useState<{status: string, "err"?: string, data: []}>();
  const getData = async () => {
    const data = await fetch('http://localhost:3000/players');
    setData(await data.json())
  }
  useEffect(() => {
    getData();
  })
  return <div style={{
    display: 'flex',
    justifyContent: 'space-between',
  }}>
    {data?.status === '200' ? JSON.stringify(data) : <Badge style={{
      border: '2px solid red',
      position: 'relative',
      top: '40vh',
    left: '40vw',
      }}>{data?.err}</Badge>}
  </div>
}