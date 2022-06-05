import { FooterComponent } from './styles';
import logoDev from '../../assets/logo-megadev.png';

const Footer = () => {
  return (
    <FooterComponent>
      <img src={logoDev} />
      <p>MegaD3v - 2021 - Present</p>
    </FooterComponent>
  );
};

export default Footer;
