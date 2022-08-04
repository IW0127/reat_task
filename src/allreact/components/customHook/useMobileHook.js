import { useEffect, useState } from 'react';

function useMobileHook() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const userAgent =
      typeof window.navigator === 'undefined' ? '' : navigator.userAgent;
    const patten =
      /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i;
    const mobile = patten.test(userAgent);
    setIsMobile(mobile);
  }, []);

  return { isMobile };
}

export default useMobileHook;
