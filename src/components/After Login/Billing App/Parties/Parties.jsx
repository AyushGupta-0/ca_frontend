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
import {
    deletePartiesAction,
  getPartiesAction,
  postPartiesAction,
  setPartyId,
} from "../../../../Redux/Parties/parties.action";
import { useDispatch, useSelector } from "react-redux";

const Parties = () => {
  const Company = {
    name: "Company Name",
  };
  const modal1 = useDisclosure();

  const token = localStorage.getItem("token");
  const { firmId } = useSelector((store) => store.FirmRegistation);
  const dispatch = useDispatch();
  const { getPartiesData } = useSelector((store) => store.partiesReducer);

  const [form, setForm] = useState({
    partyName: "",
    GSTNo: "",
    phoneNumber: "",
    GSTType: "",
    state: "",
    email: "",
    billingAddress: "",
    shippingAddress: "",
  });

  const handleChangeParty = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

  };

  const handleAddParty = () => {
    dispatch(postPartiesAction(form, token, firmId));
    modal1.onClose();
  };


//   const removeParty=(token,id,firmId)=>{
//       dispatch(deletePartiesAction(token,id,firmId))
//   }

  useEffect(() => {
    dispatch(getPartiesAction(token, firmId));
  }, [firmId]);

  console.log("I AM HERE",getPartiesData);

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
            Add Parties +
          </Button>
          <TableContainer>
            <Table>
              <Thead>
                <Tr>
                  <Th isNumeric>Party Id</Th>
                  <Th>Party Name</Th>
                  <Th>GSTIN</Th>
                  <Th isNumeric>Phone No.</Th>
                  <Th isEmail>Email</Th>
                  <Th>Billing Address</Th>
                  <Th>Shipping Address</Th>
                  {/* <Th isNumeric>Amount</Th> */}
                  {/* <Th>Print</Th> */}
                  {/* <Th>Delete</Th> */}
                </Tr>
              </Thead>
              <Tbody>
                {getPartiesData?.map((data) => (
                  <Tr key={data._id}>
                    <Td isNumeric>{data._id}</Td>
                    <Td>{data.partyName}</Td>
                    <Td>{data.GSTNo}</Td>
                    <Td isNumeric>{data.phoneNumber}</Td>
                    <Td isEmail>{data.email}</Td>
                    <Td>{data.billingAddress}</Td>
                    <Td>{data.shippingAddress}</Td>
                    {/* <Td><Image src={print4} width={"20px"} borderRadius={"50%"}></Image></Td> */}
                    {/* <Td>
                      <Image
                        src={remove}
                        width={"20px"}
                        borderRadius={"50%"}
                        onClick={()=>removeParty(token,data._id,firmId)}
                      ></Image>
                    </Td> */}
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
        <Modal isOpen={modal1.isOpen} onClose={modal1.onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Add New Party</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <FormControl margin={"10px"}>
                <FormLabel>Party Name :</FormLabel>
                <Input
                  type="text"
                  placeholder="Party Name"
                  value={form.partyName}
                  name="partyName"
                  onChange={handleChangeParty}
                />
              </FormControl>

              <FormControl margin={"10px"}>
                <FormLabel>GST NO :</FormLabel>
                <Input
                  type="text"
                  placeholder="GST NO"
                  value={form.GSTNo}
                  name="GSTNo"
                  onChange={handleChangeParty}
                />
              </FormControl>

              <FormControl margin={"10px"}>
                <FormLabel>Phone Number :</FormLabel>
                <Input
                  type="number"
                  placeholder="Phone Number "
                  value={form.phoneNumber}
                  name="phoneNumber"
                  onChange={handleChangeParty}
                />
              </FormControl>

              <FormControl margin={"10px"}>
                <FormLabel>GST Type :</FormLabel>
                <Select
                  placeholder="GST Type"
                  name="GSTType"
                  onChange={handleChangeParty}
                >
                  <option value="c_gst">cgst</option>
                  <option value="s_gst">sgst</option>
                </Select>
              </FormControl>

              <FormControl margin={"10px"}>
                <FormLabel>State :</FormLabel>
                <Input
                  type="text"
                  placeholder="State"
                  value={form.state}
                  name="state"
                  onChange={handleChangeParty}
                />
              </FormControl>

              <FormControl margin={"10px"}>
                <FormLabel>Email :</FormLabel>
                <Input
                  type="email"
                  placeholder="Email"
                  value={form.email}
                  name="email"
                  onChange={handleChangeParty}
                />
              </FormControl>

              <FormControl margin={"10px"}>
                <FormLabel>Billing Address:</FormLabel>
                <Input
                  type="text"
                  placeholder="Billing Address"
                  value={form.billingAddress}
                  name="billingAddress"
                  onChange={handleChangeParty}
                />
              </FormControl>

              <FormControl margin={"10px"}>
                <FormLabel>Shipping Address :</FormLabel>
                <Input
                  type="text"
                  placeholder="Shipping Address"
                  value={form.shippingAddress}
                  name="shippingAddress"
                  onChange={handleChangeParty}
                />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={modal1.onClose}>
                Close
              </Button>
              <Button
                colorScheme="green"
                onClick={handleAddParty}
                disabled={form.partyName==""}
              >
                Add
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Flex>
    </>
  );
};

export default Parties;
