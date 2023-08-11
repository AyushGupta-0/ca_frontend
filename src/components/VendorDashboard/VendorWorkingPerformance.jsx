import React, { useState } from 'react';
import { Box, Flex, Heading, Progress, SimpleGrid,Table, Thead, Tbody, Tr, Th, Td, Card } from '@chakra-ui/react';
import { Line } from 'react-chartjs-2';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


const VendorWorkingPerformance = () => {
    
    const totalTarget = 1000;
    const achieved = 750;
    const remaining = totalTarget - achieved;
    const achievementPercentage = (achieved / totalTarget) * 100;
  
    const [activeIndex, setActiveIndex] = useState(null);
  
    const targetData = [
      { name: 'Total Target', value: totalTarget },
      { name: 'Achieved', value: achieved },
      { name: 'Remaining', value: remaining },
    ];
  
    const handleClick = (data, index) => {
      setActiveIndex(index === activeIndex ? null : index);
    };

  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Vendor Performance',
        data: [65, 59, 80, 81, 56, 55],
        fill: true,
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };
  const achievementData = [
    { name: 'January', value: 50 },
    { name: 'February', value: 75 },
    { name: 'March', value: 60 },
    // ... add more data ...
  ];
    const incentiveData = [
        { month: 'January', incentive: '$1000' },
        { month: 'February', incentive: '$1200' },
        { month: 'March', incentive: '$1100' },
        // ... add more data ...
    ];
    const holidayData = [
        { date: '2023-08-15', name: 'Independence Day' },
        { date: '2023-12-25', name: 'Christmas' },
        { date: '2023-01-01', name: 'New Year' },
        // ... add more data ...
      ];


  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    // <Box p="4">
    //   <Heading as="h2" size="lg" mb="4">
    //     Vendor Working Performance
    //   </Heading>
    //   <SimpleGrid columns={2} spacing={4}>
    //     <Box>
    //         <Heading as="h3" size="md" mb="2">
    //             Target
    //         </Heading>
    //         <p>Total Target: {totalTarget}</p>
    //         <p>Achieved: {achieved}</p>
    //         <p>Remaining: {remaining}</p>
    //         <Progress value={achievementPercentage} colorScheme="teal" size="sm" mt="2" />
    //     </Box>
    //     <Box>
    //         <Heading as="h3" size="md" mb="2">
    //             Achievement
    //         </Heading>
    //         <BarChart width={500} height={300} data={achievementData}>
    //             <CartesianGrid strokeDasharray="3 3" />
    //             <XAxis dataKey="name" />
    //             <YAxis />
    //             <Tooltip />
    //             <Legend />
    //             <Bar dataKey="value" fill="#8884d8" />
    //         </BarChart>
    //     </Box>
    //     <Box>
    //   <Heading as="h3" size="md" mb="2">
    //     Incentive
    //   </Heading>
    //   <Table variant="simple">
    //     <Thead>
    //       <Tr>
    //         <Th>Month</Th>
    //         <Th>Incentive</Th>
    //       </Tr>
    //     </Thead>
    //     <Tbody>
    //       {incentiveData.map((item, index) => (
    //         <Tr key={index}>
    //           <Td>{item.month}</Td>
    //           <Td>{item.incentive}</Td>
    //         </Tr>
    //       ))}
    //     </Tbody>
    //   </Table>
    // </Box>

    //     <Box>
    //       <Heading as="h3" size="md" mb="2">
    //         Working Performance graph
    //       </Heading>
    //       <Flex justifyContent="center">
    //         <Box w="80%">
    //           <Line data={data} options={options} />
    //         </Box>
    //       </Flex>
    //     </Box>
    //         <Box colSpan={2}>
    //   <Heading as="h3" size="md" mb="2">
    //     Holidays
    //   </Heading>
    //   <Table variant="simple">
    //     <Thead>
    //       <Tr>
    //         <Th>Date</Th>
    //         <Th>Holiday Name</Th>
    //       </Tr>
    //     </Thead>
    //     <Tbody>
    //       {holidayData.map((item, index) => (
    //         <Tr key={index}>
    //           <Td>{item.date}</Td>
    //           <Td>{item.name}</Td>
    //         </Tr>
    //       ))}
    //     </Tbody>
    //   </Table>
    // </Box>
    //   </SimpleGrid>
    // </Box>
    <Box p="4">
    <Heading as="h2" size="lg" mb="4">
      Vendor Working Performance
    </Heading>
    <SimpleGrid columns={2} spacing={4}>
    <Card p="4" boxShadow="md">
      <Heading as="h3" size="md" mb="2">
        Target
      </Heading>
      <SimpleGrid columns={1} spacing={4}>
        <Box>
          <BarChart width={400} height={300} data={targetData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar
              dataKey="value"
              fill="#8884d8"
              onClick={handleClick}
              onMouseLeave={() => setActiveIndex(null)}
            />
          </BarChart>
        </Box>
        {/* {targetData.map((dataPoint, index) => (
          <Box key={index} textAlign="center">
            <p>{dataPoint.name}</p>
            {activeIndex === index && <p>{dataPoint.value}</p>}
          </Box>
        ))} */}
      </SimpleGrid>
    </Card>
      <Card p="4" boxShadow="md">
        <Heading as="h3" size="md" mb="2">
          Achievement
        </Heading>
        <BarChart width={500} height={300} data={achievementData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
      </Card>
      <Card p="4" boxShadow="md">
        <Heading as="h3" size="md" mb="2">
          Incentive
        </Heading>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Month</Th>
              <Th>Incentive</Th>
            </Tr>
          </Thead>
          <Tbody>
            {incentiveData.map((item, index) => (
              <Tr key={index}>
                <Td>{item.month}</Td>
                <Td>{item.incentive}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Card>
      <Card p="4" boxShadow="md">
        <Heading as="h3" size="md" mb="2">
          Working Performance graph
        </Heading>
        <Flex justifyContent="center">
          <Box w="80%">
            <Line data={data} options={options} />
          </Box>
        </Flex>
      </Card>
      <Card p="4" colSpan={2} boxShadow="md">
        <Heading as="h3" size="md" mb="2">
          Holidays
        </Heading>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Date</Th>
              <Th>Holiday Name</Th>
            </Tr>
          </Thead>
          <Tbody>
            {holidayData.map((item, index) => (
              <Tr key={index}>
                <Td>{item.date}</Td>
                <Td>{item.name}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Card>
    </SimpleGrid>
  </Box>
  );
};

export default VendorWorkingPerformance;
