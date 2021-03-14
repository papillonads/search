export function deleteCarsObjects({ carsObjects, selectedObjects }) {
  return carsObjects
    ?.map((object) => {
      let newObject

      if (object.id !== selectedObjects.find((selectedObject) => selectedObject.id === object.id)?.id) {
        newObject = object
      }

      return newObject
    })
    .filter((object) => object)
}
