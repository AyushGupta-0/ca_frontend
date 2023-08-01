import Home4 from '../components/Tax/Home4'
import Home5 from "../components/Tax/Home5"
import Home6 from "../components/Tax/Home6"
import Customer from "../components/Customers";
import { Box } from '@chakra-ui/react';


export default function Tax() {
    window.addEventListener("scroll", function () {
        window.scroll(0, window.pageYOffset)
    }, false);

    return (
        <>
            <Box
                maxWidth={"99vw"}
                overflowX="hidden"
            >
                <Home4></Home4>
                <Box m="100px">
                    <Customer></Customer>
                </Box>
                <Home5></Home5>
            </Box>
            <Home6 />
        </>
    );
};
