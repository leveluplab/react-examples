import React from "react";
import { v4 as uuidv4 } from 'uuid';
import "./ListOrderBugsWithKeys.scss";

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
            {props.appplItem.name}
        </div>
    )
};

const ListOrderBugsWithKeys = () => {
    const [applList, setApplList] = React.useState(applianceList);
    const [applInputVal, setApplInputVal] = React.useState('');

    const addItem = () => {
        const tmpdata = Object.assign([], applList);
        const newArr = [...tmpdata, {name: applInputVal, key: `key-${Math.random()}`}];
        setApplList(newArr);
        console.log(newArr);
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
        <h1>Performance Bug - due to unique and new key on every render</h1>
        <h2>Adding Item in the list</h2>
        <h2>Using unique and new key everytime to render item list </h2>
        <h2>Just use npm module <strong>uuid</strong> to cause render everytime</h2>
        <h2>Use unique and constant keys to fix unnecessary render</h2>
        <div className="appl-input">
            <input className="text-input" type="text" onChange={setInputVal} />
            <button className="btn" onClick={addItem}>Add Item</button>
        </div>
        <div className="bug-list">
            {
                applList.map((appplItem, index) => {
                    const key = uuidv4(); // This create a new key everytime and cause render everytime.
                    return (
                        <RenderItems
                            key={appplItem.key}
                            handleDelete={handleDelete}
                            appplItem={appplItem}
                        />
                    )
                })
            }
        </div>
    </div>);
};

export default ListOrderBugsWithKeys;
