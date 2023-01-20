import NavBar from "./scenes/Navbar";
import DotGroup from "./scenes/DotGroup";
import Landing from "./scenes/Landing";
import { useEffect, useState } from "react";
import linearGradient from "./components/LineGradient"
import useMediaQuery from "./hooks/useMediaQuery";

function App() {
  const [selectedPage, setSelectedPage] =
    useState("home"); /*Detemine what part of nav. we are at  */
  const [isTopOfPage, setIsTopOfPage] = useState(true); /* Determine  */
  const isAboveMediumScreens = useMediaQuery(
    "(min-width: 1060px)"
  ); /*Determine if min width is > or < 1060 */

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) setIsTopOfPage(true);
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-deep-blue">
      <NavBar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <div className="w-5/6 mx-auto md: h-full">
        {/** Nav Scrolling Dots*/}
        {isAboveMediumScreens && (
          <DotGroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}
        <Landing setSelectedPage={setSelectedPage} />
      </div>
      <linearGradient></linearGradient>
    </div>
  );
}

export default App;
