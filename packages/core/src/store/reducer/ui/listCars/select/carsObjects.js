export function selectCarsObjects({ carsObjects, changedObjects }) {
  return (
    carsObjects?.map((object) => ({
      ...object,
      isSelected: (() => {
        const isChangedObject = changedObjects.find((changedObject) => changedObject.id === object.id)
        return isChangedObject ? isChangedObject.isSelected : object.isSelected
      })(),
    })) ?? null
  )
}
