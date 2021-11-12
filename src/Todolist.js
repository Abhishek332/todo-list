import './App.css';
import MenuIcon from '@mui/icons-material/Menu';

const Todolist = (props)=>{
    const {value, id, onSubmit} = props;
    
    return <>
        <div style={{display : "flex"}}>
            <li>{value}</li>
            <MenuIcon/>
            {/* <DeleteForeverIcon onClick={()=>onSubmit(id)}/> */}
        </div>
        </>
}

export default Todolist;
