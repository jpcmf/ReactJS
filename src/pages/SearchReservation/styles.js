import styled from 'styled-components';
import { darken } from 'polished';

import colors from '~/styles/colors';
import { device } from '~/styles/device';

export const Container = styled.div`
  height: calc(100% - 62px);
  display: flex;
  align-items: center;
`;

export const Content = styled.div`
  max-width: 812px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  color: ${colors.white};
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  font-weight: 400;

  span {
    font-weight: 700;
  }
`;

export const Box = styled.div`
  background-color: ${colors.white};
  border-radius: 4px;
  box-shadow: 0px 3px 6px 0px rgba(243, 255, 239, 0.16);
  margin-left: 15px;
  margin-right: 15px;
  margin-top: 45px;
  padding: 40px 17px 29px 17px;
  text-align: center;

  @media ${device.laptop} {
    margin-left: 0;
    margin-right: 0;
    padding: 42px 33px 29px 33px;
  }

  form {
    width: 100%;

    input {
      border-radius: 2px;
      border: solid 1px ${colors.mistGrey};
      height: 50px;
      padding: 0 16px;
      width: 100%;
    }

    button {
      appearance: none;
      background-color: ${colors.black};
      border: 0;
      border-radius: 2px;
      color: ${colors.white};
      font-weight: 700;
      height: 55px;
      margin-top: 44px;
      transition: background-color 300ms ease;
      width: 100%;

      &:hover {
        background-color: ${props => props && darken(0.1, colors.black)};
      }

      @media ${device.laptop} {
        width: 200px;
      }
    }
  }

  a {
    color: ${colors.coolGrey};
    display: inline-block;
    font-size: 12px;
    line-height: 33px;
    margin-top: 19px;

    @media ${device.laptop} {
      margin-top: 69px;
    }
  }
`;

export const BoxTitle = styled.h2`
  color: ${colors.primary};
  font-size: 16px;
  margin-bottom: 13px;

  @media ${device.laptop} {
    font-size: 24px;
  }
`;
