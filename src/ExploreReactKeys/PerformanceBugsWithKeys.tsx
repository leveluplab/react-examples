import React from "react";
import { v4 as uuidv4 } from 'uuid';
import "./PerformanceBugsWithKeys.scss";

const applianceList = [
    {
        name: 'Stove',
        key: 'stove'
    },
    {
        name: 'Water purifier',
        key: 'water-purifier'
    },
    {
        name: 'Solar water heater',
        key: 'solar-water-heater'
    }
];

const RenderItems = (props: any) => {
    return (
        <div
            onClick={props.handleDelete}
            className="item-list"
            data-value={props.appplItem.name}
        >
            {props.appplItem.name}
        </div>
    )
};

const PerformanceBugsWithKeys = () => {
    const [applList, setApplList] = React.useState(applianceList);
    const [applInputVal, setApplInputVal] = React.useState('');

    const addItem = () => {
        const tmpdata = Object.assign([], applList);
        tmpdata.push({name: applInputVal, key: `key-${Math.random()}`});
        setApplList(tmpdata);
        console.log(tmpdata);
    };
    const handleDelete = (e: any) => {
        const elToDelete = e.target.getAttribute('data-value');
        const tmpdata = Object.assign([], applList);
        const listItems = tmpdata.filter((itm) => itm.name !== elToDelete);
        setApplList(listItems);

    }
    const setInputVal = (e: any) => {
        const val = e.target.value;
        console.log(val);
        setApplInputVal(val);
    }
    return (<div className="input-field-bugs-key">
        <h1>Performance Bug - due to index key</h1>
        <h2>Adding Item in the end of list Bugs with React keys</h2>
        <h2>Using index key everytime cause render item list </h2>
        <h2>Deleting item form start of list will cause render for all items</h2>
        <h2>Use unique and constant keys to fix unnecessary render</h2>
        <div className="appl-input">
            <input className="text-input" type="text" onChange={setInputVal} />
            <button className="btn" onClick={addItem}>Add Item</button>
        </div>
        <div className="bug-list">
            {
                applList.map((appplItem, index) => {
                    return (
                        <RenderItems
                            key={index} // {appplItem.key}
                            handleDelete={handleDelete}
                            appplItem={appplItem}
                        />
                    )
                })
            }
        </div>
    </div>);
};

export default PerformanceBugsWithKeys;
