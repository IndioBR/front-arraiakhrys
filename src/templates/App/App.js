import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Main from '../../components/Main';
import Login from '../../components/Modals/LoginModal';
import { SingUp } from '../../components/Modals/SingUpModal';
import { AppComponent } from './styles';

function Home() {
  return (
    <AppComponent>
      <Header />
      <Main />
      <Login />
      <Footer />
    </AppComponent>
  );
}

export default Home;
