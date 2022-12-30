import { useParams, useNavigate, useLocation } from "react-router-dom";
import Header from "../global/Header";
import { paymentResultData } from "../../constants";
import styled from "styled-components";
import BorderText from "../global/BorderText";
import ThinText from "../global/ThinText";
import { useState } from "react";

const PaymentResultPage = ({ paymentMethod }) => {
  const { search } = useLocation();
  const queryString = new URLSearchParams(search);
  /* QA를 위한 상태 변경 코드, 머지 전 삭제 예정 */
  const [isSuccess, setIsSuccess] = useState(
    JSON.parse(queryString.get("imp_success"))
  );
  /* 원본 코드 */
  // const isSuccess = JSON.parse(queryString.get("imp_success"));
  const imp_uid = queryString.get("imp_uid");
  const error_msg = queryString.get("error_msg");
  const paymentResponse = {
    name: "한솔빈",
    price: 10000,
    card_name: "롯데카드",
    card_number: "3213-****-****-323*",
    pay_date: "2022.12.02 14:30:32",
  };
  const navigate = useNavigate();
  const { planid } = useParams();
  const PAYMENT_STATUS = isSuccess ? "success" : "fail";
  const price = paymentResponse.price.toLocaleString();

  const { title, iconPath, message, notice, buttonMessage, redirectPath } =
    paymentResultData[PAYMENT_STATUS];

  return (
    <Wrapper>
      <Header title={title} />
      <Icon
        src={iconPath}
        alt=""
        onClick={() => {
          setIsSuccess(!isSuccess);
        }}
      />
      <BorderText
        width="90%"
        textAlign="center"
        fontWeight="700"
        fontSize="18px"
        lineHeight="28px"
        margin="8px 0"
      >
        {message}
      </BorderText>
      <ThinText width="90%" textAlign="center">
        {notice}
      </ThinText>
      {!isSuccess && <EmptyBox />}
      {isSuccess && (
        <PaymentInfoBox>
          <ThinText margin="4px 0">결제 금액</ThinText>
          <BorderText textAlign="right" fontWeight="700px" margin="0 0 4px 0">
            {price}원
          </BorderText>
          <ThinText margin="4px 0">사용자</ThinText>
          <BorderText textAlign="right" fontWeight="700px" margin="0 0 4px 0">
            {paymentResponse.name}
          </BorderText>
          <ThinText margin="4px 0">결제카드</ThinText>
          <BorderText textAlign="right" fontWeight="700px" margin="0 0 4px 0">
            {paymentResponse.card_name}
          </BorderText>
          {paymentMethod === "card" && (
            <>
              <ThinText margin="4px 0">카드번호</ThinText>
              <BorderText
                textAlign="right"
                fontWeight="700px"
                margin="0 0 4px 0"
              >
                {paymentResponse.card_number}
              </BorderText>
            </>
          )}
          <ThinText margin="4px 0">결제 일시</ThinText>
          <BorderText textAlign="right" fontWeight="700px" margin="0 0 4px 0">
            {paymentResponse.pay_date}
          </BorderText>
        </PaymentInfoBox>
      )}
      {!isSuccess && (
        <MoveTodoMallButton onClick={() => navigate("/todomall")}>
          <p>투두몰로 이동</p>
        </MoveTodoMallButton>
      )}
      <Button onClick={() => navigate(redirectPath ?? `/payment/${planid}`)}>
        <p>{buttonMessage}</p>
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #fbfbfb;
`;
const Icon = styled.img`
  margin: 98px 128px 48px 128px;
`;
const EmptyBox = styled.div`
  height: 172px;
`;
const PaymentInfoBox = styled.div`
  width: calc(100% - 32px);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  background-color: white;
  border-radius: 16px;
  margin: 24px 16px;
  padding: 20px;
  height: 172px;
`;
const Button = styled.button`
  width: calc(100% - 32px);
  margin: 0px 16px;
  height: 52px;
  align-items: flex-end;
  background-color: #6b47fd;
  border-radius: 20px;
  border: 1px solid #6b47fd;
  p {
    font-family: Pretendard;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: -0.01em;
    text-align: center;
    color: #ffffff;
  }
`;

const MoveTodoMallButton = styled(Button)`
  margin: 0 0 4px 0;
  border: 1px solid #6b47fd;
  background-color: #fbfbfb;
  p {
    color: #6b47fd;
  }
`;
export default PaymentResultPage;
