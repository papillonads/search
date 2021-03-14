import React from 'react'
import { getSelectedItemText } from '@papillonads/library/array'
import { getLocaleDateTimeString } from '@papillonads/library/date'
import { primer } from '@papillonads/components'
import { Navigator } from '../../molecule/Navigator'
import { defaultProps, propTypes } from './ListCarTemplate.prop'
import { useListCarState } from './ListCarTemplate.hook'
import {
  container,
  alert,
  content,
  contentDisplay,
  contentDisplaySearch,
  contentDisplaySearchPart,
  contentDisplaySearchPartField,
  contentDisplaySearchPartFieldSelect,
  contentDisplaySearchPartFieldInput,
  contentDisplayGridListCars,
  contentDisplayPagination,
  contentDisplayEdit,
  contentDisplayEditField,
  contentDisplayEditFieldLabel,
  contentDisplayEditFieldSelect,
  contentDisplayEditFieldInput,
  contentDisplayAction,
  contentDisplayActionGroup,
  contentDisplayActionGroupButton,
} from './ListCarTemplate.scss'

export function ListCarTemplate() {
  const {
    Alert: { Alert, alertVariant },
    Button: { Button, buttonVariant, iconAlignment, buttonState },
    Form: {
      Input: { Input, inputState },
    },
    Grid: { FlexGrid, flexGridSelection, flexGridState },
    Icon: { iconName },
    Label,
    Pagination: { PreviousNext, previousNextState },
    Select: { Select, selectState },
  } = primer

  const {
    alertTextListCars,
    pageContent: {
      listCar: { subheadHeadingLeft, subheadHeadingRight },
    },
    progress,
    currentPage,
    edit,
    sort,
    search,
    paginatedRandomCarsObjectsNamesValues,
    searchBrandOnChange,
    searchModelOnChange,
    searchYearOnChange,
    searchLicenseOnChange,
    searchLicenseOnKeyUp,
    searchLicenseOnFocus,
    searchLicenseOnBlur,
    paginationOnClick,
    carsObjectsFlexGridOnChange,
    carsObjectsFlexGridOnClick,
    editObjectLicenseOnChange,
    editObjectBodyworkOnChange,
    editObjectBrandOnChange,
    editObjectModelOnChange,
    editObjectColorOnChange,
    editObjectFuelOnChange,
    editObjectTransmissionOnChange,
    editObjectYearOnChange,
    editObjectPriceOnChange,
    editObjectConsumptionOnChange,
    editObjectMaintenanceOnChange,
    createObjectButtonOnClick,
    updateObjectButtonOnClick,
    deleteObjectButtonOnClick,
  } = useListCarState()

  return (
    <div className={container}>
      <Alert className={alert} variant={progress.message.type} consent={progress?.consent}>
        {progress.message.text}
      </Alert>
      <Navigator headingLeft={subheadHeadingLeft} headingRight={subheadHeadingRight} />
      <div className={content}>
        <div className={contentDisplay}>
          <div className={contentDisplaySearch}>
            <div className={contentDisplaySearchPart}>
              <div className={contentDisplaySearchPartField}>
                <Select
                  id="S1"
                  className={contentDisplaySearchPartFieldSelect}
                  selectedText={search?.brand?.find(({ isSelected }) => isSelected === true)?.text}
                  items={search?.brand}
                  onChange={searchBrandOnChange}
                  state={progress.isLoading ? selectState.inactive : selectState.active}
                />
              </div>
              <div className={contentDisplaySearchPartField}>
                <Select
                  id="S2"
                  className={contentDisplaySearchPartFieldSelect}
                  selectedText={search?.model?.find(({ isSelected }) => isSelected === true)?.text}
                  items={search?.model}
                  onChange={searchModelOnChange}
                  state={progress.isLoading ? selectState.inactive : selectState.active}
                />
              </div>
              <div className={contentDisplaySearchPartField}>
                <Input
                  id="T"
                  value={search.license || ''}
                  className={contentDisplaySearchPartFieldInput}
                  placeholder="Type license plate and press Enter to search. Press ESC to clear."
                  ariaAttr={{ label: 'Type in license plate' }}
                  onChange={searchLicenseOnChange}
                  onKeyUp={searchLicenseOnKeyUp}
                  onFocus={searchLicenseOnFocus}
                  onBlur={searchLicenseOnBlur}
                  state={progress.isLoading ? inputState.inactive : inputState.active}
                />
              </div>
            </div>
            <div className={contentDisplaySearchPart}>
              <div className={contentDisplaySearchPartField}>
                <Select
                  className={contentDisplaySearchPartFieldSelect}
                  selectedText={search?.year?.find(({ isSelected }) => isSelected === true)?.text}
                  items={search?.year}
                  onChange={searchYearOnChange}
                  state={progress.isLoading ? selectState.inactive : selectState.active}
                />
              </div>
            </div>
          </div>
          {paginatedRandomCarsObjectsNamesValues?.length === 0 && (
            <Alert className={alert} variant={alertVariant.warning}>
              {alertTextListCars.display.noCars}
            </Alert>
          )}
          <PreviousNext
            className={contentDisplayPagination}
            ariaAttr={{ label: 'Pagination Top' }}
            currentPage={currentPage}
            onClick={paginationOnClick}
            state={progress.isLoading ? previousNextState.inactive : previousNextState.active}
          />
          <FlexGrid
            className={contentDisplayGridListCars}
            items={paginatedRandomCarsObjectsNamesValues}
            idIndex={0}
            isSelectedIndex={1}
            selection={flexGridSelection.checkbox}
            sort={sort}
            onChange={carsObjectsFlexGridOnChange}
            onClick={carsObjectsFlexGridOnClick}
            onDoubleClick={() => {}}
            state={progress.isLoading ? flexGridState.inactive : flexGridState.active}
          />
          <PreviousNext
            className={contentDisplayPagination}
            ariaAttr={{ label: 'Pagination Bottom' }}
            currentPage={currentPage}
            onClick={paginationOnClick}
            state={progress.isLoading ? previousNextState.inactive : previousNextState.active}
          />
          <div className={contentDisplayEdit}>
            <div>
              <div className={contentDisplayEditField}>
                <Label className={contentDisplayEditFieldLabel} text="License Plate Number" />
                <Input
                  className={contentDisplayEditFieldInput}
                  value={edit?.license || ''}
                  placeholder="Edit license plate"
                  ariaAttr={{ label: 'Type in a license plate' }}
                  onChange={editObjectLicenseOnChange}
                  state={progress.isLoading ? inputState.inactive : inputState.active}
                />
              </div>
              <div className={contentDisplayEditField}>
                <Label className={contentDisplayEditFieldLabel} text="Brand (Make)" />
                <Select
                  className={contentDisplayEditFieldSelect}
                  selectedText={getSelectedItemText({ items: edit?.brand })}
                  items={edit?.brand}
                  onChange={editObjectBrandOnChange}
                  state={progress.isLoading ? selectState.inactive : selectState.active}
                />
              </div>
              <div className={contentDisplayEditField}>
                <Label className={contentDisplayEditFieldLabel} text="Model" />
                <Select
                  className={contentDisplayEditFieldSelect}
                  selectedText={getSelectedItemText({ items: edit?.model })}
                  items={edit?.model}
                  onChange={editObjectModelOnChange}
                  state={progress.isLoading ? selectState.inactive : selectState.active}
                />
              </div>
              <div className={contentDisplayEditField}>
                <Label className={contentDisplayEditFieldLabel} text="Bodywork" />
                <Select
                  className={contentDisplayEditFieldSelect}
                  selectedText={getSelectedItemText({ items: edit?.bodywork })}
                  items={edit?.bodywork}
                  onChange={editObjectBodyworkOnChange}
                  state={progress.isLoading ? selectState.inactive : selectState.active}
                />
              </div>
              <div className={contentDisplayEditField}>
                <Label className={contentDisplayEditFieldLabel} text="Color" />
                <Select
                  className={contentDisplayEditFieldSelect}
                  selectedText={getSelectedItemText({ items: edit?.color })}
                  items={edit?.color}
                  onChange={editObjectColorOnChange}
                  state={progress.isLoading ? selectState.inactive : selectState.active}
                />
              </div>
              <div className={contentDisplayEditField}>
                <Label className={contentDisplayEditFieldLabel} text="Fuel Type" />
                <Select
                  className={contentDisplayEditFieldSelect}
                  selectedText={getSelectedItemText({ items: edit?.fuel })}
                  items={edit?.fuel}
                  onChange={editObjectFuelOnChange}
                  state={progress.isLoading ? selectState.inactive : selectState.active}
                />
              </div>
              <div className={contentDisplayEditField}>
                <Label className={contentDisplayEditFieldLabel} text="Transmission" />
                <Select
                  className={contentDisplayEditFieldSelect}
                  selectedText={getSelectedItemText({ items: edit?.transmission })}
                  items={edit?.transmission}
                  onChange={editObjectTransmissionOnChange}
                  state={progress.isLoading ? selectState.inactive : selectState.active}
                />
              </div>
            </div>
            <div>
              <div className={contentDisplayEditField}>
                <Label className={contentDisplayEditFieldLabel} text="Year" />
                <Select
                  className={contentDisplayEditFieldSelect}
                  selectedText={getSelectedItemText({ items: edit?.year })}
                  items={edit?.year}
                  onChange={editObjectYearOnChange}
                  state={progress.isLoading ? selectState.inactive : selectState.active}
                />
              </div>
              <div className={contentDisplayEditField}>
                <Label className={contentDisplayEditFieldLabel} text="Price (€)" />
                <Input
                  className={contentDisplayEditFieldInput}
                  value={edit?.price || 0}
                  placeholder="Edit price"
                  ariaAttr={{ label: 'Type in a price' }}
                  onChange={editObjectPriceOnChange}
                  state={progress.isLoading ? inputState.inactive : inputState.active}
                />
              </div>
              <div className={contentDisplayEditField}>
                <Label className={contentDisplayEditFieldLabel} text="Fuel Consumption (L)" />
                <Input
                  className={contentDisplayEditFieldInput}
                  value={edit?.consumption || 0}
                  placeholder="Edit fuel consumption"
                  ariaAttr={{ label: 'Type in a fuel consumption' }}
                  onChange={editObjectConsumptionOnChange}
                  state={progress.isLoading ? inputState.inactive : inputState.active}
                />
              </div>
              <div className={contentDisplayEditField}>
                <Label className={contentDisplayEditFieldLabel} text="Annual Maintenance Cost (€)" />
                <Input
                  className={contentDisplayEditFieldInput}
                  value={edit?.maintenance || 0}
                  placeholder="Edit maintenance cost "
                  ariaAttr={{ label: 'Type in a maintenance cost' }}
                  onChange={editObjectMaintenanceOnChange}
                  state={progress.isLoading ? inputState.inactive : inputState.active}
                />
              </div>
              <div className={contentDisplayEditField}>
                <Label className={contentDisplayEditFieldLabel} text="Date Modified" />
                <Input
                  className={contentDisplayEditFieldInput}
                  value={getLocaleDateTimeString(edit?.modified) || ''}
                  state={inputState.inactive}
                />
              </div>
              <div className={contentDisplayEditField}>
                <Label className={contentDisplayEditFieldLabel} text="Date Created" />
                <Input
                  className={contentDisplayEditFieldInput}
                  value={getLocaleDateTimeString(edit?.created) || ''}
                  state={inputState.inactive}
                />
              </div>
            </div>
          </div>
          <div className={contentDisplayAction}>
            <div className={contentDisplayActionGroup}>
              <Button
                className={contentDisplayActionGroupButton}
                text="Create Car"
                icon={{ alignment: iconAlignment.left, name: iconName.Plus16 }}
                variant={buttonVariant.primary}
                onClick={createObjectButtonOnClick}
                state={progress.isLoading ? buttonState.inactive : buttonState.active}
              />
              <Button
                className={contentDisplayActionGroupButton}
                text="Update Car"
                icon={{ alignment: iconAlignment.left, name: iconName.Pencil16 }}
                variant={buttonVariant.primary}
                onClick={updateObjectButtonOnClick}
                state={progress.isLoading ? buttonState.inactive : buttonState.active}
              />
              <Button
                className={contentDisplayActionGroupButton}
                text="Delete Car(s)"
                icon={{ alignment: iconAlignment.left, name: iconName.Trashcan16 }}
                variant={buttonVariant.danger}
                onClick={deleteObjectButtonOnClick}
                state={progress.isLoading ? buttonState.inactive : buttonState.active}
              />
            </div>
          </div>
        </div>
      </div>
      <Alert className={alert} variant={progress.message.type} consent={progress?.consent}>
        {progress.message.text}
      </Alert>
    </div>
  )
}

ListCarTemplate.defaultProps = defaultProps

ListCarTemplate.propTypes = propTypes
