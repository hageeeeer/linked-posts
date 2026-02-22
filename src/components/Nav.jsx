import React, { useContext } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
} from "@heroui/react";
import { NavLink, useNavigate } from "react-router-dom";
import { authContext } from "../context/AuthContext";

export const AcmeLogo = () => {
  return (
    <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
      <path
        clipRule="evenodd"
        d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const { isLogin, setLogin } = useContext(authContext);

  const navigate = useNavigate()

  function logOut() {
    setLogin(null);
    localStorage.removeItem('token')
    navigate('/')
  }

  const links = ["Home", "Profile"];

  const auths = [
    { path: "/", link: "Login" },
    { path: "/register", link: "Register" },
  ];

  const menuItems = ["Profile", "Home", "Login", "Register", "Log Out"];

  return (
    <Navbar
      maxWidth="xl"
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold text-inherit">ACME</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold text-inherit">ACME</p>
        </NavbarBrand>

        {isLogin &&
          links.map((link) => (
            <NavbarItem key={link}>
              <NavLink color="foreground" to={`/${link.toLowerCase()}`}>
                {link}
              </NavLink>
            </NavbarItem>
          ))}
      </NavbarContent>

      {!isLogin && (
        <NavbarContent justify="end" className="hidden sm:flex gap-4">
          {auths.map((link) => (
            <NavbarItem key={link}>
              <NavLink color="foreground" to={`${link.path}`}>
                {link.link}
              </NavLink>
            </NavbarItem>
          ))}
        </NavbarContent>
      )}

      {isLogin && (
        <NavbarContent justify="end" className="hidden sm:flex gap-4">
          <NavbarItem>
            <p className="cursor-pointer" onClick={logOut}>LogOut</p>
          </NavbarItem>
        </NavbarContent>
      )}

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <NavLink
              className="w-full"
              color={
                index === 2
                  ? "warning"
                  : index === menuItems.length - 1
                    ? "danger"
                    : "foreground"
              }
              to={`/${item}`}
              size="lg"
            >
              {item}
            </NavLink>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
