import { createAction } from '../../utils/action-helpers';

export const ADD_USERS = "ADD_USERS";
export const addUsers = createAction(ADD_USERS);

export const ADD_USER = "ADD_USER";
export const addUser = createAction(ADD_USER);

export const REMOVE_USER = "REMOVE_USER";
export const removeUser = createAction(REMOVE_USER);

export const EDIT_USER = "EDIT_USER";
export const editUser = createAction(EDIT_USER);

export const FILTER_USERS = "FILTER_USERS";
export const filterUsers = createAction(FILTER_USERS);

export const BOOKMARK_USER = "BOOKMARK_USER";
export const bookmarkUser = createAction(BOOKMARK_USER);