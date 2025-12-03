"use client";

import MediaQuery, { useMediaQuery } from "react-responsive";

export const setPagination = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return {
    page: 1,
    itemsPerPage: isMobile ? 6 : 18,
  };
};
