import Styled from 'styled-components';

export const HeaderComponent = Styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  align-self: end;
  padding: 25px 35px;

  > img {
   width: 35px;
  }

  > div {
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    width: 200px;
  }
`;
