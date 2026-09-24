import React from 'react';
import { useBlog } from '../context/BlogContext';

const viewModes = [
  { id: 'list', icon: 'fa-bars', title: 'Minimalistický seznam' },
  { id: 'grid', icon: 'fa-th-large', title: 'Grid karty' },
  { id: 'magazine', icon: 'fa-newspaper', title: 'Magazínový styl' },
  { id: 'compact', icon: 'fa-list-ul', title: 'Kompaktní přehled' },
];

const Header = () => {
  const { theme, toggleTheme, viewMode, setViewMode, toggleSettings, isSettingsOpen } = useBlog();

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-neutral-950/80 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6 sm:px-12 h-14 flex items-center justify-between">
        <h1 className="text-base sm:text-lg font-extrabold tracking-tight uppercase">NANAS</h1>

        <div className="flex items-center space-x-2 sm:space-x-3">
          <div className="hidden md:flex items-center bg-neutral-100 dark:bg-neutral-900 p-1 rounded-xl text-xs">
            {viewModes.map((mode) => (
              <button
                key={mode.id}
                onClick={() => setViewMode(mode.id)}
                title={mode.title}
                aria-label={mode.title}
                aria-pressed={viewMode === mode.id}
                className={'px-2 py-1 rounded-lg font-medium transition-all ' + (
                  viewMode === mode.id
                    ? 'bg-white dark:bg-neutral-800 shadow-sm text-black dark:text-white'
                    : 'text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white'
                )}
              >
                <i className={'fas ' + mode.icon} aria-hidden="true"></i>
              </button>
            ))}
          </div>

          <button
            onClick={toggleSettings}
            aria-label="Nastavení zobrazení"
            aria-expanded={isSettingsOpen}
            aria-controls="settings-modal"
            className="w-8 h-8 rounded-full flex items-center justify-center text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-all duration-200"
          >
            <i className="fas fa-sliders-h text-xs" aria-hidden="true"></i>
          </button>

          <button
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Přepnout na světlý režim' : 'Přepnout na tmavý režim'}
            aria-pressed={theme === 'dark'}
            className="w-8 h-8 rounded-full flex items-center justify-center text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-all duration-200"
          >
            <i className={'fas ' + (theme === 'dark' ? 'fa-sun' : 'fa-moon') + ' text-xs'} aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
