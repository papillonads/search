export function createCarsObjects({ carsObjects, newCarsObject }) {
  return carsObjects
    ? [
        ...(carsObjects?.map((carsObject) => ({
          ...carsObject,
          isSelected: false,
        })) ?? []),
        newCarsObject,
      ]
    : null
}
