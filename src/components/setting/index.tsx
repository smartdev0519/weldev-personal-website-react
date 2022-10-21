import React, {
  useState,
  useRef,
  ReactComponentElement,
  ReactElement,
  ReactHTMLElement,
  ReactNode,
} from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import {
  Box,
  Container,
  Divider,
  Slide,
  Stack,
  Typography,
  Grid,
  Input,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { styled, keyframes } from "@mui/material/styles";
import AdjustIcon from "@mui/icons-material/Adjust";
import { COLORS } from "../../constant";
import useAppTheme from "../../hooks/useAppTheme";
import CursorMark from "../Icons/cursors";
import { useHref } from "react-router-dom";

const faSpin = keyframes`
    0%{transform: rotate(0deg);}
    20%{transform: rotate(72deg);}
    40%{transform: rotate(144deg);}
    60%{transform: rotate(216deg);}
    80%{transform: rotate(288deg);}
    100%{transform: rotate(360deg);}
`;

const StyledSettingsIcon = styled(SettingsIcon)(({ theme }) => ({
  fontSize: "xx-large",
  animation: `${faSpin} 2s linear infinite`,
}));

const SettingPanelContainer = styled(Box)(({ theme }) => ({
  width: "200px",
  position: "fixed",
  right: "-200px",
  background: theme.background.primary.dark,
  transition: `right ${theme.transitions.duration.leavingScreen}ms ${theme.transitions.easing.easeIn}`,
  borderBottomLeftRadius: theme.shape.borderRadius * 2,
}));

const StyledPanelTypography = styled(Typography)(({ theme }) => ({
  color: "white",
  fontWeight: "600",
  fontSize: theme.fontSize.sm,
}));

const Setting = () => {
  const theme = useTheme();
  const { setSelectedColor } = useAppTheme();
  const [settingFlag, setSettingFlag] = useState<boolean>(false);
  const openLogin = useRef<HTMLInputElement | null>(null);
  const history = useHref("/login");
  const handleSettingPanel = () => {
    setSettingFlag((prev) => {
      return !prev;
    });
    if (openLogin.current) openLogin.current.focus();
  };

  const gotoLogin = () => {
    console.log("aaaa");
  };

  const handleSelectedColor = (color: string) => {
    if (setSelectedColor) setSelectedColor(color);
  };

  return (
    <Container
      maxWidth="md"
      disableGutters
      sx={{
        display: "flex",
        justifyContent: "end",
        mt: "6%",
        mx: 0,
      }}
    >
      <SettingPanelContainer
        id="settingPanel"
        sx={{ right: settingFlag ? "-200px" : "0px" }}
      >
        <Box
          sx={{
            position: "absolute",
            padding: "8px 8px 3px",
            background: theme.background.primary.dark,
            right: "100%",
            borderTopLeftRadius: theme.shape.borderRadius * 2,
            borderBottomLeftRadius: theme.shape.borderRadius * 2,
            cursor: "pointer",
          }}
          onClick={handleSettingPanel}
        >
          <StyledSettingsIcon sx={{ color: theme.palette.grey[200] }} />
        </Box>
        <Stack direction="column" spacing={3} sx={{ mt: 2, padding: 3 }}>
          <Box>
            <StyledPanelTypography variant="subtitle2">
              Unlimited Color
            </StyledPanelTypography>
            <Divider sx={{ background: "grey" }} />
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Grid container rowSpacing={1} columnSpacing={-1}>
              {COLORS.map((color) => (
                <Grid item key={color} xs={3}>
                  <Box
                    key={color}
                    sx={{
                      background: color,
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      cursor: "pointer",
                    }}
                    onClick={() => handleSelectedColor(color)}
                  ></Box>
                </Grid>
              ))}
            </Grid>
          </Box>
          <Box>
            <Box>
              <StyledPanelTypography variant="subtitle2">
                Magic Cursor
              </StyledPanelTypography>
              <Divider sx={{ background: "grey" }} />
            </Box>
            <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
              <AdjustIcon
                sx={{
                  width: "30px",
                  height: "30px",
                  cursor: "pointer",
                  color: "#fff",
                }}
              />
              <CursorMark width="40px" height="40px" color="#ffffff" />
              <input
                ref={openLogin}
                onKeyDown={gotoLogin}
                style={{
                  width: "1px",
                  height: "1px",
                  border: "none",
                  background: "#222",
                }}
              />
            </Stack>
          </Box>
        </Stack>
      </SettingPanelContainer>
    </Container>
  );
};

export default Setting;
