import Banner from "../../Components/Banner";
import Dropdown from "../../Components/Dropdown";
import dataAbout from "../../Datas/about.json";
import styled from "styled-components";


const CenteredContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function Apropos() {
    return (
      <div>
        <Banner />
        <CenteredContainer>
          {dataAbout.map((item, index) => (
            <Dropdown key={index} title={item.title} text={item.texte} />
          ))}
        </CenteredContainer>
      </div>
    );
}
      
export default Apropos;
