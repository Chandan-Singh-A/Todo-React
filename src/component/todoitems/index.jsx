import style from './style.module.css'
export default function Todoitems({data,updatecheckbox}){
    function onchangecheckbox(e){
        updatecheckbox
    }
    return (
        <div className={style.todoitem}>
        <li className={style.li}>
            {(data.status)?<strike><p>{data.todo}</p></strike>:<p>{data.todo}</p>}
            <input type="checkbox" className={style.checkbox} checked={data.status} onChange={onchangecheckbox}/>
                <span className={style.span}>&#10006;</span>
        </li>
            <hr />
        </div>
    )
}