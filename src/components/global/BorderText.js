import styled from "styled-components";

const BorderText = ({
  children,
  margin,
  width = "50%",
  textAlign = "none",
  fontWeight = "400",
  fontSize = "14px",
  lineHeight = "21px",
}) => {
  return (
    <BorderTag
      width={width}
      margin={margin}
      textAlign={textAlign}
      fontWeight={fontWeight}
      fontSize={fontSize}
      lineHeight={lineHeight}
    >
      {children}
    </BorderTag>
  );
};

export default BorderText;

const BorderTag = styled.p`
  font-family: "Pretendard";
  letter-spacing: -0.01em;
  color: #222222;
  font-size: ${(props) => props.fontSize};
  line-height: ${(props) => props.lineHeight};
  font-weight: ${(props) => props.fontWeight};
  text-align: ${(props) => props.textAlign};
  width: ${(props) => props.width};
  margin: ${(props) => props.margin};
`;
