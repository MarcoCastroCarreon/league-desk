import styles from "styled-components";

export const Header = styles.header`
  min-height: 50px;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  background-color: #fff;
  font-family: Arial;
`;

export const Logo = styles.img`
  src: url('./img/white-thunder.png');
  float: right;
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

export const DropdownContentContainer = styles.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
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

export const DropdownContentItem = styles.span`
  float: none;
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;

  &:hover {
    background-color: #ddd;
    cursor: pointer;
  }
`;

export const Dialog = styles.div`
  float: left;
  overflow: hidden;
`;