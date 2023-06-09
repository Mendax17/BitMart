// 아이디 형식: 최소 6자 이상, 알파벳 소문자(a~z), 숫자(0~9)를 포함
export const userIdCheck = (userId) => {
  let _reg = /^(?!(?:[0-9]+)$)([a-zA-Z]|[0-9a-zA-Z]){6,}$/;
  return _reg.test(userId);
};

//비번: 10자 이상, 최소 하나의 문자, 하나의 숫자 및 하나의 특수 문자
export const pwdCheck = (password) => {
  // 10글자 이상 입력
  if (password.length < 10) {
    return false;
  }

  // 영문/숫자/특수문자(공백 제외)만 허용, 2개 이상의 조합
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z\d\s]).{2,}$/;
  if (!passwordRegex.test(password)) {
    return false;
  }

  // 동일한 숫자 3개 이상 연속 사용 불가
  const consecutiveNumbersRegex = /(.)\1\1/;
  if (consecutiveNumbersRegex.test(password)) {
    return false;
  }

  return true;
};


// 닉네임(이름) 형식: 한글 또는 알파벳 대소문자(a~z, A~Z)
export const nicknameCheck = (nickname) => {
  let _reg = /^[가-힣a-zA-Z]+$/;
  return _reg.test(nickname);
};

// 이메일 형식
export const emailCheck = (email) => {
  let _reg =
    /^[0-9a-zA-Z]([-_.0-9a-zA-Z])*@[0-9a-zA-Z]([-_.0-9a-zA-Z])*.([a-zA-Z])*/;
  return _reg.test(email);
};
