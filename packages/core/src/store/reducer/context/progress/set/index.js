export function contextSetProgress(state, action) {
  return {
    ...state,
    progress: {
      ...action.payload,
    },
  }
}
