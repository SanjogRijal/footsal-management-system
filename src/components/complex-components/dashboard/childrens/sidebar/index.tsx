
import React from 'react';
import {
  Box,

  useColorModeValue,

  Drawer,
  DrawerContent,
  useDisclosure,

} from '@chakra-ui/react'
import { SidebarContent } from './content';
import { MobileNav } from './mobileNav';




export default function SimpleSidebar({content, setActiveNavItem}: {content: React.ReactNode, setActiveNavItem: (navItem: string) => void}) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
      <SidebarContent setActiveNavItem = {setActiveNavItem} onClose={() => onClose} display={{ base: 'none', md: 'block' }} />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
        <DrawerContent>
          <SidebarContent setActiveNavItem={setActiveNavItem} onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {content}
      </Box>
    </Box>
  )
}






