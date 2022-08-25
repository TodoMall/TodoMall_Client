import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const Header = ({ title }) => {
  const navigate = useNavigate();
  return (
    <Container>
      <BackArrow
        onClick={() => {
          navigate(-1);
        }}
      />
      <HeaderTitle>{title}</HeaderTitle>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #fbfbfb;
`;

const BackArrow = styled(ArrowBackIosIcon)`
  height: 56px;
  color: black;
  margin-left: 5vw;
`;
const HeaderTitle = styled.p`
  font-size: 20px;
  font-family: "PretendardMedium";
  display: block;
  flex-grow: 1;
  text-align: center;
  margin-right: 40px;
`;

export default Header;
