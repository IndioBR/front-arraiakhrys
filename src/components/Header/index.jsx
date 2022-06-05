import { HeaderComponent } from './styles';

const Header = () => {
  return (
    <HeaderComponent>
      <img src="https://www.petz.com.br/blog/wp-content/uploads/2020/08/cat-sitter-felino-1280x720.jpg" />
      <div>
        <span>Início</span>
        <span>Sobre</span>
        <span>Login</span>
      </div>
    </HeaderComponent>
  );
};

export default Header;
