import { FiHome, FiTrendingUp, FiCompass, FiStar } from "react-icons/fi";
import { LinkItemProps } from "./types";

export const LinkItems: Array<LinkItemProps> = [
  { name: 'Home', icon: FiHome, href: '/' },
  { name: 'Player Management', icon: FiTrendingUp },
  { name: 'Teams Management', icon: FiCompass },
  { name: 'Team Generation', icon: FiStar },
  // { name: 'Settings', icon: FiSettings },
]