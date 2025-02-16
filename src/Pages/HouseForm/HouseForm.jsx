import Slider from "../../Components/Slider";
import Host from "../../Components/Host/host";
import TitleLoc from "../../Components/TitleHouse";
import Tags from "../../Components/Tags";
import InfoDropdown from "../../Components/Infohouse";
import { useParams, Navigate } from "react-router-dom";
import dataLogements from "../../Datas/logementlist.json";
import Rating from "../../Components/rating";


function HouseForm() {
  const { id } = useParams();
  const logement = dataLogements.find((item) => item.id.toString() === id);

  if (!logement) {
    return <Navigate to="/error" />;
  }

  return (
    <div>
      <Slider  logement={logement}/>
      <TitleLoc logement={logement} />
      <Host  logement={logement}/>
      <Rating rating={logement.rating.toString()} />
      <Tags  logement={logement}/>
      <InfoDropdown logement={logement}/>
      
    </div>
  );
}

export default HouseForm;

