import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { actionCreators as userActions } from '../redux/modules/user';
import '../App.css';

// Components
import { Header } from '../components/component';
import { Footer } from '../components/component';

// Pages
import {
  Main,
  Login,
  Signup,
  CartList,
  NotFound,
  CommentWrite,
  Detail,
  Order,
  Address,
  FindPwd,
  FindId,
  OrderList,
  Payment,
  Category,
  ConfirmPwd,
  Modify,
  Delete,
  notices,
  NoticeListPage,
  NoticeDetailPage,
  FaqPage,
  InquiryPage,
  InquiryFormPage,
  Review,
  FindPwdCert,
  ResetPwd,
  DelieveryEvent,
} from "../pages/page";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token_key = localStorage.getItem('token');
  const islogin = useSelector((state) => state.user.is_login);
  console.log("islogin: ", islogin);
  const [searchValue, setSearchValue] = useState(""); // 검색어 상태
  const [selectedTag, setSelectedTag] = useState('');

  const handleSearchSubmit = (value) => {
    console.log('검색어: ' + value);
    setSearchValue(value);
    navigate('/category');
  };

  useEffect(() => {
    if (token_key === null && token_key === "null") {
      return;
    }
    if (token_key !== null && token_key !== "null") {
      console.log("토큰 있음:" + token_key);
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
        <Route path="/order" element={<Order />} />
        <Route path="/address" element={<Address />} />
        <Route path="/category/:tag" element={<Category searchValue={searchValue} />} />
        <Route path="/FindPwd" element={<FindPwd />} />
        <Route path="/FindId" element={<FindId />} />
        <Route path="/ConfirmPwd" element={<ConfirmPwd />} />
        <Route path="/Modify" element={<Modify />} />
        <Route path="/Delete" element={<Delete />} />
        <Route path="/findPwdCert" element={<FindPwdCert/>}/>
        <Route path="/confirmPwd" element={<ConfirmPwd />} />
        <Route path="/orderlist" element={<OrderList />} />
        <Route path="/Payment" element={<Payment />} />
        <Route path="/notices" element={<NoticeListPage />} />
        <Route path="/notices/:id" element={<NoticeDetailPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/inquiry" element={islogin ? <InquiryPage /> : <Login />}/>
        <Route path="/inquirywrite" element={<InquiryFormPage />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/review" element={<Review />} />
        <Route path="/resetpwd" element={<ResetPwd/>}/> 
        <Route path="/delieveryevent" element={<DelieveryEvent/>}/> 
      </Routes>
      <Footer />
    </div>
  );
}

export default App;