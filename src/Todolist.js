import './App.css';

const Todolist = (props)=>{
    const {value, id, onSubmit} = props;
    
    return <>
        <div style={{display : "flex"}}>
            <li>{value}</li>
            <button onClick={()=>onSubmit(id)}>-</button>
        </div>
        </>
}

export default Todolist;