import callApi from '../utils/call-api';

export const getUsers = () => callApi("/users" , { method : "GET"});
export const postUser = body => callApi("/users" , { method: "POST" , body});
export const deleteUser = id => callApi (` ` , { method: "DELETE"});
export const updateUser = (body,id) => callApi(`/users/${id}`, {method: "PUT" ,body});