import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, TableContainer } from '@chakra-ui/react';

const ItemsTable = () => {
  // Dummy data for demonstration
  const items = [
    {
      id: 1,
      name: 'Item 1',
      category: 'Category A',
      quantity: 2,
      price: 100,
      gst: 5,
      hsnCode: 'HSN456',
      totalPrice: 200,
    },
    {
      id: 2,
      name: 'Item 2',
      category: 'Category B',
      quantity: 3,
      price: 50,
      gst: 3,
      hsnCode: 'HSN012',
      totalPrice: 150,
    },
    // Add more items as needed
  ];

  return (
    <TableContainer bg='white'>
      <Table variant="simple">
        <Thead>
        <Tr>
          <Th style={{ border: '1px solid gray' }}>Item ID</Th>
          <Th style={{ border: '1px solid gray' }}>Item Name</Th>
          <Th style={{ border: '1px solid gray' }}>Category</Th>
          <Th style={{ border: '1px solid gray' }}>Quantity</Th>
          <Th style={{ border: '1px solid gray' }}>Item Price</Th>
          <Th style={{ border: '1px solid gray' }}>GST</Th>
          <Th style={{ border: '1px solid gray' }}>HSN/SSN Code</Th>
          <Th style={{ border: '1px solid gray' }}>Total Price</Th>
        </Tr>
        </Thead>
        <Tbody>
        {items.map(item => (
          <Tr key={item.id} height='50px'>
            <Td style={{ border: '1px solid gray' }}>{item.id}</Td>
            <Td style={{ border: '1px solid gray' }}>{item.name}</Td>
            <Td style={{ border: '1px solid gray' }}>{item.category}</Td>
            <Td style={{ border: '1px solid gray' }}>{item.quantity}</Td>
            <Td style={{ border: '1px solid gray' }}>{item.price}</Td>
            <Td style={{ border: '1px solid gray' }}>{item.gst}</Td>
            <Td style={{ border: '1px solid gray' }}>{item.hsnCode}</Td>
            <Td style={{ border: '1px solid gray' }}>{item.totalPrice}</Td>
          </Tr>
        ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}

export default ItemsTable;
