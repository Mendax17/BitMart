import React, { useEffect } from "react";
import styled from "styled-components";
import AllList from "../components/AllList";
import {
  Banner,
  MD,
  MiddleBanner,
  Oneday,
  Slide,
  Kurlyonly,
  Sale,
} from "../components/component";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";
import { actionCreators as userActions } from "../redux/modules/user";

//elements
import images from "../elements/Image";

const Main = (props) => {
  const token_key = `${localStorage.getItem("token")}`;

  const dispatch = useDispatch();
  const all_list = useSelector((state) => state.post.list);
  const user_info = useSelector((state) => state.user);
  console.log(all_list);
  console.log("user_info: ", user_info);
  //console.log("user_info_seq: ", user_info.user.seq);
  console.log(token_key)

  useEffect(() => {
    // dispatch(postActions.getPostDB());
    console.log("user_info: ", user_info);
  }, []);

  return (
    <HeaderContainer>
      <Banner images={images}></Banner>
      <Wrap>
        {user_info.user === null ? '' : <AllList />}
        <MiddleBanner></MiddleBanner>
        <Oneday></Oneday>
        <Kurlyonly></Kurlyonly>
        <MiddleBanner></MiddleBanner>
        <Sale></Sale>
        {/* <MD></MD> */}
      </Wrap>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  color: "red";
`;

const Wrap = styled.div`
  width: 1050px;
  margin: 0px auto;
`;

export default Main;
