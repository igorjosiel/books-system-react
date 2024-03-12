import logo from '../../images/logo.svg';
import { LogoContainer, LogoImage } from './styles';

function Logo() {
    return (
        <LogoContainer>
            <LogoImage src={logo} alt='logo' />
            <p><strong>Alura</strong>Books</p>
       </LogoContainer>
    );
}

export default Logo;