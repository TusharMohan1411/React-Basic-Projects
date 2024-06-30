import { useState } from 'react';
import { EXAMPLES } from './data-with-examples.js';
import './examples.css';

export default function Examples() {

    const [exampleType, setExampleType] = useState();

    function handleSelect(data) {
        setExampleType(data)
    }

    return (
        <>
            <menu>
                <button className={exampleType === 'components' ? 'activated' : undefined} onClick={() => handleSelect("components")}>Components</button>
                <button className={exampleType === 'jsx' ? 'activated' : undefined} onClick={() => handleSelect("jsx")}>JSX</button>
                <button className={exampleType === 'props' ? 'activated' : undefined} onClick={() => handleSelect("props")}>Props</button>
                <button className={exampleType === 'state' ? 'activated' : undefined} onClick={() => handleSelect("state")}>State</button>
            </menu>
            <h3>Examples</h3>
            {!exampleType ? <p>Please Select any Button</p> :
                <div>
                    <h3>{EXAMPLES[exampleType].title}</h3>
                    <p>{EXAMPLES[exampleType].description}</p>
                    <pre>
                        <code>
                            {EXAMPLES[exampleType].code}
                        </code>
                    </pre>
                </div>
            }
        </>
    )
}