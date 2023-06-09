import React from "react";
import styled from "styled-components";
import { Text, LoginBox } from "../elements/element";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import { Link, useNavigate } from "react-router-dom";
import ReactDOM from 'react-dom';
import axios from 'axios';
import Modal from "../components/ModalFind";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const changeUsername = (e) => {
    setUsername(e);
  };

  const changePassword = (e) => {
    setPassword(e);
  };

  const login = () => {
    if (username === "" || password === "") {
      openModal("아이디와 비밀번호를 입력해주세요.");
      return;
    } else {
      dispatch(userActions.loginDB(username, password));
    }
  };

  return (
    <React.Fragment>
      <LoginWrap>
        <Text
          bold
          margin="70px auto 34px"
          size="22px"
          width="100%"
          center="center"
        >
          로그인
        </Text>

        <LoginBox
          value={username}
          placeholder="아이디를 입력해주세요"
          _onChange={(e) => {
            changeUsername(e.target.value);
          }}
        />

        <LoginBox
          value={password}
          type="password"
          placeholder="비밀번호를 입력해주세요"
          _onChange={(e) => {
            changePassword(e.target.value);
          }}
        />

        <div
          style={{
            width: "18%",
            margin: "10px auto",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <CheckWrap>
            <Check type="checkbox" />
            <div
              style={{
                color: "#4f4f4f",
                size: "13px",
                margin: "0 0 0px 6px",
                fontSize: "14px",
                display: "contents",
              }}
            >
              보안접속
            </div>
          </CheckWrap>

          <FindStyle>
            <div
              style={{
                color: "#4f4f4f",
                size: "13px",
                margin: "0",
                fontSize: "13px",
                paddingTop: "3px",
              }}
            >
              <Link to="/FindId" style={{ textDecoration: 'none', color: 'black' }}>아이디 찾기 | </Link>
              <Link to="/findpwd" style={{ textDecoration: 'none', color: 'black' }}>비밀번호 찾기</Link>
            </div>
          </FindStyle>
        </div>

        <ButtonLogin
          onClick={() => {
            login();
          }}
        >
          <Text color="#ffffff" size="16.5px" margin="1px 0 0 0">
            로그인
          </Text>
        </ButtonLogin>

        <ButtonSignup
          onClick={() => {
            navigate("/signup");
          }}
        >
          <Text color="#5f0081" size="16px" margin="1px 0 0 0">
            회원가입
          </Text>
        </ButtonSignup>
      </LoginWrap>
    </React.Fragment>
  );
};

// 모달 창 열기
const openModal = (message) => {
  const modalContainer = document.createElement("div"); // 새로운 div 요소 생성
  document.body.appendChild(modalContainer); // body 요소에 새로운 div 요소 추가

  ReactDOM.render(
    <Modal isOpen={true} closeModal={() => closeModal(modalContainer)} message={message} />,
    modalContainer
  );
};

// 모달 창 닫기
const closeModal = (modalContainer) => {
  ReactDOM.unmountComponentAtNode(modalContainer);
  modalContainer.remove(); // div 요소 삭제
};

const LoginWrap = styled.div`
  margin: 0px auto 100px 0px;
  justify-content: center;
  text-align: center;
`;

const CheckWrap = styled.div``;

const Check = styled.input`
  width: 10px;
  height: 12px;
  border-radius: 3px;
  border: 1px solid #8c8c8c;
  background-size: 16px 17px;
  color: #8c8c8c;
`;

const FindStyle = styled.ul`
  display: contents;
`;

const ButtonLogin = styled.button`
  margin: 10px auto;
  /* width: 25%; */
  width: 350px;
  height: 54px;
  border-radius: 3px;
  border: 1px solid #5f0081;
  background-color: #5f0080;
  cursor: pointer;
  display: block;
  overflow: hidden;
  text-align: center;
`;

const ButtonSignup = styled.button`
  margin: 10px auto;
  /* width: 25%; */
  width: 350px;
  height: 54px;
  border-radius: 3px;
  border: 1px solid #5f0081;
  background-color: #ffffff;
  cursor: pointer;
  display: block;
  overflow: hidden;
  text-align: center;
`;

export default Login;
