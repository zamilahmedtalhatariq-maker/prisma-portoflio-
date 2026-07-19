import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function WordsPullUp({
  text,
  className,
  showAsterisk = false,
}: {
  text: string;
  className?: string;
  showAsterisk?: boolean;
}) {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!container.current) return;
    const words = container.current.querySelectorAll('.word-pull');
    gsap.fromTo(
      words,
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.08,
        duration: 1.2,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: container.current,
          start: 'top 85%',
          once: true,
        },
      }
    );
  }, [text]);

  const words = text.split(' ');

  return (
    <div ref={container} className={cn('flex flex-wrap', className)}>
      {words.map((word, i) => {
        const isLast = i === words.length - 1;
        return (
          <div key={i} className="overflow-hidden inline-block pb-4 -mb-4">
            <span className="word-pull inline-block relative pr-[0.3em]">
              {word}
              {showAsterisk && isLast && (
                <span className="absolute top-[0.1em] right-0 text-[0.31em]">
                  *
                </span>
              )}
            </span>
          </div>
        );
      })}
    </div>
  );
}

export function WordsPullUpMultiStyle({
  segments,
  className,
}: {
  segments: { text: string; className?: string }[];
  className?: string;
}) {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!container.current) return;
    const words = container.current.querySelectorAll('.word-pull');
    gsap.fromTo(
      words,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.08,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: container.current,
          start: 'top 85%',
          once: true,
        },
      }
    );
  }, [segments]);

  return (
    <div ref={container} className={cn('flex flex-wrap justify-center', className)}>
      {segments.map((segment, segIdx) => {
        const words = segment.text.split(' ');
        return (
          <React.Fragment key={segIdx}>
            {words.map((word, wordIdx) => (
              <div key={`${segIdx}-${wordIdx}`} className="overflow-hidden inline-block mr-[0.3em]">
                <span className={cn('word-pull inline-block', segment.className)}>
                  {word}
                </span>
              </div>
            ))}
          </React.Fragment>
        );
      })}
    </div>
  );
}

export function AnimatedLetter({ children }: { children: string }) {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!container.current) return;
    const chars = container.current.querySelectorAll('.scroll-char');
    
    // Instead of Framer Motion useScroll, we use GSAP ScrollTrigger with scrub
    gsap.fromTo(
      chars,
      { opacity: 0.2 },
      {
        opacity: 1,
        stagger: 0.05,
        scrollTrigger: {
          trigger: container.current,
          start: 'top 80%',
          end: 'bottom 50%',
          scrub: true,
        },
      }
    );
  }, [children]);

  return (
    <div ref={container} className="inline">
      {children.split('').map((char, i) => (
        <span key={i} className="scroll-char transition-opacity duration-75">
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </div>
  );
}

export function FadeUp({ children, delay = 0, y = 40, className }: { children: React.ReactNode, delay?: number, y?: number, className?: string }) {
  const container = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!container.current) return;
    gsap.fromTo(
      container.current,
      { y, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        delay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: container.current,
          start: 'top 85%',
          once: true,
        },
      }
    );
  }, [delay, y]);

  return (
    <div ref={container} className={className}>
      {children}
    </div>
  );
}

export function AnimatedWordmark({ text, className }: { text: string; className?: string }) {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!container.current) return;
    const chars = container.current.querySelectorAll('.char');
    gsap.fromTo(
      chars,
      { opacity: 0, filter: 'blur(8px)', y: 24 },
      {
        opacity: 1,
        filter: 'blur(0px)',
        y: 0,
        stagger: 0.025,
        duration: 0.7,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: container.current,
          start: 'top 90%',
          once: true,
        },
      }
    );
  }, [text]);

  return (
    <div ref={container} className={cn('flex', className)}>
      {text.split('').map((char, i) => (
        <span key={i} className="char inline-block">
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </div>
  );
}
