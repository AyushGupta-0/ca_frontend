import Home4 from '../components/TradeMark/Home4'
import Home5 from "../components/TradeMark/Home5"
import Home6 from "../components/TradeMark/Home6"
import Customer from "../components/Customers";
import { Box } from '@chakra-ui/react';


export default function TradeMark() {

    window.addEventListener("scroll", function () {
        window.scroll(0, window.pageYOffset)
    }, false);
    return (
        <>
            <Box mb="100px" mt="50px">
                <Home5></Home5>
            </Box>
            <Home4></Home4>
            <Customer></Customer>
            <Home6/>
        </>
    )
}
