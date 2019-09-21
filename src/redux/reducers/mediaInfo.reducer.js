const mediaInfo = (state = [], action) => {
    switch (action.type) {
      case 'SET_MEDIA':
        return action.payload;
      case 'UNSET_MEDIA':
        return [];
      default:
        return state;
    }
  };
  
  // user will be on the redux state at:
  // state.user
  export default mediaInfo;