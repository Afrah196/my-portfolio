import { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';
import './NameWriter.css';

const NameWriter = ({ text, texts, onComplete, className = '', typingSpeed = 80, pauseDuration = 2500, deletingSpeed = 40, showGlitterEffect = false }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [showGlitter, setShowGlitter] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const containerRef = useRef(null);
  const glitterIntervalRef = useRef(null);
  const timeoutRef = useRef(null);

  // Support both single text and array of texts
  const textArray = texts || (text ? [text] : []);
  const currentText = textArray[currentTextIndex] || '';

  // Reset displayed text when text index changes
  useEffect(() => {
    if (currentText && !isDeleting) {
      setDisplayedText('');
    }
  }, [currentTextIndex, currentText]);

  useEffect(() => {
    if (!currentText) {
      setDisplayedText('');
      return;
    }

    const typeChar = () => {
      if (isDeleting) {
        if (displayedText === '') {
          setIsDeleting(false);
          // Move to next text or loop
          if (textArray.length > 1) {
            setCurrentTextIndex((prev) => (prev + 1) % textArray.length);
          }
          return;
        }
        timeoutRef.current = setTimeout(() => {
          setDisplayedText(prev => prev.slice(0, -1));
        }, deletingSpeed);
      } else {
        if (displayedText.length < currentText.length) {
          timeoutRef.current = setTimeout(() => {
            setDisplayedText(prev => {
              const nextChar = currentText[prev.length];
              return nextChar ? prev + nextChar : prev;
            });
          }, typingSpeed);
        } else {
          // Finished typing current text
          if (showGlitterEffect && !showGlitter && textArray.length === 1) {
            setShowGlitter(true);
            if (onComplete) onComplete();
            createGlitterParticles();
          }
          
          // If multiple texts, wait then delete
          if (textArray.length > 1) {
            timeoutRef.current = setTimeout(() => {
              setIsDeleting(true);
            }, pauseDuration);
          }
        }
      }
    };

    typeChar();

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [displayedText, currentText, isDeleting, textArray.length, typingSpeed, pauseDuration, deletingSpeed, showGlitterEffect, showGlitter, onComplete]);

  const createGlitterParticles = () => {
    if (!containerRef.current || !showGlitterEffect) return;
    
    const container = containerRef.current;
    const rect = container.getBoundingClientRect();
    
    glitterIntervalRef.current = setInterval(() => {
      for (let i = 0; i < 3; i++) {
        const particle = document.createElement('div');
        particle.className = 'glitter-particle';
        
        const x = Math.random() * rect.width;
        const y = Math.random() * rect.height;
        
        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;
        particle.style.setProperty('--delay', Math.random() * 0.5);
        
        container.appendChild(particle);
        
        gsap.to(particle, {
          y: y - 100,
          x: x + (Math.random() - 0.5) * 50,
          opacity: 0,
          scale: 0,
          rotation: Math.random() * 360,
          duration: 1.5,
          ease: 'power2.out',
          onComplete: () => particle.remove()
        });
      }
    }, 200);
  };

  useEffect(() => {
    return () => {
      if (glitterIntervalRef.current) {
        clearInterval(glitterIntervalRef.current);
      }
      const particles = containerRef.current?.querySelectorAll('.glitter-particle');
      particles?.forEach(p => p.remove());
    };
  }, []);

  if (!currentText) return null;

  return (
    <div ref={containerRef} className={`name-writer-container ${className}`}>
      <span className="name-writer-text">
        {displayedText}
        {displayedText.length < currentText.length && !isDeleting && <span className="name-writer-cursor">|</span>}
      </span>
      {showGlitter && showGlitterEffect && <div className="glitter-overlay"></div>}
    </div>
  );
};

export default NameWriter;

