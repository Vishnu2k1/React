import React, { Fragment , useState} from "react"

const UseStateHookExample =() =>{
    // const [counter , setCounter] = useState(0)
    // console.log(counter)
    // const handleClick = () => {
    //     setCounter(counter+1);
    const initialState ={
        name1: "",
        name2: ""
    };
    const [infoData, setInfoData] = useState(initialState);
    const handleOnChange = (event)=> {  
    const{name,value}= event.target;
    console.log(name,value)
    

    }
    return(
        <Fragment>
            {/* <button onClick={handleClick}>Counter</button>
            <p>counter value is {counter}</p> */}
        <input placeholder="Input one" name ="name1" onChange={handleOnChange}/>
        <input placeholder="Input two" name ="name2" onChange={handleOnChange}/>
        </Fragment>
    )
};
export default UseStateHookExample;