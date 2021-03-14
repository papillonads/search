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
  contentDisplaySearchPartFieldDropdown,
  contentDisplaySearchPartFieldInput,
  contentDisplayGridListCars,
  contentDisplayPagination,
  contentDisplayEdit,
  contentDisplayEditField,
  contentDisplayEditFieldLabel,
  contentDisplayEditFieldDropdown,
  contentDisplayEditFieldInput,
  contentDisplayAction,
  contentDisplayActionGroup,
  contentDisplayActionGroupButton,
} from './ListCarTemplate.scss'

export function ListCarTemplate() {
  const {
    Alert: { Alert, alertVariant },
    Button: { Button, buttonVariant, iconAlignment, buttonState },
    Dropdown: { Dropdown, dropdownState },
    Form: {
      Input: { Input, inputState },
    },
    Grid: { FlexGrid, flexGridSelection, flexGridState },
    Icon: { iconName },
    Label,
    Pagination: { PreviousNext, previousNextState },
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
    searchBrandOnClick,
    searchYearOnClick,
    searchLicenseOnChange,
    searchLicenseOnKeyUp,
    searchLicenseOnFocus,
    searchLicenseOnBlur,
    paginationOnClick,
    carsObjectsFlexGridOnChange,
    carsObjectsFlexGridOnClick,
    editObjectLicenseOnChange,
    editObjectBodyworkOnClick,
    editObjectBrandOnClick,
    editObjectModelOnClick,
    editObjectColorOnClick,
    editObjectFuelOnClick,
    editObjectTransmissionOnClick,
    editObjectYearOnClick,
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
                <Dropdown
                  className={contentDisplaySearchPartFieldDropdown}
                  summary={search?.brand?.find(({ isSelected }) => isSelected === true)?.text}
                  items={search?.brand}
                  onClick={searchBrandOnClick}
                  state={progress.isLoading ? dropdownState.inactive : dropdownState.active}
                />
              </div>
              <div className={contentDisplaySearchPartField}>
                <Input
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
                <Dropdown
                  className={contentDisplaySearchPartFieldDropdown}
                  summary={search?.year?.find(({ isSelected }) => isSelected === true)?.text}
                  items={search?.year}
                  onClick={searchYearOnClick}
                  state={progress.isLoading ? dropdownState.inactive : dropdownState.active}
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
                <Dropdown
                  className={contentDisplayEditFieldDropdown}
                  summary={getSelectedItemText({ items: edit?.brand })}
                  items={edit?.brand}
                  onClick={editObjectBrandOnClick}
                  state={progress.isLoading ? dropdownState.inactive : dropdownState.active}
                />
              </div>
              <div className={contentDisplayEditField}>
                <Label className={contentDisplayEditFieldLabel} text="Model" />
                <Dropdown
                  className={contentDisplayEditFieldDropdown}
                  summary={getSelectedItemText({ items: edit?.model })}
                  items={edit?.model}
                  onClick={editObjectModelOnClick}
                  state={progress.isLoading ? dropdownState.inactive : dropdownState.active}
                />
              </div>
              <div className={contentDisplayEditField}>
                <Label className={contentDisplayEditFieldLabel} text="Bodywork" />
                <Dropdown
                  className={contentDisplayEditFieldDropdown}
                  summary={getSelectedItemText({ items: edit?.bodywork })}
                  items={edit?.bodywork}
                  onClick={editObjectBodyworkOnClick}
                  state={progress.isLoading ? dropdownState.inactive : dropdownState.active}
                />
              </div>
              <div className={contentDisplayEditField}>
                <Label className={contentDisplayEditFieldLabel} text="Color" />
                <Dropdown
                  className={contentDisplayEditFieldDropdown}
                  summary={getSelectedItemText({ items: edit?.color })}
                  items={edit?.color}
                  onClick={editObjectColorOnClick}
                  state={progress.isLoading ? dropdownState.inactive : dropdownState.active}
                />
              </div>
              <div className={contentDisplayEditField}>
                <Label className={contentDisplayEditFieldLabel} text="Fuel Type" />
                <Dropdown
                  className={contentDisplayEditFieldDropdown}
                  summary={getSelectedItemText({ items: edit?.fuel })}
                  items={edit?.fuel}
                  onClick={editObjectFuelOnClick}
                  state={progress.isLoading ? dropdownState.inactive : dropdownState.active}
                />
              </div>
              <div className={contentDisplayEditField}>
                <Label className={contentDisplayEditFieldLabel} text="Transmission" />
                <Dropdown
                  className={contentDisplayEditFieldDropdown}
                  summary={getSelectedItemText({ items: edit?.transmission })}
                  items={edit?.transmission}
                  onClick={editObjectTransmissionOnClick}
                  state={progress.isLoading ? dropdownState.inactive : dropdownState.active}
                />
              </div>
            </div>
            <div>
              <div className={contentDisplayEditField}>
                <Label className={contentDisplayEditFieldLabel} text="Year" />
                <Dropdown
                  className={contentDisplayEditFieldDropdown}
                  summary={getSelectedItemText({ items: edit?.year })}
                  items={edit?.year}
                  onClick={editObjectYearOnClick}
                  state={progress.isLoading ? dropdownState.inactive : dropdownState.active}
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
