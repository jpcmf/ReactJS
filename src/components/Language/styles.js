import styled from 'styled-components';

import colors from '~/styles/colors';

export const Container = styled.div`
  border: solid 1px ${colors.mistGrey};
  border-radius: 4px;

  ul {
    padding: 4px;

    li {
      display: inline-block;

      a {
        align-items: center;
        border-radius: 2px;
        color: ${colors.coolGrey};
        display: flex;
        font-size: 12px;
        font-weight: 400;
        height: 32px;
        justify-content: center;
        text-decoration: none;
        width: 32px;
        transition: background-color 300ms ease;

        &:hover,
        &:focus {
          background-color: ${colors.black};
          color: ${colors.white};
          font-weight: 600;
        }
      }
    }
  }
`;
