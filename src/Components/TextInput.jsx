import React from 'react';
import { useRecoilState, atom } from 'recoil';
import { 
    selector, 
    useRecoilValue
} from 'recoil';
// import charCountState from './CharacterCount';

//declare a new atom
//key is a unique value with respect to other atoms and selectors
export const textState = atom({
    key: 'textState',
    default: '',
});


  
//what does get do again?
//selectors are derived state, the returned result of changing state
const charCountState = selector({
    key: 'charCountState',
    get: ({get}) => {
        const text = get(textState);
        return text.length;
    }
});
    
export const CharacterCount = () => {
    const count = useRecoilValue(charCountState);
    return <>Character Count: {count} </>;
};

//use useRecoilState to read and from an atom
export const TextInput = () => {
    const [text, setText] = useRecoilState(textState);
  
    const onChange = (event) => {
      setText(event.target.value);
    }
  
    return (
        <div>
            <input type="text" value={text} onChange={(e) => onChange(e)} />
            <br />
            Echo: {text}
        </div>
    )
};

export default textState;