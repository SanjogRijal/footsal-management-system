import { useEffect, useState } from "react";
import TableComponent from "./table";
import { Heading, Text } from "@chakra-ui/react";

export default function PlayersManagementComponent() {
  const [data, setData] = useState<{status: string, "err"?: string, data: []}>();
  const getData = async () => {
    const data = await fetch('http://localhost:3000/players');
    setData(await data.json())
  }
  useEffect(() => {
    getData();
    console.log(data);
  })
  return <div style={{
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column'
  }}>
    <div className="topSection">
<Heading textAlign={'center'} alignSelf={'center'} fontSize={'3xl'}>Player Management System</Heading>
    
    </div>
    
    {<TableComponent position={'relative'} top='10vh' tableHeaders={['Name', 'PreferredPosition', 'joiningDate']} tableData={[{
      name: 'Sanjog Rijal',
      preferredPosition: 'Goalkeeper',
      joiningDate: new Date()
    }]}/>}
  </div>
}