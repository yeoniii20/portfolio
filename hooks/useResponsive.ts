import { useMediaQuery, useTheme } from "@mui/material";

// 반응형 웹을 구현하기 위한 hooks
export const useResponsive = () => {
  const theme = useTheme();
  const isClient = useMediaQuery(`(min-width: 0px)`);
  const isMobile = useMediaQuery(`(max-width: 375px)`);
  const isTablet = useMediaQuery(`(max-width: 1350px)`);

  const responsiveCSS = <T, M>(nonMobile: T, mobile: M) => {
    if (isTablet) return mobile;
    else return nonMobile;
  };
  return { isClient, isMobile, isTablet, responsiveCSS };
};
