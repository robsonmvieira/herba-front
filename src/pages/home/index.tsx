import {
  Containerimg,
  ContainerTela,
  LabelLifeAdmin,
  LabelSistema,
  ContainerTelaLabel,
} from "./styles";

const Home = () => {
  return (
    <>
      <Containerimg>
        <ContainerTela>
          <ContainerTelaLabel>
            <LabelLifeAdmin></LabelLifeAdmin>
            <LabelLifeAdmin>Life admin</LabelLifeAdmin>
            <LabelSistema>
              Gerencie suas vendas e o estoque dos seus Produtos Herba-life de
              uma maneira prática, segura e de onde estiver.
            </LabelSistema>
            <LabelSistema>
              Melhore o relacionamento com seus clientes e aumente seu poder de
              conversão de vendas com dados que lhe apoiam nas decisões correta.
            </LabelSistema>
          </ContainerTelaLabel>
        </ContainerTela>
      </Containerimg>
    </>
  );
};
export default Home;
