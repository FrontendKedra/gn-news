import { useState, useEffect } from "react";

export const useCurrentFormattedDate = (isEnglish: boolean) => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const intervalID = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(intervalID);
  }, []);

  const formattedDate = dateTime.toLocaleDateString(
    isEnglish ? "en-US" : "pl-PL",
    {
      weekday: "long",
      day: "numeric",
      month: "long",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    }
  );

  return formattedDate;
};
