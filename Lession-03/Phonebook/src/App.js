import ItemFriendPhone from './components/ItemFriendPhone/Items';
import './App.css';

function App() {

  return (

    <div className="app-container">
      <h1>Số điện thoại bạn bè</h1>
      <form className='form-add'>
        <input type="text" placeholder='Tên' />
        <input type="text" placeholder='Điện thoại' />
        <button type='submit'>Thêm</button>
      </form>
      <hr />
      <div className="feat-client">
        <input type="text" placeholder='Tìm kiếm' />
        <button>Tìm</button>
        <button>Xoá trùng</button>
      </div>
      <ul className="list-friend-phone">
        <ItemFriendPhone userName="Duy Khương1" />
        <ItemFriendPhone userName="Duy Khương2" />
        <ItemFriendPhone userName="Duy Khương3" />
      </ul>
    </div>
  )
}

export default App
