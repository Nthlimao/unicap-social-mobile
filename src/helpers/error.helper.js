export const getErrorGraphql = (error) => {
    const graphQLErrors = error.graphQLErrors;

    for (let i = 0; i < graphQLErrors.length; i++) {
        const element = graphQLErrors[i];
        return element.message;
    }

}