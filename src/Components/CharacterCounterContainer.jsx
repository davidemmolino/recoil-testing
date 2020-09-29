import React from 'react';
import { TextInput, CharacterCount } from './TextInput.jsx';
import TestComponent1 from './TestComponent1.jsx';

const CharacterCounterContainer = () => {
    return (
      <div>
        <TextInput />
        <CharacterCount/>
        <TestComponent1 />
    </div>
    )
}

export default CharacterCounterContainer;