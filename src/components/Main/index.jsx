import { MainComponent } from './styles';
import krhys from '../../assets/khrys.png';

const Main = () => {
  return (
    <MainComponent>
      <img src={krhys} alt="Foto-do-gostoso" />
      <h1>Arraiá do Khrys</h1>
      <p>Local: Minha casa ou na sua?</p>
    </MainComponent>
  );
};

export default Main;
