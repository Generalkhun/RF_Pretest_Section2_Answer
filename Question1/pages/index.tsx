import { OutlinedInput, makeStyles, InputLabel, MenuItem, Select } from '@material-ui/core'
import { get } from 'lodash'
import type { NextPage } from 'next'
import React, { ChangeEvent, useReducer } from 'react'
import { findResult, inputNumberRescrictor } from '../helpers'


const useStyles = makeStyles({
  root: {
    display: 'flex'
  },
  firstColumn: {
    width: 200
  },
  secondColumn: {
    flexGrow: 1
  },
  thridColumn: {
    width: 300
  },
  inputNumberForm: {
    width: 150,
    height: 50
  }
})

// action types used in this reducer
enum numCalculatorActions {
  UPDATE_INPUT_NUMBER = 'UPDATE_INPUT_NUMBER',
  UPDATE_CALCULATION_TYPE = 'UPDATE_CALCULATION_TYPE',
  FIND_RESULT = 'FIND_RESULT'
}
interface numCalculatorAction {
  type: numCalculatorActions,
  payload: string
}

const numCalculatorReducer = (state: any, action: numCalculatorAction) => {
  switch (action.type) {
    case numCalculatorActions.UPDATE_INPUT_NUMBER:
      return { ...state, inputNumber: inputNumberRescrictor(action.payload) }
    case numCalculatorActions.UPDATE_CALCULATION_TYPE:
      return { ...state, calculationType: action.payload }

    case numCalculatorActions.FIND_RESULT:
      return { ...state, result: findResult(state.inputNumber, state.calculationType) }
    default:
      return state
  }
}

const Home: NextPage = () => {
  const [numCalculatorState, numCalculatorDispatch] = useReducer(numCalculatorReducer, {
    inputNumber: null,
    calculationType: null,
    result: null
  })

  const inputNumber = get(numCalculatorState, 'inputNumber')
  const calculationType = get(numCalculatorState, 'calculationType')
  const result = get(numCalculatorState, 'result')

  const classes = useStyles()
  const changeInputNumberHandler = (e: ChangeEvent<HTMLInputElement>) => {
    // update input number in the store
    numCalculatorDispatch({ type: numCalculatorActions.UPDATE_INPUT_NUMBER, payload: e.target.value })

    // re-calculating the result based on values inside the store
    numCalculatorDispatch({ type: numCalculatorActions.FIND_RESULT, payload: '' })

  }
  const changeCalculationHandler = (e: ChangeEvent<{ name?: string | undefined; value: unknown; }>) => {

    // update calculation type in the store
    numCalculatorDispatch({ type: numCalculatorActions.UPDATE_CALCULATION_TYPE, payload: e.target.value as string })

    // re-calculating the result based on values inside the store
    numCalculatorDispatch({ type: numCalculatorActions.FIND_RESULT, payload: '' })
  }
  return (
    <div className={classes.root}>
      <div className={classes.firstColumn}>
        <OutlinedInput
          id='numCalculatorInputNumber'
          type='number'
          onChange={changeInputNumberHandler}
          value={inputNumber}
          className={classes.inputNumberForm}
        />
      </div>
      <div className={classes.secondColumn}>
        <InputLabel id="calculation-type-label">Calculation Type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="calculation-type-label"
          value={calculationType}
          label="Age"
          onChange={changeCalculationHandler}
        >
          <MenuItem value={'isPrime'}>isPrime</MenuItem>
          <MenuItem value={'IsFibanacci'}>IsFibanacci</MenuItem>
        </Select>
      </div>
      <div className={classes.thridColumn}>{result}</div>
    </div>
  )
}

export default Home
