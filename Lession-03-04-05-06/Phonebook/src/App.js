import ItemFriendPhone from './components/ItemFriendPhone/Items';
import './App.css';
import { useState } from 'react';
import { v4 as uuid4 } from "uuid"


function App() {

  // const [user, setUser] = useState({
  //   userName: '',
  //   userPhone: '',
  // })

  const [listPhone, setListPhone] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e.target);
    const form = e.target;
    const newFriendPhone = {
      userName: e.target['userName'].value,
      userPhone: form['userPhone'].value,
      id: uuid4()
    }
    listPhone.push(newFriendPhone);
    console.log(listPhone);
    setListPhone([...listPhone]);
  };

// const deletePhone = () => {
//   const listAfterDelete = listPhone.filter(User => User.id !== id);
//   setListPhone(listAfterDelete);  
// };

  return (

    <div className="app-container">
      <h1>Danh bạ điện thoại</h1>
      <form className='form-add' onSubmit={handleSubmit}>
        <input type="text" placeholder='Tên' name='userName'/>
        <input type="text" placeholder='Điện thoại' name='userPhone'/>
        <button type='submit'>Thêm</button>
      </form>
      <hr />
      <div className="feat-client">
        <input type="text" placeholder='Tìm kiếm' name='search'/>
        <button>Tìm</button>
        <button>Xoá trùng</button>
      </div>
      <ul className="list-friend-phone">
      {listPhone.map((item) => {
      return <ItemFriendPhone userName={item.userName} userPhone={item.userPhone} />;
      // ID = {item.id} deletePhone={deletePhone}
      })}
      </ul>
    </div>
  )
}

export default App
