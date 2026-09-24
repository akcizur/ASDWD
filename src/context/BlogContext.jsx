import React, { createContext, useContext, useEffect, useState } from 'react';

const BlogContext = createContext();

const VALID_THEMES = ['light', 'dark'];
const VALID_VIEW_MODES = ['list', 'grid', 'magazine', 'compact'];
const VALID_READING_WIDTHS = ['38rem', '48rem', '64rem'];
const VALID_FONT_SIZES = ['sm', 'base', 'lg'];
const VALID_SPACING_DENSITIES = ['compact', 'airy'];

const safeGet = (key) => {
  try {
    return typeof window !== 'undefined' ? window.localStorage.getItem(key) : null;
  } catch {
    return null;
  }
};

const safeSet = (key, value) => {
  try {
    if (typeof window !== 'undefined') window.localStorage.setItem(key, value);
  } catch {
    // ignore
  }
};

const validatedInitial = (key, validValues, fallback) => {
  const saved = safeGet(key);
  return validValues.includes(saved) ? saved : fallback;
};

export const BlogProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const saved = safeGet('theme');
    if (VALID_THEMES.includes(saved)) return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  const [viewMode, setViewMode] = useState(() => validatedInitial('viewMode', VALID_VIEW_MODES, 'list'));
  const [readingWidth, setReadingWidth] = useState(() => validatedInitial('readingWidth', VALID_READING_WIDTHS, '48rem'));
  const [fontSize, setFontSize] = useState(() => validatedInitial('fontSize', VALID_FONT_SIZES, 'base'));
  const [spacingDensity, setSpacingDensity] = useState(() => validatedInitial('spacingDensity', VALID_SPACING_DENSITIES, 'airy'));
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
    }
    safeSet('theme', theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.style.setProperty('--reading-width', readingWidth);
    safeSet('readingWidth', readingWidth);
  }, [readingWidth]);

  useEffect(() => safeSet('viewMode', viewMode), [viewMode]);
  useEffect(() => safeSet('fontSize', fontSize), [fontSize]);
  useEffect(() => safeSet('spacingDensity', spacingDensity), [spacingDensity]);

  const toggleTheme = () => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  const toggleSettings = () => setIsSettingsOpen((prev) => !prev);

  return (
    <BlogContext.Provider value={{
      theme,
      toggleTheme,
      viewMode,
      setViewMode,
      readingWidth,
      setReadingWidth,
      fontSize,
      setFontSize,
      spacingDensity,
      setSpacingDensity,
      isSettingsOpen,
      toggleSettings,
    }}>
      {children}
    </BlogContext.Provider>
  );
};

export const useBlog = () => useContext(BlogContext);
