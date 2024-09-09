// App.js File

import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, TableContainer} from '@chakra-ui/react'

export default function TableComponent() {
	return (
			<TableContainer w="55%" mx="auto">
				<Table size='sm'>
					<Thead>
						<Tr>
							<Th>Name</Th>
							<Th>Gender</Th>
							<Th isNumeric>Age</Th>
						</Tr>
					</Thead>
					<Tbody>
						<Tr>
							<Td>Anom Mokha</Td>
							<Td>Male</Td>
							<Td isNumeric>19</Td>
						</Tr>
						<Tr>
							<Td>Priya Sharma</Td>
							<Td>Female</Td>
							<Td isNumeric>24</Td>
						</Tr>
						<Tr>
							<Td>Arun Singh</Td>
							<Td>Male</Td>
							<Td isNumeric>32</Td>
						</Tr>
						<Tr>
							<Td>Sam Watson</Td>
							<Td>Male</Td>
							<Td isNumeric>43</Td>
						</Tr>
					</Tbody>
				</Table>
			</TableContainer>
	);
}

