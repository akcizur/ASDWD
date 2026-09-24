import React from 'react';

const Hero = () => (
  <section className="space-y-4">
    <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-[1.1] text-neutral-900 dark:text-white">
      Markdown &rarr; HTML &rarr; GitHub Pages
    </h2>
    <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 font-normal leading-relaxed max-w-2xl">
      Tento web je generovaný automaticky z vašeho repositáře. Stačí psát v Markdownu a vše ostatní se stane samo.
    </p>
    <div>
      <code className="px-3 py-1 text-xs font-mono font-medium bg-neutral-100 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-200 rounded-lg inline-block">
        content/index.md
      </code>
    </div>
  </section>
);
export default Hero;
