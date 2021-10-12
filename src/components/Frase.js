
import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const ContenedorFrase = styled.div`
padding: 2rem;
border-radius: .5rem;
background-color: rgb(255,255,255,0.25);
width: 350px;
height: 200px;
position: fixed;
top: 6.8rem;

h1 {
    font-size: 1.3rem;
    margin-bottom: 0.3rem;
    font-weight: bold;
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
}
p {
    font-size: 1rem;
    font-weight: bold;
    text-align: right;
    color: #c0c0c0;
}
`;

const Frase = ({frase}) => {
    const { quote, author } = frase;
    return (
    <ContenedorFrase>
        <h1>{quote}</h1>
        <p>- {author}</p>
    </ContenedorFrase>
    );
}

Frase.propTypes = {
    frase: PropTypes.object.isRequired
}
export default Frase;