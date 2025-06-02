// SmoothScroll.js
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

const SmoothScroll = () => {
  useEffect(() => {
    const links = document.querySelectorAll('a[href^="#"]');

    const handleClick = (e) => {
      const target = document.querySelector(e.currentTarget.getAttribute('href'));
      if (target) {
        e.preventDefault();
        gsap.to(window, {
          duration: 1,
          scrollTo: { y: target, offsetY: 70 }, // adjust offsetY as per sticky navbar
          ease: 'power2.out',
        });
      }
    };

    links.forEach((link) => link.addEventListener('click', handleClick));

    return () => {
      links.forEach((link) => link.removeEventListener('click', handleClick));
    };
  }, []);

  return null; // This component doesn’t render anything
};

export default SmoothScroll;
