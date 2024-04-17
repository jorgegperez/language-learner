import { useProfile } from "../../hooks";
import {
  InfoWrapper,
  LivesWrapper,
  PointsWrapper,
  TitleWrapper,
  Wrapper,
} from "./Toolbar.styles";
import { FaStar, FaHeart } from "react-icons/fa6";

export const Toolbar = () => {
  const { user } = useProfile();

  return (
    <>
      <Wrapper>
        <TitleWrapper>SpanishMate.ai</TitleWrapper>
        <InfoWrapper>
          <LivesWrapper>
            <div>{user?.lives}</div>
            <FaHeart />
          </LivesWrapper>
          <PointsWrapper>
            <div>{user?.points}</div>
            <FaStar />
          </PointsWrapper>
        </InfoWrapper>
      </Wrapper>
    </>
  );
};
