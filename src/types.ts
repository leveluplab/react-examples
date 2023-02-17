type Address = {
    street: string;
    city: string;
}

export type User = {
    id: number;
    name: string;
    email: string;
    address: Address;
}

export type RenderUserInfoProps = {
    userList: User[];
};