import { ADD_USERS, ADD_USER, SET_USER , REMOVE_USER, EDIT_USER, FILTER_USERS, BOOKMARK_USER } from '../actions';


const initialState = {
  users: [],
  filteredUsers: [],
  bookmarkedUsers: [],
  currentUser: {
    isAuth: false,
  }
};

function setUser(state, action) {
  const match = state.users.find(
    (user) =>
    user.username === action.payload.username && 
    user.password === action.payload.password
  );
    const user = match ? match : null;


    return {
      ...state,
      currentUser: {
        isAuth: Boolean(user),
        ...user,
      },
    };

}

function addUsers(state, action) {
  return {
    ...state,
    users: [...state.users, ...action.payload],
    filteredUsers: [...state.filteredUsers, ...action.payload]
  };
}

function addUser(state, action) {
  return {
    ...state,
    users: [...state.users, action.payload],
    filteredUsers: [...state.filteredUsers, action.payload]
  };
}

function removeUser(state, action) {
  return {
    ...state,
    users: [
      ...state.users.slice(0, action.payload),
      ...state.users.slice(action.payload + 1)
    ],
    filteredUsers: [
      ...state.filteredUsers.slice(0, action.payload),
      ...state.filteredUsers.slice(action.payload + 1)
    ],
  };
}

function editUser(state, action) {
  const index = state.users.findIndex(c => c.id === action.payload.id);
  const indexF = state.filteredUsers.findIndex(c => c.id === action.payload.id);

  return {
    ...state,
    users: [
      ...state.users.slice(0, index),
      action.payload,
      ...state.users.slice(index + 1)
    ],
    filteredUsers: [
      ...state.filteredUsers.slice(0, indexF),
      action.payload,
      ...state.filteredUsers.slice(indexF + 1)
    ],
  };
}

function filterUsers(state, action) {
  return Object.assign({}, state, {
    filteredUsers: state.users.filter(
      user =>
        user.name.toLowerCase().search(action.payload.toLowerCase()) !== -1
    )
  });
}

function bookmarkUser(state, action) {
  if (state.bookmarkedUsers.some(card => card.id === action.payload)) {
    return {
      ...state,
      bookmarkedUsers: state.bookmarkedUsers.filter(card => card.id !== action.payload)
    };
  } else {
    return {
      ...state,
      bookmarkedUsers: state.bookmarkedUsers.concat(state.users.find(user=> user.id === action.payload)),
    };
  }
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_USERS:
      return addUsers(state, action);

    case ADD_USER:
      return addUser(state, action);

    case SET_USER:
      return setUser(state,action);
    
    case REMOVE_USER:
      return removeUser(state, action);
    
    case EDIT_USER:
      return editUser(state, action);

    case FILTER_USERS:
      return filterUsers(state, action);

    case BOOKMARK_USER:
      return bookmarkUser(state, action);

    default:
      return state;
  }
}
