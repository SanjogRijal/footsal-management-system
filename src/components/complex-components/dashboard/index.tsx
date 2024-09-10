// import SimpleSidebar from "./childrens/sidebar";

import { useState } from "react";
import SimpleSidebar from "./childrens/sidebar";
import PlayersManagementComponent from "../playerManagement";
import TeamsManagementComponent from "../teams-management";

export default function DashboardComponent() {
  const [activeNavItem, setActiveNavItem] = useState<'Home'|'PlayersManagement'|'TeamsManagement' | 'TeamGeneration' | string>('Home')
  console.log(activeNavItem);
  const homeContent = <div style={{ display: 'flex'}}>
      Welcome to dashboard of FMS
  </div>
  return <>
    <SimpleSidebar setActiveNavItem={setActiveNavItem} content={activeNavItem === 'Home' ? homeContent :
      activeNavItem === 'PlayersManagement' ? <><PlayersManagementComponent/></> :
        activeNavItem === 'TeamsManagement' ? <><TeamsManagementComponent/></> : 
      activeNavItem === 'TeamGeneration' ? <>Teams Generation Module</>: null} />
  </>
}