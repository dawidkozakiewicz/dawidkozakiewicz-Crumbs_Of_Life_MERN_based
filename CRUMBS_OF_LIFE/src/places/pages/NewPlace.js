import React, { useCallback, useReducer } from 'react';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH
} from '../../shared/util/validators';
import './NewPlace.css';

const formReducer = (state, action) => {
  switch (action.type) {
    // ogólnie to po pierwszym renderze zawsze właściwość "isValid" przekazana w akcji będzie false,
    // ponieważ tak jest ustawione w state komponentu <Input /> jako wartość domyślna (zarówno input jak i textarea
    //tak przekażą po pierwszym renderze)
    case 'INPUT_CHANGE':
      let formIsValid = true; // będzie zarządzać buttonem - czy ma być disabled, czy nie
      console.log(action)
      // iteracja po obiekcie inputs w stanie (po jego właściwościach) - title i description:
      for (const inputId in state.inputs) {
        if (inputId === action.inputId) { // jeśli właśnie iteruje właściwość, której dotyczy zdispaczowana akcja, to:
          // formIsValid jest true wtedy,
          //kiedy był true powyżej, oraz kiedy w dispaczu isValid (właściwość przekazana ze stanu komponentu <Input />) jest true:
          formIsValid = formIsValid && action.isValid;

        } else { // a jeśli iteruje po własności, której nie dotyczy zdispaczowana akcja to 
          // formIsValid jest true, kiedy powyżej był true oraz kiedy w stanie, w obiekcie o właściwości 
          // której nie wysyła dispacz, właściwość isValid jest true 
          formIsValid = formIsValid && state.inputs[inputId].isValid;
        }
      }
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.inputId]: { value: action.value, isValid: action.isValid }
        },
        isValid: formIsValid
      };
    default:
      return state;
  }
};

const NewPlace = () => {
  const [formState, dispatch] = useReducer(formReducer, {
    inputs: {
      title: {
        value: '',
        isValid: false
      },
      description: {
        value: '',
        isValid: false
      }
    },
    isValid: false
  });

  const inputHandler = useCallback((id, value, isValid) => {
    dispatch({
      type: 'INPUT_CHANGE',
      value: value,
      isValid: isValid,
      inputId: id
    });
  }, []);

  return (
    <form className="place-form">
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
        onInput={inputHandler}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description (at least 5 characters)."
        onInput={inputHandler}
      />
      <Button type="submit" disabled={!formState.isValid}>
        ADD PLACE
      </Button>
    </form>
  );
};

export default NewPlace;
