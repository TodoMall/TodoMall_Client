import React from "react";
import styled from "styled-components";
import { MAX_WIDTH } from "../../../constants";

const PlanCurriculum = ({ data }) => {
  return (
    <Container>
      <Header>
        <FirstTitle>커리큘럼</FirstTitle>
      </Header>
      <Body>
        {data.map((session, i) => (
          <>
            <Intro>
              <SessionCount>Session {i + 1}</SessionCount>
              <Title>{session.title}</Title>
            </Intro>
            <Assignment>
              <AssignmentImage src={`/images/assignment_icon.svg`} />
              <AssignmentTitle>{session.missionTitle}</AssignmentTitle>
            </Assignment>
            <Todos>
              {session.todos.map((todo) => (
                <Todo>
                  <TodoTitle>{todo.title}</TodoTitle>
                </Todo>
              ))}
            </Todos>
          </>
        ))}
      </Body>
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;
  width: 100vw;
  max-width: ${MAX_WIDTH};
`;

const Header = styled.div``;

const FirstTitle = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  margin-bottom: 25px;
`;

const Body = styled.div``;

const Intro = styled.div``;

const SessionCount = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 14px;
  color: #b1b1b1;
  margin-bottom: 15px;
`;

const Title = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 16px;
  color: #000000;
  margin-bottom: 20px;
`;

const Assignment = styled.div`
  background: #fff2e2;
  border-radius: 8px;
  height: 50px;
  display: flex;
  justify-content: left;
  align-items: center;
`;

const AssignmentImage = styled.img`
  margin-left: 20px;
`;

const AssignmentTitle = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 14px;
  color: #ff9900;
  margin-left: 15px;
`;

const Todos = styled.div`
  margin: 30px 0;
`;

const Todo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 30px 0;
`;

const TodoTitle = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 14px;
`;

export default PlanCurriculum;
