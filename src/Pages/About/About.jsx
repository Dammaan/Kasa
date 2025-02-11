import Banner from "../../Components/Banner";
import Dropdown from "../../Components/Dropdown";
import dataAbout from "../../Datas/about.json";


function Apropos() {
    return (
     <div>
        <Banner />
        <div>
      {dataAbout.map((item, index) => (
        <Dropdown key={index} title={item.title} text={item.texte} />
      ))}
    </div>
     </div>
    )
  }
      
  export default Apropos;