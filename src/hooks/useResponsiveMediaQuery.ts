import { useMediaQuery } from "usehooks-ts";

const useResponsiveMediaQuery = () => {
  const isExtraSmall: boolean = useMediaQuery("(max-width: 639px)");
  const isSmall: boolean = useMediaQuery(
    "(min-width: 640px) and (max-width: 767px)"
  );
  const isMedium: boolean = useMediaQuery(
    "(min-width: 768px) and (max-width: 1023px)"
  );
  const isLarge: boolean = useMediaQuery(
    "(min-width: 1024px) and (max-width: 1279px)"
  );
  const isExtraLarge: boolean = useMediaQuery(
    "(min-width: 1280px) and (max-width: 1535px)"
  );
  const is2Xl: boolean = useMediaQuery("(min-width: 1536px)");

  return { isExtraSmall, isSmall, isMedium, isLarge, isExtraLarge, is2Xl };
};

export default useResponsiveMediaQuery;
