import Slider from "../../Components/Slider";
import Host from "../../Components/Host/host";
import TitleLoc from "../../Components/TitleHouse";
import Tags from "../../Components/Tags";
import InfoDropdown from "../../Components/Infohouse";
import { useParams } from "react-router-dom";
import dataLogements from "../../Datas/logementlist.json";

function HouseForm() {
  const { id } = useParams();
  const logement = dataLogements.find((item) => item.id.toString() === id);

  if (!logement) {
    return <h1>404 - Logement non trouvé</h1>;
  }

  return (
    <div>
      <Slider  logement={logement}/>
      <TitleLoc logement={logement} />
      <Host  logement={logement}/>
      <Tags  logement={logement}/>
      <InfoDropdown logement={logement}/>
    </div>
  );
}

export default HouseForm;

