import NavBar from "./scenes/Navbar";
import {useState} from "react";
import useMediaQuery from "./hooks/useMediaQuery";

function App() {
const [selectedPage, setSelectedPage] = useState('home'); /*Detemine what part of nav. we are at  */
const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)"); /*Determine if min width is > or < 1060 */
return <div className="app bg-deep-blue">
  <NavBar
    selectedPage={selectedPage}
    setSelectedPage={setSelectedPage}
  />
</div>;
}

export default App;
