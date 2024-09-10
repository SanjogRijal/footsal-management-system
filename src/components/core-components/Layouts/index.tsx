import AddPlayerModal from "@/components/complex-components/playerManagement/addPlayerModal";
import TableComponent from "@/components/complex-components/playerManagement/table";
import { useGetAllPlayersQuery } from "@/store/services/playersApiSlice";
import { useDisclosure, Heading } from "@chakra-ui/react";
import { ReactNode } from "react";
import { Button } from "@chakra-ui/react";
import styles from './index.module.css';

type IProps = {
  headingContent: string,
  buttonLabel: string,
  table: ReactNode,
  calledBy?: 'player' | 'team'
}

export default function LayoutComponent({
  headingContent,
  buttonLabel,
  table,
  calledBy
}: IProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return <div className={ styles.playersWrapper }>
    <div className={styles.topSection}>
      <Heading textAlign={'center'} alignSelf={'center'} fontSize={'3xl'}>{headingContent}</Heading>
    </div>
    <div className={styles.addButton}>
      <Button left="45%"colorScheme="blue" onClick={onOpen}>{buttonLabel}</Button>
      {calledBy === 'player' && <AddPlayerModal isOpen={isOpen} onClose={onClose} />}
    </div>
    
    {table}
    
  </div>

}  
