import styled from 'styled-components';

import colors from '~/styles/colors';

export const Container = styled.header`
  align-items: center;
  background-color: ${colors.white};
  box-shadow: 0px 3px 6px 0px rgba(138, 151, 177, 0.16);
  display: flex;
  height: 62px;
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 17px;
  align-items: center;
  width: 100%;

  img {
    max-width: 132px;
  }
`;
