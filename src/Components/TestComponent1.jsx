import React from 'react';
import { useRecoilValue } from 'recoil';
import textState from './TextInput.jsx';

export default function TestComponent1() {
    const recoilValue = useRecoilValue(textState)
    return (
        <div>
            NOT NESTED Recoil Value:
            {recoilValue}
        </div>
    )
}
