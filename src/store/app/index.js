import {createSlice, createEntityAdapter} from '@reduxjs/toolkit';

export const appAdapter = createEntityAdapter();

const initialState = appAdapter.getInitialState({
  errors: '',
  response: {},
  appState: '',
  isPendingAnyRequest: false,
  currentScreenName: 'Entrance',
  getCurrentNavigationRoutes: [{name: 'Entrance'}],

  //we will show verification screen
  //if it screen was available when customer sent it back
  currentVerificationScreenStatus: false,
  currentVerificationScreenParams: {},

  //to display some updates details
  lastVersionOfTheApplication: 'start',
  isVersionHistoryModalOpen: false,

  anUnKnownErrorOccoured: false,
});

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    clearErrors(state, action) {
      state.errors = [];
      state.response = {};
    },
    setApplicationState(state, action) {
      state.appState = action.payload;
    },
    setErrors(state, action) {
      if (typeof action.payload?.data?.messages == 'object') {
        state.errors = Object.values(action.payload.data.messages);
      } else {
        state.errors = action.payload?.data?.messages;
      }
      state.response = action.payload;
    },
    setIsPendingAnyRequest(state, action) {
      state.isPendingAnyRequest = action.payload;
    },

    setCurrentVerificationScreenStatus(state, action) {
      state.currentVerificationScreenStatus = action.payload;
    },
    setCurrentVerificationScreenParams(state, action) {
      state.currentVerificationScreenParams = action.payload;
    },
    setCurrentScreenName(state, action) {
      state.currentScreenName = action.payload;
    },
    setCurrentNavigationRoutes(state, action) {
      console.log('action.payload-->', action.payload);
      state.getCurrentNavigationRoutes = action.payload;
    },

    setLastVersionOfTheApplication(state, action) {
      state.lastVersionOfTheApplication = action.payload;
    },
    setIsVersionHistoryModalOpen(state, action) {
      state.isVersionHistoryModalOpen = action.payload;
    },
    setAnUnKnownErrorOccoured(state, action) {
      state.anUnKnownErrorOccoured = action.payload;
    },
  },
});

export const {
  clearErrors,
  setErrors,
  setApplicationState,
  setIsPendingAnyRequest,
  setCurrentVerificationScreenStatus,
  setCurrentVerificationScreenParams,
  setCurrentScreenName,
  setCurrentNavigationRoutes,
  setLastVersionOfTheApplication,
  setIsVersionHistoryModalOpen,
  setAnUnKnownErrorOccoured,
} = appSlice.actions;
export default appSlice.reducer;
