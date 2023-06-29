import ItemFriendPhone from './components/ItemFriendPhone/Items';
import './App.css';
import { useState } from 'react';


function App() {

  const [user, setUser] = useState({
    userName: '',
    userPhone: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e.target);
    const form = e.target;
    const newFriendPhone = {
      userName: form['userName'].value,
      userPhone: form['userPhone'].value
    }
    // console.log(newFriendPhone);
    setUser(newFriendPhone);
  };
  
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
        <input type="text" placeholder='Tìm kiếm' />
        <button>Tìm</button>
        <button>Xoá trùng</button>
      </div>
      <ul className="list-friend-phone">
        <ItemFriendPhone userName={user.userName} userPhone={user.userPhone} />
      </ul>
    </div>
  )
}

export default App
