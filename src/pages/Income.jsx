import Home4 from '../components/Tax/Home4'
import Home5 from "../components/Tax/Home5"
import Home6 from "../components/Tax/Home6"
import Home12 from "../components/Home12"
import Customer from "../components/Customers";


export default function Income() {
    window.addEventListener("scroll", function () {
        window.scroll(0, window.pageYOffset)
    }, false);

    return (
        <>
            <Home12></Home12>
            <Home4></Home4>
            <Home5/>
            <Customer/>
            <Home6></Home6>
        </>
    )
}
