import styled from "@emotion/styled";

const ContenedorFrase = styled.div`
    background-color: #fff;
    padding: 3rem;
    border-radius: 0.5rem;
    max-width: 800px;

    @media (min-width: 992px) {
        margin-top: 10rem;
    }

    h1 {
        font-family: Arial, Helvetica, sans-serif;
        text-align: center;
        position: relative;
        padding-left: 4rem;

        &::before {
            content: open-quote;
            font-size: 10rem;
            color: #000;
            position: absolute;
            left: -1rem;
            top: -1rem;
        }
    }

    p {
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: 1.4rem;
        text-align: right;
        color: #666;
        margin-top: 2rem;
        font-weight: bold;
    }
`;

const Frase = ({ frase }) => {
    return (
        <ContenedorFrase>
            <h1>{frase.quote}</h1>
            <p>- {frase.author}</p>
        </ContenedorFrase>
    );
};

export default Frase;
