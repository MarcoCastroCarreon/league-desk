import React from "react";
import { NavButton, Header, Dialog, DialogButton } from "../index.styles";
import logo from "../img/league-of-legends-logo.png";
import { Menu, MenuItem } from "@material-ui/core";

const Navbar = () => {
  const handleRedirect = (url) => {
    window.open(url, "_blank");
    handleClose();
  };

  const [anchorElement, setAnchorElement] = React.useState(null);

  const handleClose = () => {
    setAnchorElement(null);
  };

  const handleMenu = (event) => {
    setAnchorElement(event.currentTarget);
  };
  const itemsList = [
    {
      id: "1",
      url: "https://www.github.com/MarcoCastroCarreon",
      name: "Github",
    },
    {
      id: "2",
      url:
        "https://www.linkedin.com/in/marco-antonio-castro-carreon-10274a1a5/",
      name: "LinkedIn",
    },
  ];

  return (
    <Header>
      <div>
        <Dialog>
          <DialogButton focusColor="#dc291e" onClick={handleMenu}>
            Author Social Media
          </DialogButton>
        </Dialog>
        <NavButton
          focusColor="#dc291e"
          onClick={() =>
            handleRedirect(
              "https://www.linkedin.com/in/marco-antonio-castro-carreon-10274a1a5/"
            )
          }
        >
          Author
        </NavButton>
      </div>
      <div>
        <img
          src={logo}
          alt="logo"
          width="30"
          height="30"
          style={{ float: "left", marginLeft: "3px", marginTop: "8px" }}
        />
        <span style={{ float: "left", padding: "14px 7px" }}>
          League Desk
        </span>
      </div>
      <Menu
        open={Boolean(anchorElement)}
        anchorEl={anchorElement}
        onClose={handleClose}
      >
        {itemsList.length &&
          itemsList.map((item) => {
            return (
              <MenuItem key={item.id} onClick={() => handleRedirect(item.url)}>
                {item.name}
              </MenuItem>
            );
          })}
      </Menu>
    </Header>
  );
};

export default Navbar;
