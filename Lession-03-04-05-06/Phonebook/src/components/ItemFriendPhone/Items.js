import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons';
const ItemFriendPhone = (props) => {
    const {userName, userPhone, id , deletePhone} = props || {};
    
    return (
        <li>
            <span>{userName}</span>
            <span>{userPhone} <button onClick={() => deletePhone(id)} style={{border: "none", background:"none"}}><FontAwesomeIcon icon={faDeleteLeft} style={{ color: '#ff0000' }} /></button></span>
        </li>
    )
}
export default ItemFriendPhone;