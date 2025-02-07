import { BoxProps, FlexProps } from "@chakra-ui/react"
import { ReactText } from "react"
import { IconType } from "react-icons"

export interface LinkItemProps {
  name: string
  icon: IconType
  href?: string
}

export interface SidebarProps extends BoxProps {
  onClose: () => void
  setActiveNavItem: (navItem: string) => void
}

export interface NavItemProps extends FlexProps {
  icon: IconType
  children: ReactText
  href?: string
}

export interface MobileProps extends FlexProps {
  onOpen: () => void
}