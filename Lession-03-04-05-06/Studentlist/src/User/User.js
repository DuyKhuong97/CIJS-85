import { useState } from "react";

const User = () => {

    const [userList, setUser] = useState({
        name: "user",
        age: 10,
    });

    const Increase = () => {
        setUser({
            ...userList,
            age: userList.age +1
        })
    };
    return (
        <div>
            <h1>{userList.name}</h1>

            <h3>{userList.age}</h3>

            <button onClick={Increase}>click</button>
        </div>
    )
};

export default User;
