import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

function useHomeNavigation() {
  const location = useLocation();
  const [showCountdown, setShowCountdown] = useState(true);
  const [showMenu, setShowMenu] = useState(true);
  const menuOffset = 140;
  const homeRef = useRef(null);
  const preregisterRef = useRef(null);
  const lastScrollY = useRef(0);
  const mapRef = useRef(null);
  const suggestionsRef = useRef(null);
  const usRef = useRef(null);

  const scrollToMap = () => {
    setShowCountdown(false);
    mapRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const scrollToHome = () => {
    setShowCountdown(false);
    homeRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const scrollToPreregister = () => {
    setShowCountdown(false);
    preregisterRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const scrollToUs = () => {
    setShowCountdown(false);
    usRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const scrollToSuggestions = () => {
    setShowCountdown(false);
    suggestionsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 80 || currentScrollY < lastScrollY.current) {
        setShowMenu(true);
      } else {
        setShowMenu(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sectionRefs = {
      '#home': homeRef,
      '#us': usRef,
      '#map': mapRef,
      '#suggestions': suggestionsRef,
      '#preregister': preregisterRef,
    };

    const targetRef = sectionRefs[location.hash];

    if (!targetRef) return;

    setShowCountdown(false);

    let cancelled = false;
    const scrollToTarget = () => {
      if (cancelled) return;

      const target = targetRef.current;
      if (!target) return;

      const targetTop = target.getBoundingClientRect().top + window.scrollY - menuOffset;
      window.scrollTo({
        top: Math.max(targetTop, 0),
        left: 0,
        behavior: 'instant',
      });

      if (location.hash === '#map' && window.scrollY > 0) {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      }
    };

    const frame1 = requestAnimationFrame(() => {
      const frame2 = requestAnimationFrame(scrollToTarget);
      if (cancelled) cancelAnimationFrame(frame2);
    });

    return () => {
      cancelled = true;
      cancelAnimationFrame(frame1);
    };
  }, [location.hash]);

  return {
    homeRef,
    mapRef,
    preregisterRef,
    scrollToHome,
    scrollToMap,
    scrollToPreregister,
    scrollToSuggestions,
    scrollToUs,
    setShowCountdown,
    showCountdown,
    showMenu,
    suggestionsRef,
    usRef,
  };
}

export default useHomeNavigation;
