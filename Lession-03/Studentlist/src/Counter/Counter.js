import { useState } from 'react'

const Counter = () => {

    const [count, setCount] = useState(0);

    const onButton = (value) => () => {
        console.log('onButton', value)
    const Newvalue = count + value;
    setCount(Newvalue);
}   

const CountStyle = {
    padding: "0 15px",
};

return (
    <div>
        <h1> Counter Example</h1>
        <button onClick={onButton(1)}>Increase</button>

        <span style={CountStyle}>{count}</span>

        <button onClick={onButton(-1)}>decrease</button>

    </div>
)
};
export default Counter;