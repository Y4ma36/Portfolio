import styled from "styled-components";

export const MaxWidthWrapper = styled.div`
  margin: 0 auto;
  max-width: 1450px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  overflow-x: hidden;
`;

export const Title = styled.h1`
  font-size: 70px;
  font-weight: bold;
  font-family: "Kanit", sans-serif;
  margin-top: 70px;
  margin-bottom: 50px;
  color: ${({ color }) => color};
  &::after {
    content: "";
    display: block;
    width: ${({ borderwidth }) => borderwidth};
    border-bottom: 1px solid ${({ bordercolor }) => bordercolor};
    margin: 10px auto;
  }
  @media ${({ theme }) => theme.device.mobile} {
    font-size: 55px;
  }
`;
