import React, { useState, useEffect } from "react";

function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const interval = setInterval(() => {
      const newYear = new Date().getFullYear();
      if (newYear !== currentYear) {
        setCurrentYear(newYear);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [currentYear]);
  return <footer>© {currentYear}</footer>;
}

export default Footer;
