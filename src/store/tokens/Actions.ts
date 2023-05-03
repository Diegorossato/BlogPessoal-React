//Tipo Action
export type Action = {type: "ADD_TOKEN"; payload:string};

//model para adicionar token
//função que recebe um token(string), e a função é do tipo Action,
//ou seja, precisa de um typo e um payload criado acima.
export const addToken = (token:string):Action=>({
    type:"ADD_TOKEN",
    payload: token,
});