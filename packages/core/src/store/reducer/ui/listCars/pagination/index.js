import { getCurrentIndex } from '@papillonads/library/array'
import { paginationActionTypes, setNewIndexItemsOnMove } from '@papillonads/library/pagination'

export function uiSetListCarsPagination(state, action) {
  let newIndexItemsOnBackwards
  let newIndexItemsOnBackwardsCurrentIndex
  let newIndexItemsOnForward
  let newIndexItemsOnForwardCurrentIndex

  switch (action.payload.paginationAction) {
    case paginationActionTypes.onBackwards:
      newIndexItemsOnBackwards = setNewIndexItemsOnMove({
        onBackwards: true,
        currentPage: state.listCars.pagination.currentPage,
      })
      newIndexItemsOnBackwardsCurrentIndex = getCurrentIndex(newIndexItemsOnBackwards)

      return {
        ...state,
        listCars: {
          ...state.listCars,
          pagination: {
            ...state.listCars.pagination,
            pageNumber: newIndexItemsOnBackwardsCurrentIndex + 1,
            currentPage: {
              indexItems: newIndexItemsOnBackwards,
              currentIndex: newIndexItemsOnBackwardsCurrentIndex,
              canMoveBackwards: newIndexItemsOnBackwardsCurrentIndex > 0,
              canMoveForward: newIndexItemsOnBackwardsCurrentIndex < newIndexItemsOnBackwards.length - 1,
            },
          },
        },
      }
    case paginationActionTypes.onForward:
      newIndexItemsOnForward = setNewIndexItemsOnMove({
        onForward: true,
        currentPage: state.listCars.pagination.currentPage,
      })
      newIndexItemsOnForwardCurrentIndex = getCurrentIndex(newIndexItemsOnForward)

      return {
        ...state,
        listCars: {
          ...state.listCars,
          pagination: {
            ...state.listCars.pagination,
            pageNumber: newIndexItemsOnForwardCurrentIndex + 1,
            currentPage: {
              indexItems: newIndexItemsOnForward,
              currentIndex: newIndexItemsOnForwardCurrentIndex,
              canMoveBackwards: newIndexItemsOnForwardCurrentIndex > 0,
              canMoveForward: newIndexItemsOnForwardCurrentIndex < newIndexItemsOnForward.length - 1,
            },
          },
        },
      }
    default:
      throw new Error()
  }
}
