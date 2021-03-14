import { getNewCars } from '../../../store/reducer/ui/newCars/random/cars'

const newCars = getNewCars()

export const ui = {
  listCars: newCars,
}
