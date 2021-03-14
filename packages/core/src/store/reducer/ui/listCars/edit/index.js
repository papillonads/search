export function uiSetListCarsEdit(state, action) {
  return {
    ...state,
    listCars: {
      ...state.listCars,
      edit: { ...action.payload },
    },
  }
}
