import styles from "styled-components";

export const Header = styles.header`
  min-height: 50px;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  background-color: #fff;
  font-family: Arial;
`;

export const NavButton = styles.span`
  float: left;
  font-size: 16px;
  text-align: center;
  text-decoration: none;
  padding: 14px 10px;

  &:hover {
    color: ${(props) => props.focusColor};
    cursor: pointer;
  }
`;

export const DialogButton = styles.button`
  font-size: 16px;
  border: none;
  outline: none;
  padding: 14px 10px;
  background-color: inherit;
  font-family: inherit;
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    color: ${props => props.focusColor};
    cursor: pointer;
  }
`;

export const Dialog = styles.div`
  float: left;
  overflow: hidden;
`;

export const Background = styles.div`
  border: solid 2px #dc291e;
`