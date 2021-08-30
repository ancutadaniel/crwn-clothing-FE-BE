import { createSelector } from 'reselect';

const selectUser = (state) => state.root_user_reducer;

export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser
);
