import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { actionCreators as userActions } from '../redux/modules/user';
import '../App.css';

// Components
import { Header } from '../components/component';

// Pages
import {
  Main,
  Login,
  Signup,
  CartList,
  NotFound,
  CommentWrite,
  Detail,
  FindPwd,
  FindId,
  Category,
  NoticeListPage,
  NoticeDetailPage,
} from '../pages/page';

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token_key = localStorage.getItem('token');
  const islogin = useSelector((state) => state.user.is_login);
  console.log('islogin: ', islogin);
  const [searchValue, setSearchValue] = useState('');

  const handleSearchSubmit = (value) => {
    console.log('검색어: ' + value);
    setSearchValue(value);
    navigate('/category');
  };

  useEffect(() => {
    if (!token_key) {
      return;
    }
    if (token_key) {
      dispatch(userActions.loginCheckDB(token_key));
    }
  }, []);

  return (
    <div className="App">
      <Header onSearchSubmit={handleSearchSubmit} />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/detail/:seq" element={<Detail />} />
        <Route path="/cart" element={<CartList />} />
        <Route path="/comment/write/:id" element={<CommentWrite />} />
        <Route path="/FindPwd" element={<FindPwd />} />
        <Route path="/FindId" element={<FindId />} />
        <Route path="/category/:tag" element={<Category searchValue={searchValue} />} />
        <Route path="/notices" element={<NoticeListPage />} />
        <Route path="/notices/:id" element={<NoticeDetailPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;