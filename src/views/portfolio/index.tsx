import React, { useEffect, useState } from "react";
import {
  Container,
  Box,
  Stack,
  Typography,
  useTheme,
  Grow,
  Grid,
  styled,
} from "@mui/material";
import { StyledDivider } from "../../components/CustomUi/Divider/index";
import Galaxy from "../../assets/images/projects/1.jpg";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";

// // Import Swiper styles
import "./styles.scss";
import { BREAKPOINT } from "../../constant";
const projects = [
  {
    id: "proj-0000",
    name: "Galaxy Fighters",
    description: "This is NFT Game site.",
    url: "https://galaxyfightclub.com/",
    skills: ["Blockchain", "React", "Binance Smart Chain", "Dapps", "Laravel"],
  },
  {
    id: "proj-0001",
    name: "NFT Mint",
    description: "This is NFT mint site",
    url: "https://therapsnft.com/",
    skills: ["Blockchain", "React", "Dapps", "Laravel", "Ethereum"],
  },
  {
    id: "proj-0002",
    name: "Play To Earn",
    description: "This is P2E Game Site.",
    url: "https://www.tokunmonsuta.com",
    skills: [
      "Game Design",
      "Blockchain",
      "React",
      "Binance Smart Chain",
      "Dapps",
    ],
  },
];

const ProjImg = styled(Box)(({ theme }) => ({
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "50%",
  borderRadius: "10px",
}));

const Portfolio = () => {
  const theme = useTheme();
  const [isMount, setIsMount] = useState<boolean>(false);

  const [swiperRef, setSwiperRef] = useState(null);
  const [previewCtn, setPreviewCtn] = useState<number>(3);

  let appendNumber = 4;
  let prependNumber = 1;

  useEffect(() => {
    setIsMount(true);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", function () {
      if (window.innerWidth < BREAKPOINT.SM) {
        setPreviewCtn(1);
      } else if (window.innerWidth < BREAKPOINT.MD) {
        setPreviewCtn(2);
      } else {
        setPreviewCtn(3);
      }
    });
  }, []);

  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        justifyContent: "center",
        mt: { xs: 3, md: 6 },
        px: { xs: "3%", md: "100px" },
      }}
      disableGutters
    >
      <Grow
        in={isMount}
        timeout={theme.transitions.duration.enteringScreen}
        easing={theme.transitions.easing.easeOut}
      >
        <Stack
          direction="column"
          spacing={{ xs: 1, md: 2 }}
          sx={{ width: "100%" }}
        >
          <Box>
            <Typography variant="h4">
              <span style={{ color: "white" }}>Creative</span>
              <span style={{ color: theme.selectedColor }}> Portfolio</span>
            </Typography>
            <StyledDivider sx={{ mt: 2 }} />
          </Box>
          <Swiper
            slidesPerView={previewCtn}
            centeredSlides={true}
            spaceBetween={50}
            pagination={{
              type: "fraction",
            }}
            navigation={true}
            className="mySwiper"
          >
            {[1, 2, 3, 4, 5, 6].map((proj, index) => (
              <SwiperSlide key={index}>
                <img
                  style={{ borderRadius: "10px" }}
                  key={index}
                  src={require(`../../assets/images/projects/${index + 1}.jpg`)}
                ></img>
              </SwiperSlide>
            ))}
          </Swiper>

          <Box></Box>
        </Stack>
      </Grow>
    </Container>
  );
};

export default Portfolio;
