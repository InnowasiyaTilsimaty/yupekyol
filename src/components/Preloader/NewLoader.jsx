import styled from "styled-components";
import loaderImg from "../../assets/img/favicon.png"

const NewLoader = () => {
  return (
    <NewLoaderStyles>
      <div className="loaderImg">
        <img src={loaderImg} alt="" />
      </div>
      <div className="loaderText">
      Ýüpek Ýol Harytlary
      </div>
    </NewLoaderStyles>
  );
};

export default NewLoader;

const NewLoaderStyles = styled.div`
  display: flex;
  align-items: center;
    .loaderImg{
      margin-right: 20px;
      img{
        width: 100px;
      }
    }
   
  
`;
