/* eslint-disable @typescript-eslint/no-explicit-any */
// App.js File

import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, TableContainer} from '@chakra-ui/react'

interface IProps {
  tableHeaders: string[];
  tableData: { name: string, preferredPosition: string, joiningDate: Date | string }[];
  position?: position;
  top?: string
}

type position = 'relative' | 'absolute' | 'fixed';

export default function TableComponent({
  tableHeaders,
  tableData,
  position,
  top
}: IProps) {
  return (
    <TableContainer w='40%' whiteSpace={'balance'} pos={ position as position} top={top} mx="auto" >
				<Table size='sm'>
					<Thead>
          <Tr>
            {
              tableHeaders?.map((header) => <Th key={header} style={{
                width: '1px'
              }} textAlign={'center'} borderWidth={'1px'} whiteSpace='none !important' borderColor={'black'}>{header}</Th>)
            }
						</Tr>
					</Thead>
					<Tbody>
            {
              tableData?.map((data) => {
                return (
                  <Tr key={data.name} >
                    <Td borderWidth={'1px'} borderColor={'black'}>{data?.name}</Td>
                    <Td borderWidth={'1px'} borderColor={'black'}>{data?.preferredPosition}</Td>
                    <Td borderWidth={'1px'} borderColor={'black'}>{data?.joiningDate.toString()}</Td>
                  </Tr>
                )
              })
            }
					
					</Tbody>
				</Table>
			</TableContainer>
	);
}

