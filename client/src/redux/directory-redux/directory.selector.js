import { createSelector } from 'reselect';

const directorySelector = (state) => state.root_directory_reducer;

export const selectSections = createSelector(
  [directorySelector],
  (directory) => directory.sections
);
