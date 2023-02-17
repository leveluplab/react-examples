import React from "react";
import "./BugsWithDuplicateKeys.scss";

const applianceList = [
    {
        name: 'Stove',
        key: 'duplicate-key'
    },
    {
        name: 'Water purifier',
        key: 'duplicate-key'
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

const BugsWithDuplicateKeys = () => {
    const [applList, setApplList] = React.useState(applianceList);
    const [applInputVal, setApplInputVal] = React.useState('');

    const addItem = () => {
        const tmpdata = Object.assign([], applList);
        const addedData = [{name: applInputVal, key: 'new-key'}, ...tmpdata];
        setApplList(addedData);
        console.log(addedData);
    };

    const setInputVal = (e: any) => {
        const val = e.target.value;
        console.log(val);
        setApplInputVal(val);
    }
    return (<div className="input-field-bugs-key">
        <h1>Rendering Bug <br /> With Duplicate React keys</h1>
        <div className="appl-input">
            <input className="text-input" type="text" onChange={setInputVal} />
            <button className="btn" onClick={addItem}>Add Item</button>
        </div>
        <div className="bug-list">
            {
                applList.map((appplItem, index) => { 
                    return (
                        <RenderItems
                            key={appplItem.key} // Use only unique and constant keys
                            appplItem={appplItem}
                        />
                    )
                })
            }
        </div>
    </div>);
};

export default BugsWithDuplicateKeys;
