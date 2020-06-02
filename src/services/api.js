import callApi from '../utils/call-api';

export const getUsers = () => callApi("/users" , { method : "GET"});
export const postUser = body => callApi("/users" , { method: "POST" , body});
export const deleteCard = id => callApi (` ` , { method: "DELETE"});
export const updateCard = (id , body) => callApi('' , { method: "PUT" , body: { id, body }});