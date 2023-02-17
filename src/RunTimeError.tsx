import React from "react";
import { User } from './types';
import { getUserData } from './getData';
import RenderUserInfo from './RenderUserInfo';

const RunTimeError = () => {
    const [userData, setUserData] = React.useState([]);
    React.useEffect(() => {
        getUserData
        .then((result: User[]) => {
            setUserData(result);
        })
        .catch(error => console.error(error));
    });
    if (!userData.length) {
        return null;
    }
    return (<div className="run-time-error">
        <h1>Run Time Error Demo</h1>
        <RenderUserInfo userList={userData} />
    </div>);
};

export default RunTimeError;
