import { useLearningForm } from "../../hooks";
import { Wrapper } from "./LearningPage.styles";

export const LearningPage = () => {
  const { step } = useLearningForm();

  if (step !== 1) return null;
  
  return (
    <Wrapper>
      <h1>Learning Page</h1>
    </Wrapper>
  );
};
