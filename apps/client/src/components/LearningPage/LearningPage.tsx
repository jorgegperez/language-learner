import { Spin } from "antd";
import { useLearningForm } from "../../hooks";
import {
  ExerciseStatementWrapper,
  SpinnerWrapper,
  TitleWrapper,
  Wrapper,
} from "./LearningPage.styles";
import { AnswerInput } from "./AnswerInput";

export const LearningPage = () => {
  const { step, exercise } = useLearningForm();

  if (step !== 1) return null;

  const { english } = exercise ?? {};

  return (
    <Wrapper>
      <TitleWrapper>Translate the following sentence</TitleWrapper>
      {!english ? (
        <SpinnerWrapper>
          <Spin />
        </SpinnerWrapper>
      ) : (
        <>
          <ExerciseStatementWrapper>{english}</ExerciseStatementWrapper>
          <AnswerInput />
        </>
      )}
    </Wrapper>
  );
};
