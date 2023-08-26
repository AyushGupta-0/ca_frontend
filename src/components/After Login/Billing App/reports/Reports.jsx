import React, { useState } from 'react'
import Company_name from '../Company_name/Company_name'
import Slidebar from '../Slidebar/Slidebar'
import { Box, Flex, Heading, Table, TableContainer, Tbody, Td, Th, Thead, Tr, Button, Input, InputRightAddon, InputGroup, Select, Text } from '@chakra-ui/react'
import { ChevronDownIcon, SearchIcon } from '@chakra-ui/icons'
import { useNavigate } from 'react-router-dom'
import SaleReports from './SaleReports'
import PurchaseReport from './PurchaseReport'
import GSTR_1 from './GSTR_1'


const Company = {
    name: "Company Name"
}
const tableData = [
    {
        reportNo:'1',
        customerName:'aa',
        amount:50,
        balance:20,
        date:'25-08-2023'
    },
    {
        reportNo:'2',
        customerName:'bb',
        amount:40,
        balance:20,
        date:'23-08-2023'
    },
    {
        reportNo:'3',
        customerName:'cc',
        amount:40,
        balance:20,
        date:'22-08-2023'
    },
    {
        reportNo:'4',
        customerName:'zz',
        amount:70,
        balance:20,
        date:'21-08-2023'
    },
    
]

const Reports = () => {
    const navigate = useNavigate();

    const [selectedReportType, setSelectedReportType] = useState('SALE_REPORT');

    const handleReportType = (e) => {
        e.preventDefault();
        setSelectedReportType(e.target.value)
    }


    const handleRowClick = (reportNo) => {
        navigate('/individual-report')
    }

    switch(selectedReportType){
        case 'SALE_REPORT':
            <SaleReports/>
        case 'PURCHASE_REPORT':
            <PurchaseReport/>
        case 'GSTR-1':
            <GSTR_1/>
    }
    return (
        <>
            <Company_name company_name={Company.name}/>
            <Flex>
                <Slidebar/>
                <Box Flex='1' padding='15px'
                >
                    <Flex justifyContent='space-between' alignItems='center'
                    width='300px'
                    margin='auto'
                    >
                        <Heading size='md'>Reports</Heading>
                        <Select placeholder='Select Report Type' 
                        value={selectedReportType}
                        onChange={handleReportType}
                        size='sm'
                        ml='4'
                        width='250px'
                        >
                            <optgroup label='Transaction'>
                                <option value='SALE_REPORT'>Sale Report</option>
                                <option value='PURCHASE_REPORT'>Purchase Report</option>
                                <option value='DAY_BOOK'>Day Book</option>
                                <option value='ALL_TRANSACTION'>All Transaction</option>
                                <option value='BILLWISE_PROFIT'>Bill Wise Profit</option>
                                <option value='PROFIT_LOSS'>Profit & Loss</option>
                                <option value='CASHFLOW'>Cashflow</option>
                                <option value='BALANCE_SHEET'>Balance Sheet</option>
                            </optgroup>
                            <optgroup label='GST Reports'>
                                <option value='GSTR-1'>GSTR-1</option>
                                <option value='GSTR-2'>GSTR-2</option>
                                <option value='GSTR-3B'>GSTR-3B</option>
                                <option value='GST_TRANSACTION_REPORT'>GST Transaction Report</option>
                                <option value='GSTR-9'>GSTR-9</option>
                                <option value='SALE_SUMMARY_BY_HSN'>Sale Summary by HSN</option>
                            </optgroup>
                            <optgroup label='Party Reports'>
                                <option>Party Statement</option>
                                <option>Party Wise Profit & Loss</option>
                                <option>All Parties Report</option>
                                <option>Party Report by Items</option>
                                <option>Sale/Purchase by Party</option>
                            </optgroup>
                            <optgroup label='Item/Stock Reports'>
                                <option>Stock Summary Report</option>
                                <option>Item Report by Party</option>
                                <option>Item Wise Profit & Loss</option>
                                <option>Low Stock Summary Report</option>
                                <option>Item Detail Report</option>
                                <option>Stock Detail Report</option>
                                <option>Sale/Purchase by Item Category</option>
                                <option>Stock Summary by Item Category</option>
                                <option>Item Batch Report</option>
                            </optgroup>
                            <optgroup label='Business Status'>
                                <option>Bank Statement</option>
                                <option>Discount Report</option>
                            </optgroup>
                            <optgroup label='Taxes'>
                                <option>GST Report</option>
                                <option>GST Rate Report</option>
                                <option>Form No. 27EQ</option>
                                <option>TCS Recievable</option>
                            </optgroup>
                        </Select>
                    </Flex>

                </Box>
            </Flex>
        </>
    )
}

export default Reports