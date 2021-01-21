import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import Frase from "./components/Frase";

const Contenedor = styled.div`
    display: flex;
    align-items: center;
    padding-top: 5rem;
    flex-direction: column;
`;

const Boton = styled.button`
    background: -webkit-linear-gradient(
        top left,
        #007d35 0%,
        #007d35 40%,
        #0f574e 100%
    );
    background-size: 300px;
    font-family: Arial, Helvetica, sans-serif;
    color: #fff;
    margin-top: 3rem;
    padding: 1rem 3rem;
    font-size: 2rem;
    border: 2px solid #000;
    cursor: pointer;
    transition: background-size 0.8s ease;

    &:hover {
        background-size: 400px;
    }
`;

function App() {
    const [frase, guardarFrase] = useState({});

    const consultarAPI = async _ => {
        const api = await fetch(
            "https://breaking-bad-quotes.herokuapp.com/v1/quotes"
        );
        const res = await api.json();
        guardarFrase(res[0]);
    };

    useEffect(() => {
        consultarAPI();
    }, []);

    return (
        <Contenedor>
            <Frase frase={frase} />
            <Boton onClick={consultarAPI}>Obtener Frase</Boton>
        </Contenedor>
    );
}

export default App;
