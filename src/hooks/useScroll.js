import { useEffect } from "react";

export const useScroll= () => {
    useEffect(() => {
        try {
          window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth',
          });
        } catch (error) {}
      }, []);
    
};