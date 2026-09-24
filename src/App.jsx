import React from 'react';
import { BlogProvider } from './context/BlogContext';
import Header from './components/Header';
import Hero from './components/Hero';
import PostList from './components/PostList';
import Footer from './components/Footer';
import SettingsModal from './components/SettingsModal';

const MainLayout = () => (
  <div className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100 flex flex-col justify-between">
    <Header />
    <main
      className="w-full mx-auto px-6 sm:px-12 py-14 sm:py-20 flex-grow space-y-16 transition-all duration-300"
      style={{ maxWidth: 'var(--reading-width)' }}
    >
      <Hero />
      <PostList />
    </main>
    <Footer />
    <SettingsModal />
  </div>
);

function App() {
  return (
    <BlogProvider>
      <MainLayout />
    </BlogProvider>
  );
}

export default App;
