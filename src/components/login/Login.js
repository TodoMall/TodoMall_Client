import React, { useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "../../api/axios";
import requests from "../../api/request";

const Login = () => {
  useEffect(() => {
    const access_token = sessionStorage.getItem("access");
    if (access_token) {
      axios
        .get("https://kapi.kakao.com/v1/user/access_token_info", {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        })
        .then((res) => {
          console.log(res);
          if (res.status == 200) {
            const refresh_token = localStorage.getItem("refresh");
            axios
              .post(
                `https://kauth.kakao.com/oauth/token?grant_type=refresh_token&client_id=${process.env.REACT_APP_KAKAO_CLIENT_ID}&refresh_token=${refresh_token}`,
                {
                  headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                  },
                }
              )
              .then((res) => {
                sessionStorage.setItem("access", res.data.access_token);
                localStorage.setItem("ID", res.data.id_token);
                navigate("/todobox");
              })
              .catch((err) => {
                sessionStorage.removeItem("access");
                localStorage.removeItem("refresh");
                localStorage.removeItem("ID");
              });
          } else {
            sessionStorage.removeItem("access");
            localStorage.removeItem("refresh");
            localStorage.removeItem("ID");
          }
        })
        .catch((err) => {
          sessionStorage.removeItem("access");
          localStorage.removeItem("refresh");
          localStorage.removeItem("ID");
        });
    }
  });

  const navigate = useNavigate();

  const kakaoLogin = () => {
    window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_KAKAO_REDIRECT_URI}&response_type=code`;
  };

  const getToken = async () => {
    const request = await axios.get(requests.testLogin, {
      "Content-Type": "application/x-www-form-urlencoded",
    });
    localStorage.setItem("token", request.data.token);
  };

  return (
    <Container>
      {/* <BackgroundTop src="/images/main_background_2.svg" /> */}
      <BackgroundBottom src="/images/main_background.svg" />
      <Logo src="/images/logo_text.png" />
      {/* <LoginImage src="/images/login_image.svg" /> */}
      <Footer>
        <LoginButton
          onClick={() => {
            // getToken();
            // navigate("/agreement");
            kakaoLogin();
          }}
          src="/images/kakao_login.png"
        />
        {/* <LoginButton
          onClick={() => {
            getToken();
            navigate("/agreement");
          }}
          src="/images/google_login.png"
        /> */}
        {/* <LoginButton
        onClick={() => {
          navigate("/agreement");
        }}
        src="/images/apple_login.png"
      /> */}
      </Footer>
      {/* <LoginDesign /> */}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fbfbfb;
`;

const BackgroundTop = styled.img`
  position: fixed;
  width: 100vw;
  top: 0;
  z-index: 10000;
`;

const BackgroundBottom = styled.img`
  position: fixed;
  width: 103vw;
  max-width: 450px;
  bottom: -50px;
`;

const Logo = styled.img`
  width: 220px;
  position: fixed;
  margin: 0 auto;
  bottom: 75%;
`;

const LoginImage = styled.img`
  position: fixed;
  top: 18%;
  width: 350px;
  z-index: 10000;
  /* margin-bottom: 10vh; */
`;

const Footer = styled.div`
  position: fixed;
  bottom: 5vh;
  margin: 0 auto;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 1;
`;

const LoginButton = styled.img`
  width: 340px;
  margin-bottom: 16px;
  /* border-radius: 15px; */
`;

// const LoginDesign = styled.div`
//   position: fixed;
//   width: 130vw;
//   height: 50vh;
//   left: auto;
//   /* top: 575px; */
//   bottom: -15vh;
//   background: #f3f1ff;
//   z-index: 0;
//   border-radius: 300%;
// `;

export default Login;
