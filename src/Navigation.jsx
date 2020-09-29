import React, { Suspense } from 'react';
import { useRecoilValue } from 'recoil';
import textState from './Components/TextInput.jsx';


export default function Navigation() {
    const recoilValue = useRecoilValue(textState);
    const Fetch = () => {
        fetch('/api')
        .then(data => console.log(data));
    }
    return (
        <div>
            <Suspense>
                <Fetch />
            </Suspense>
            <h1>This is my nested root component</h1>
            {recoilValue}
        </div>
    )
}


