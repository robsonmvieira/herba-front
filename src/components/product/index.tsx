import {
  ContainerIconsInfo,
  ItemContainer,
  ContainerItemInfo,
  InputIconInfo,
  ContainerBtn,
} from "./styles";

const Product = () => {
  return (
    <ItemContainer>
      <ContainerItemInfo>
        <h6>Barra de cereal</h6>
        <span style={{ marginBottom: 8, marginLeft: 10 }}>Preço R$10,00</span>
      </ContainerItemInfo>
      <ContainerIconsInfo>
        <InputIconInfo />
        <ContainerBtn>
          <img src="/image/compra.svg" alt="" />
        </ContainerBtn>
      </ContainerIconsInfo>
    </ItemContainer>
  );
};

export default Product;
