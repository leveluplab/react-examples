import React from "react";
import { v4 as uuidv4 } from 'uuid';
import { RenderUserInfoProps, User } from './types';
import { renderUserInfoSchema, userSchema } from './typesJoi';

const RenderUserInfo = (props: RenderUserInfoProps) => {
    const validateApiData = userSchema.validate(props.userList[0]);
    console.log(validateApiData);

    return (<div className="user-list">
        {props.userList.map((userObj: User, index) => {
            const key = uuidv4();
            console.log(key);
            return (
                <div key={index}>
                <hr />
                <div><strong>Name:</strong> {userObj.name}</div>
                <div><strong>Email:</strong> {userObj.email}</div>
                <div><strong>Adress:</strong> {userObj.address.street}, {userObj.address.city}</div>
                </div>
            )
        })}
        
    </div>);
};

export default RenderUserInfo;
