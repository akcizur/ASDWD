import React, { useEffect } from 'react';
import { useBlog } from '../context/BlogContext';

const ButtonGroup = ({ options, currentValue, onChange }) => (
  <div className="grid grid-cols-3 gap-2">
    {options.map((opt) => (
      <button
        key={opt.value}
        onClick={() => onChange(opt.value)}
        aria-pressed={currentValue === opt.value}
        className={'py-2 px-3 rounded-lg border font-medium text-xs transition-all ' + (
          currentValue === opt.value
            ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 border-transparent'
            : 'border-neutral-200 dark:border-neutral-800 hover:border-black dark:hover:border-white text-neutral-700 dark:text-neutral-300'
        )}
      >
        {opt.label}
      </button>
    ))}
  </div>
);

const SettingsModal = () => {
  const {
    isSettingsOpen,
    toggleSettings,
    readingWidth,
    setReadingWidth,
    fontSize,
    setFontSize,
    spacingDensity,
    setSpacingDensity,
  } = useBlog();

  useEffect(() => {
    if (!isSettingsOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') toggleSettings();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSettingsOpen, toggleSettings]);

  useEffect(() => {
    if (!isSettingsOpen) return undefined;

    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = 'hidden';
    if (scrollbarWidth > 0) document.body.style.paddingRight = scrollbarWidth + 'px';

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPaddingRight;
    };
  }, [isSettingsOpen]);

  if (!isSettingsOpen) return null;

  return (
    <div
      id="settings-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="settings-modal-title"
      className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={toggleSettings}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="bg-white dark:bg-neutral-900 rounded-2xl max-w-md w-full p-6 space-y-6 shadow-2xl border border-neutral-200/50 dark:border-neutral-800"
      >
        <div className="flex items-center justify-between border-b border-neutral-100 dark:border-neutral-800 pb-4">
          <h3 id="settings-modal-title" className="text-lg font-bold tracking-tight text-neutral-900 dark:text-white">
            Nastavení zobrazení
          </h3>
          <button
            onClick={toggleSettings}
            aria-label="Zavřít nastavení"
            className="w-8 h-8 rounded-full flex items-center justify-center text-neutral-500 hover:bg-neutral-100 dark:hover:bg-neutral-800"
          >
            <i className="fas fa-times text-sm" aria-hidden="true"></i>
          </button>
        </div>

        <div className="space-y-5 text-sm">
          <div className="space-y-2">
            <label className="font-medium text-neutral-700 dark:text-neutral-300 block">Šířka obsahu</label>
            <ButtonGroup
              options={[
                { label: 'Úzká', value: '38rem' },
                { label: 'Střední', value: '48rem' },
                { label: 'Široká', value: '64rem' },
              ]}
              currentValue={readingWidth}
              onChange={setReadingWidth}
            />
          </div>

          <div className="space-y-2">
            <label className="font-medium text-neutral-700 dark:text-neutral-300 block">Velikost písma</label>
            <ButtonGroup
              options={[
                { label: 'Malé', value: 'sm' },
                { label: 'Střední', value: 'base' },
                { label: 'Velké', value: 'lg' },
              ]}
              currentValue={fontSize}
              onChange={setFontSize}
            />
          </div>

          <div className="space-y-2">
            <label className="font-medium text-neutral-700 dark:text-neutral-300 block">Hustota mezer</label>
            <div className="grid grid-cols-2 gap-2">
              {[
                { label: 'Kompaktní', value: 'compact' },
                { label: 'Vzdušná', value: 'airy' },
              ].map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => setSpacingDensity(opt.value)}
                  aria-pressed={spacingDensity === opt.value}
                  className={'py-2 px-3 rounded-lg border font-medium text-xs transition-all ' + (
                    spacingDensity === opt.value
                      ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 border-transparent'
                      : 'border-neutral-200 dark:border-neutral-800 hover:border-black dark:hover:border-white text-neutral-700 dark:text-neutral-300'
                  )}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-2">
          <button
            onClick={toggleSettings}
            className="w-full py-2.5 rounded-xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 font-medium text-xs tracking-wide uppercase transition-all shadow-sm"
          >
            Uložit nastavení
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsModal;
