import styled from "styled-components";

export const Title = styled.h2`
    width: 100%;
    padding: 30px 0;
    background-color: #FFF;
    color: ${({ color }) => color || '#000'};
    font-size: ${({ fontSize }) => fontSize || '18px'};
    text-align: ${({ align }) => align || 'center'};
    margin: 0;
`;