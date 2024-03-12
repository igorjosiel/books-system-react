import user from '../../images/user.svg';
import bag from '../../images/bag.svg';
import { Icon, Icons } from './styles';

const icons = [user, bag];

function HeaderIcons() {
    return (
        <Icons>
            {icons.map((icon) => (
                <Icon>
                    <img src={icon} alt='Ícone do cabeçalho'></img>
                </Icon>
            ))}
        </Icons>
    );
}

export default HeaderIcons;