import gql from 'graphql-tag';

const LOGIN = gql`
    mutation Login($matricula: String!, $digito: String!, $senha: String!) {
        login(matricula: $matricula, digito: $digito, senha: $senha) {
            session
            token
            student {
                name
                matriculation
                digit
                email
            }
        }
    }
`;

export default {
    LOGIN
}