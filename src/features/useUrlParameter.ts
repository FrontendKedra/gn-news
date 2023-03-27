import { useLocation } from "react-router-dom";

export const useUrlParameter = (paramName: string) => {
  const location = useLocation();
  return new URLSearchParams(location.search).get(paramName);
};