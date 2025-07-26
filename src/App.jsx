import Banner from "./components/Banner";
import Bmwm5 from "./components/Bmwm5";
import Bmwww from "./components/Bmwww";
import Dorilar from "./components/Dorilar";
import Futtr from "./components/Futtr";
import Havla from "./components/Havla";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Nonushtalar from "./components/Nonushtalar";
import Otasi from "./components/Otasi";
import Popangarda from "./components/Popangarda";
import Recipiec from "./components/Recipiec";
import Store from "./components/Store";
import Theend from "./components/theend";

export default function App() {
  return (
    <div>
      <Otasi>
        <Navbar />
        <Header />
      </Otasi>
      <Bmwww>
        <Banner/>
        <Dorilar/>
      </Bmwww>
     <Popangarda/>
     <Store/>
    <Havla/>
    <Bmwm5/>
    <Recipiec/>
    <Nonushtalar/>
    <Futtr/>
    <Theend/>
    </div>
  );
}
