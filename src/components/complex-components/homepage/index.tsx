'use client'

import { Heading } from '@chakra-ui/react';
import styles from './index.module.css';
import { useRouter } from 'next/router';
export default function HomepageComponent() {
  const router = useRouter();
  return <div className={styles.container}>
    <div className={styles.homepageWrapper}>
      <div className={styles.rightContent}>
        <div className={styles.rightContentWrapper}>
          <Heading as = 'h1'>Welcome To, <br/>Footsal Management System</Heading>
        
          <p>A tool to save players, create teams and generate teams based on players</p>
        </div>
      </div>
      <div className={styles.leftContent}>
        <div className={styles.leftContentWrapper}>
            <button className={styles.buttonField} onClick = {() => {router.push('/dashboard')}}><b>Start My Footsal</b></button> 
        </div>
      </div>
    </div>
  </div>
}