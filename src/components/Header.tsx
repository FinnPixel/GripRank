import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Button, IconButton, Menu, MenuItem, MenuList } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { MouseEvent, useState } from "react";

const Header = () => {
  const navigate = useNavigate();

  function scrollToTop(scrollInterval: number) {
    const scrollStep = -window.scrollY / (500 / 30);
    scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 15);
  }

  const handleClick = (direction: string) => {
    navigate(`/${direction}`);
    let scrollInterval = 0;
    scrollToTop(scrollInterval);
  };

  const [anchorNav, setAnchorNav] = useState<null | HTMLElement>(null);

  function openMenu(event: MouseEvent<HTMLElement>) {
    setAnchorNav(event.currentTarget);
  }

  function closeMenu() {
    setAnchorNav(null);
  }

  return (
    <AppBar
      position="sticky"
      sx={{ backgroundColor: "white", boxShadow: "none" }}
    >
      <Toolbar
        sx={{
          justifyContent: "space-between",
          minHeight: { xs: 74, sm: 74, md: 74 },
        }}
      >
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            flexDirection: "row",
            marginLeft: 30,
          }}
          onClick={() => handleClick("")}
        >
          <Typography
            variant="h6"
            display={{ xs: "none", md: "flex" }}
            sx={{
              marginLeft: 2,
              fontSize: "30px",
              fontWeight: "600",
              fontFamily: "Montserrat",
              letterSpacing: "1px",
              textDecoration: "none",
              cursor: "default",
              color: "black",
            }}
          >
            GRIP RANK
          </Typography>
        </Box>

        <Box display={{ xs: "none", md: "flex" }} marginRight={30}>
          <Button
            onClick={() => handleClick("")}
            sx={{ color: "black", marginLeft: 1, marginRight: 1, fontSize: "20px" }}
          >
            Home
          </Button>
          <Button
            onClick={() => handleClick("about")}
            sx={{ color: "black", marginLeft: 1, marginRight: 1, fontSize: "20px" }}
          >
            About
          </Button>
          <Button
            onClick={() => handleClick("skill_trees")}
            sx={{ color: "black", marginLeft: 1, marginRight: 1, fontSize: "20px" }}
          >
            Skill Trees
          </Button>
          <Button
            onClick={() => handleClick("nopage")}
            sx={{ color: "black", marginLeft: 1, marginRight: 1, fontSize: "20px" }}
          >
            Community
          </Button>
        </Box>
        <Box display={{ xs: "flex", md: "none" }}>
          <IconButton size="large" edge="start" onClick={openMenu}>
            <MenuIcon sx={{ color: "black" }} />
          </IconButton>
          <Menu
            anchorEl={anchorNav}
            open={Boolean(anchorNav)}
            onClose={closeMenu}
            sx={{ display: { xs: "flex", md: "none" } }}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
          >
            <MenuList>
              <MenuItem
                onClick={() => {
                  handleClick("");
                  closeMenu();
                }}
              >
                Home
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleClick("about");
                  closeMenu();
                }}
              >
                About
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleClick("locations");
                  closeMenu();
                }}
              >
                Parks
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleClick("community");
                  closeMenu();
                }}
              >
                Community
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>

        <Typography
          variant="h6"
          display={{ xs: "flex", md: "none" }}
          sx={{
            fontSize: "20px",
            fontWeight: "600",
            fontFamily: "Montserrat",
            letterSpacing: "1px",
            textDecoration: "none",
            cursor: "default",
            color: "white",
          }}
          onClick={() => handleClick("")}
        >
          Calisthenics Munich
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
