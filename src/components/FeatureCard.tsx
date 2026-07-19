import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowRight, Check } from 'lucide-react';
import { cn } from './animations';

export function FeatureCard({
  num,
  title,
  iconUrl,
  items,
  index,
}: {
  num: string;
  title: string;
  iconUrl: string;
  items: string[];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current) return;
    gsap.fromTo(
      cardRef.current,
      { scale: 0.94, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.8,
        delay: index * 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top 90%',
          once: true,
        },
      }
    );
  }, [index]);

  return (
    <div
      ref={cardRef}
      className="glass-card flex flex-col h-full bg-[var(--color-v-card)]"
    >
      <div className="flex-1">
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded bg-black/50 border border-white/5 flex items-center justify-center mb-6 overflow-hidden">
          <img src={iconUrl} alt={title} className="w-full h-full object-cover" />
        </div>
        <h3 className="font-ui text-xl sm:text-2xl font-semibold mb-6 flex items-center gap-2">
          {title} <span className="text-[var(--color-v-muted)] text-sm">{num}</span>
        </h3>
        <ul className="space-y-4">
          {items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-[var(--color-v-muted)] font-body">
              <Check className="w-4 h-4 text-[var(--color-v-primary)] shrink-0 mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-8 pt-6 border-t border-[var(--color-v-border)]">
        <a href="#" className="inline-flex items-center gap-2 text-sm font-ui font-medium text-[var(--color-v-text)] group transition-colors hover:text-[var(--color-v-primary)]">
          Learn more
          <ArrowRight className="w-4 h-4 -rotate-45 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </a>
      </div>
    </div>
  );
}
