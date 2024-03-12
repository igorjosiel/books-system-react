import { Options, Option } from "./styles";

const optionsText = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE'];

function HeaderOptions() {
    return (
        <Options>
            {optionsText.map( (text) => (
                <Option><p>{text}</p></Option>
            ))}
      </Options>
    );
}

export default HeaderOptions;