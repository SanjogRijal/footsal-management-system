/* eslint-disable @typescript-eslint/no-explicit-any */
// App.js File

import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, TableContainer} from '@chakra-ui/react'

interface IProps {
  tableHeaders: string[];
  tableData: { name: string, preferredPosition: string, joiningDate: Date | string }[];
  position?: position;
  top?: string;
  useEdit?: boolean;
  onOpen?: any
  calledBy?: 'players' | 'teams'
}

type position = 'relative' | 'absolute' | 'fixed';

export default function TableComponent({
  tableHeaders,
  tableData,
  position,
  top,
  useEdit,
  onOpen,
  calledBy
}: IProps) {
  console.log(tableData);
  return (
    <TableContainer alignSelf={'center'} padding={'20px'} border={'1px solid'} borderRadius={'10'} pos={position} top={top}>
				<Table size={'sm'} marginTop={'10px'} >
					<Thead>
          <Tr>
            {
              tableHeaders?.map((header) => <Th key={header} textAlign={'center'} border={'2px solid #6F7887' } >{header}</Th>) 
            }
             {useEdit && <Th  textAlign={'center'} pos={position} border={'2px solid #6F7887' }>Edit</Th>}
						</Tr>
					</Thead>
					<Tbody>
            {
              tableData?.map((data) => {
                return  calledBy === 'players' ? (
                  <Tr key={data.name} >
                    <Td border={'2px solid #6F7887'}>{data?.name}</Td>
                    <Td border={'2px solid #6F7887'}>{data?.preferredPosition}</Td>
                    <Td border={'2px solid #6F7887'}>{data?.joiningDate.toString()}</Td>
                    {useEdit && <Td border={'2px solid #6F7887'}><a onClick={onOpen}>Edit</a></Td>}
                  </Tr>
                ): <></>
              })
            }
					
					</Tbody>
				</Table>
			</TableContainer>
	);
}

