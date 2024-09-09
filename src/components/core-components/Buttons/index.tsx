/* eslint-disable @typescript-eslint/no-explicit-any */
import styles from './index.module.css';

interface IProps {
  type: 'primary' | 'secondary' | 'normal',
  label: string,
  style?: any,
  onClick?: () => void
}

export default function Button({ type, label, style, onClick }: IProps) {
  return <button style={style ? style : {}} className={type === 'primary' ? styles.primaryButtonField: ''} onClick = {onClick}><b>{label}</b></button> 
}