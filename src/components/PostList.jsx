import React from 'react';
import { useBlog } from '../context/BlogContext';
import Post from './Post';

const mobileViewModes = [
  { id: 'list', icon: 'fa-bars', title: 'Seznam' },
  { id: 'grid', icon: 'fa-th-large', title: 'Grid' },
  { id: 'magazine', icon: 'fa-newspaper', title: 'Magazín' },
  { id: 'compact', icon: 'fa-list-ul', title: 'Kompaktní' },
];

const PostList = () => {
  const { viewMode, setViewMode, spacingDensity, fontSize } = useBlog();

  const posts = [
    {
      id: 1,
      title: 'První příspěvek v čistém minimalistickém kabátě',
      excerpt: 'Toto je ukázkový blogový příspěvek s vylepšenou typografií Google Sans, bez zbytečných rámů či pozadí boxů, s důrazem na čistý prostor a obsah.',
      category: 'Aktuality',
      date: '24. září 2026',
    },
    {
      id: 2,
      title: 'Jak snadno publikovat a upravovat obsah',
      excerpt: 'Stačí provést změnu v Markdown souboru, zadat commit a pushnout změny do hlavní větve. GitHub Actions se postará o zbytek.',
      category: 'Návod',
      date: '23. září 2026',
      hasCodeBlock: true,
    },
    {
      id: 3,
      title: 'Proč zvolit čistý B&W minimalistický design',
      excerpt: 'Minimalismus eliminuje vizuální šum. Díky precizně vyváženým typografickým řezům Google Sans vynikne každé slovo a myšlenka bez rušivých elementů.',
      category: 'Architektura',
      date: '20. září 2026',
    },
  ];

  const spacingClass = spacingDensity === 'compact' ? 'space-y-10' : 'space-y-20';
  const fontSizeClass = fontSize === 'sm' ? 'text-sm' : fontSize === 'lg' ? 'text-lg' : 'text-base';

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between border-b border-neutral-100 dark:border-neutral-900 pb-3">
        <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 dark:text-white">Příspěvky</h3>

        <div className="flex md:hidden items-center bg-neutral-100 dark:bg-neutral-900 p-1 rounded-lg text-xs">
          {mobileViewModes.map((mode) => (
            <button
              key={mode.id}
              onClick={() => setViewMode(mode.id)}
              title={mode.title}
              aria-label={mode.title}
              aria-pressed={viewMode === mode.id}
              className={'px-2 py-1 rounded-lg transition-all ' + (
                viewMode === mode.id
                  ? 'bg-white dark:bg-neutral-800 shadow-sm text-black dark:text-white'
                  : 'text-neutral-700 dark:text-neutral-300'
              )}
            >
              <i className={'fas ' + mode.icon} aria-hidden="true"></i>
            </button>
          ))}
        </div>
      </div>

      <div className={'transition-all duration-300 ' + spacingClass + ' ' + fontSizeClass}>
        {posts.map((post, index) => <Post key={post.id} post={post} index={index} />)}
      </div>
    </div>
  );
};

export default PostList;
