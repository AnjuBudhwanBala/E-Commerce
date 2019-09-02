//for redux memoization
import { createSelector } from 'reselect';

//input component
const selectUser = state => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  user => user.currentUser
);
