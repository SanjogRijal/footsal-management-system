import { useEffect, useState } from "react";
import TableComponent from "./table";
import { Heading, useDisclosure } from "@chakra-ui/react";
import Button from "@/components/core-components/Buttons";
import styles from './index.module.css'
import AddPlayerModal from "./addPlayerModal";
export default function PlayersManagementComponent() {
  const [data, setData] = useState<{status: string, "err"?: string, data: []}>();
  const getData = async () => {
    const data = await fetch('http://localhost:3000/players');
    setData(await data.json())
  }
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    getData();
    console.log(data);
  })
  return <div style={{
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    position: 'relative',
    right: '50px'
  }}>
    <div className={styles.topSection}>
      <Heading textAlign={'center'} alignSelf={'center'} fontSize={'3xl'}>Player Management System</Heading>
    </div>
    <div className={styles.addButton}>
<Button label="Add Player" type="primary" style={{
        marginTop: '100px',
        fontSize: '15px',
        width: '100px',
      }} onClick={onOpen}/> 
      <AddPlayerModal isOpen={isOpen} onClose={onClose} />
    </div>
    
    {<TableComponent position={'relative'} top='2vh' tableHeaders={['Name', 'PreferredPosition', 'joiningDate']} tableData={[{
      name: 'Sanjog Rijal',
      preferredPosition: 'Goalkeeper',
      joiningDate: new Date()
    }]} useEdit={true} onOpen={onOpen}/>}
    
  </div>
}