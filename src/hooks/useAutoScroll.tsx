
import { useEffect } from 'react';
import { type CarouselApi } from '@/components/ui/carousel';

export const useAutoScroll = (api: CarouselApi | undefined, interval: number = 3000) => {
  useEffect(() => {
    if (!api) return;

    const timer = setInterval(() => {
      api.scrollNext();
    }, interval);

    return () => clearInterval(timer);
  }, [api, interval]);
};
