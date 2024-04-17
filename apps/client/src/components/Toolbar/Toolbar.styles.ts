import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  padding: 24px;
  background-image: linear-gradient(to right, purple, blue 100%);
  width: 100%;
  height: fit-content;
  border-top-right-radius: 24px;
  border-top-left-radius: 24px;
  justify-content: space-between;
`;

export const TitleWrapper = styled.div`
  font-size: 24px;
  font-weight: 600;
  color: white;
`;

export const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const PointsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: gold;
  font-weight: 600;
  font-size: 18px;
  padding: 8px;
`;

export const LivesWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: red;
  font-weight: 600;
  font-size: 18px;
  padding: 8px;
`;
