import {
  ContainerListLarge,
  ItemContainer,
  ContainerHeaderList,
} from "./styles";
import { Table } from "reactstrap";

const TableProducts = () => {
  return (
    <ItemContainer>
      <ContainerListLarge>
        <Table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Preço</th>
              <th>Quantidade</th>
              <th>Desc</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Smart Bar</td>
              <td>R$15,00</td>
              <td>4</td>
              <td>5%</td>
              <td>R$55,00</td>
            </tr>
            <tr>
              <td>Smart Bar</td>
              <td>R$15,00</td>
              <td>4</td>
              <td>5%</td>
              <td>R$55,00</td>
            </tr>
            <tr>
              <td>Smart Bar</td>
              <td>R$15,00</td>
              <td>4</td>
              <td>5%</td>
              <td>R$55,00</td>
            </tr>
          </tbody>
        </Table>
      </ContainerListLarge>
    </ItemContainer>
  );
};

export default TableProducts;
