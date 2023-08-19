import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Flex,
  HStack,
  Image,
  Input,
  Select,
  Text,
  VStack,
  Wrap,
  Heading,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  AspectRatio,
  useDisclosure,
  FormControl,
  FormLabel,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Slidebar from "../Slidebar/Slidebar";
import Company_name from "../Company_name/Company_name";
import remove from "../../../assets/remove.png";
import print4 from "../../../assets/print4.png";
import { useDispatch, useSelector } from "react-redux";
import {
  getStockAction,
  postStockAction,
} from "../../../../Redux/Stocks/stock.action";
const Items = () => {
  const Company = {
    name: "Company Name",
  };
  const Items = [
    {
      id: 1,
      Name: "name",
      stock: 100,
      price: 1000,
      tax: 0,
      total: 1000,
      buyprice: 200,
      sellprice: 300,
    },
  ];
  const modal1 = useDisclosure();
  const token = localStorage.getItem("token");
  const { firmId } = useSelector((store) => store.FirmRegistation);
  const { getStockData } = useSelector((store) => store.stockReducer);
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    name: "",
    description: "",
    category: "",
    brand: "",
    stockQuantity: "",
    price: "",
    cost: "",
    supplier: "",
    reorderThreshold: "",
    expiryDate: "",
    gstRate: "",
    firmId: `${firmId}`,
  });

  const handleChangeItems = (e) => {
    e.preventDefault();

    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleItemsAdd = () => {
    dispatch(postStockAction(form, token));
  };

  useEffect(() => {
    dispatch(getStockAction(token, firmId));
  }, [firmId]);

  console.log("stock ka get", getStockData);
  return (
    <>
      <Company_name company_name={Company.name} />

      <Flex>
        <Slidebar />
        <Box margin={"auto"} marginTop="20px" overflow={"hidden"} width="80%">
          <Button
            backgroundColor="blue.400"
            margin={"10px"}
            onClick={modal1.onOpen}
            px="4"
          >
            Add Items +{" "}
          </Button>
          <TableContainer width="100%">
            <Table width="100%">
              <Thead>
                <Tr>
                  <Th>Name</Th>
                  <Th>Category</Th>
                  <Th>Brand</Th>
                  <Th> Stock Qty</Th>
                  <Th>Price</Th>
                  <Th>Cost</Th>
                  <Th>Supplier</Th>
                  <Th>reorderThreshold</Th>
                  <Th>expiryDate</Th>
                  <Th>gstRate</Th>
                  <Th>description</Th>
                </Tr>
              </Thead>
              <Tbody>
                {getStockData?.map((data) => (
                  <Tr key={data._id}>
                    <Td>{data.name}</Td>
                    <Td>{data.category}</Td>
                    <Td>{data.brand}</Td>
                    <Td>{data.stockQuantity}</Td>
                    <Td>{data.price}</Td>
                    <Td>{data.cost}</Td>
                    <Td>{data.supplier}</Td>
                    <Td>{data.reorderThreshold}</Td>
                    <Td>{data.expiryDate}</Td>
                    <Td>{data.description}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
        <Modal isOpen={modal1.isOpen} onClose={modal1.onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Add New Item</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <FormControl margin={"10px"}>
                <FormLabel>Item Name :</FormLabel>
                <Input
                  type="text"
                  placeholder="Item Name"
                  value={form.name}
                  name="name"
                  onChange={handleChangeItems}
                />
              </FormControl>
              <FormControl margin={"10px"}>
                <FormLabel>Category :</FormLabel>
                <Input
                  type="text"
                  placeholder="Item Category"
                  value={form.category}
                  name="category"
                  onChange={handleChangeItems}
                />
              </FormControl>
              <FormControl margin={"10px"}>
                <FormLabel>Brand :</FormLabel>
                <Input
                  type="text"
                  placeholder="Brand"
                  value={form.brand}
                  name="brand"
                  onChange={handleChangeItems}
                />
              </FormControl>
              <FormControl margin={"10px"}>
                <FormLabel>Stock Quantity :</FormLabel>
                <Input
                  type="number"
                  placeholder="Stock Quantity"
                  value={form.stockQuantity}
                  name="stockQuantity"
                  onChange={handleChangeItems}
                />
              </FormControl>
              <FormControl margin={"10px"}>
                <FormLabel>Selling Price :</FormLabel>
                <Input
                  type="number"
                  placeholder="Selling Price"
                  value={form.price}
                  name="price"
                  onChange={handleChangeItems}
                />
              </FormControl>
              <FormControl margin={"10px"}>
                <FormLabel>Cost Price :</FormLabel>
                <Input
                  type="number"
                  placeholder="Cost Price"
                  value={form.cost}
                  name="cost"
                  onChange={handleChangeItems}
                />
              </FormControl>
              <FormControl margin={"10px"}>
                <FormLabel>Supplier Name :</FormLabel>
                <Input
                  type="text"
                  placeholder="Supplier Name"
                  value={form.supplier}
                  name="supplier"
                  onChange={handleChangeItems}
                />
              </FormControl>
              <FormControl margin={"10px"}>
                <FormLabel>reorderThreshold :</FormLabel>
                <Input
                  type="number"
                  placeholder="reorderThreshold"
                  value={form.reorderThreshold}
                  name="reorderThreshold"
                  onChange={handleChangeItems}
                />
              </FormControl>
              <FormControl margin={"10px"}>
                <FormLabel>expiryDate:</FormLabel>
                <Input
                  type="date"
                  placeholder="expiryDate"
                  value={form.expiryDate}
                  name="expiryDate"
                  onChange={handleChangeItems}
                />
              </FormControl>
              <FormControl margin={"10px"}>
                <FormLabel>gstRate:</FormLabel>
                <Select
                  type="number"
                  placeholder="select gst Rate"
                  onChange={handleChangeItems}
                >
                  <option value={0}>0%</option>
                  <option value={5}>5%</option>
                  <option value={12}>12%</option>
                  <option value={18}>18%</option>
                  <option value={28}>28%</option>
                </Select>
              </FormControl>
              <FormControl margin={"10px"}>
                <FormLabel>description :</FormLabel>
                <Input
                  type="text"
                  placeholder="description"
                  value={form.description}
                  name="description"
                  onChange={handleChangeItems}
                />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={modal1.onClose}>
                Close
              </Button>
              <Button colorScheme="green" onClick={handleItemsAdd}>
                Add
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Flex>
    </>
  );
};

export default Items;
