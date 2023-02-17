import React from "react";
import { v4 as uuidv4 } from 'uuid';
import "./InputFieldBugsWithKeys.scss";

const applianceList = [
    {
        name: 'Stove',
        key: 'stove'
    },
    {
        name: 'Water purifier',
        key: 'water-purifier'
    }
];

const RenderItems = (props: any) => {
    return (
        <div
            onClick={props.handleDelete}
            className="item-list"
            data-value={props.appplItem.key}
        >
            <input className="render-text" type="text" defaultValue={props.appplItem.name} />
        </div>
    )
};

const InputFieldBugsWithKeys = () => {
    const [applList, setApplList] = React.useState(applianceList);
    const [applInputVal, setApplInputVal] = React.useState('');

    const addItem = () => {
        const tmpdata = Object.assign([], applList);
        tmpdata.push({name: applInputVal, key: `a-${Math.random()}`});
        setApplList(tmpdata);
        console.log(tmpdata);
    };
    const handleDelete = (e: any) => {
        const elToDelete = e.target.getAttribute('data-value');
        const tmpdata = Object.assign([], applList);
        const listItems = tmpdata.filter((itm) => itm.key !== elToDelete);
        setApplList(listItems);

    }
    const setInputVal = (e: any) => {
        const val = e.target.value;
        console.log(val);
        setApplInputVal(val);
    }
    return (<div className="input-field-bugs-key">
        <h1>Rendering Bug</h1>
        <h2>Index Key or not having React keys</h2>
        <h2>Input default value not update after deleting</h2>
        <div className="appl-input">
            <input className="text-input" type="text" onChange={setInputVal} />
            <button className="btn" onClick={addItem}>Add Item</button>
        </div>
        <div className="bug-list">
            {
                applList.map((appplItem, index) => {
                    return (
                        <RenderItems
                            key={index} // Add appplItem.key to fix this bug
                            handleDelete={handleDelete}
                            appplItem={appplItem}
                        />
                    )
                })
            }
        </div>
    </div>);
};

export default InputFieldBugsWithKeys;
