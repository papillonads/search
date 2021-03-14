export const alertTextListCars = Object.freeze({
  pagination: { browsing: 'Browsing through list cars...' },
  display: {
    noCars: 'No list cars!',
  },
  action: {
    create: {
      validation: {
        emptyLicense: 'Car can only be created with a license plate!',
        sameLicense: (carLicense) => `There is already a car with the license plate '${carLicense}'`,
      },
      consent: {
        question: (carLicense) => `Are you sure to create car '${carLicense}'?`,
        cancel: 'Create car cancelled!',
      },
      progress: 'Creating car...',
      success: 'Successfully created car!',
    },
    update: {
      validation: {
        singleCar: 'It is possible to update only one car at a time!',
        nothingSelected: 'No car selected to update!',
        emptyLicense: 'Car can only be updated with a license plate!',
        sameLicense: (carLicense) => `There is already a car with the license plate '${carLicense}'`,
      },
      consent: {
        question: (carLicense) => `Are you sure to update car '${carLicense}'?`,
        cancel: 'Update car cancelled!',
      },
      progress: 'Updating car...',
      success: 'Successfully updated car!',
    },
    delete: {
      validation: {
        nothingSelected: 'No car(s) selected to delete!',
      },
      consent: {
        question: (carLicenseList) => `Are you sure to delete the following car(s)? '${carLicenseList}'`,
        cancel: 'Delete car(s) cancelled!',
      },
      progress: 'Deleting car(s)...',
      success: 'Successfully deleted car(s)!',
    },
  },
})
