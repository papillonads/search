export function updateCarsObjects({ carsObjects, object }) {
  return carsObjects?.map((carsObject) =>
    carsObject.id === object.id ? { ...object, modified: new Date(), isSelected: false } : { ...carsObject, isSelected: false },
  )
}
