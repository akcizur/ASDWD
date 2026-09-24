import React from 'react';
import { useBlog } from '../context/BlogContext';

const Post = ({ post, index }) => {
  const { viewMode } = useBlog();

  const renderCodeBlock = () => {
    if (!post.hasCodeBlock) return null;

    return (
      <div className="my-4 rounded-xl overflow-hidden bg-neutral-100 text-neutral-900 dark:bg-neutral-900 dark:text-neutral-100 shadow-sm border border-neutral-200/50 dark:border-neutral-800">
        <div className="px-4 py-2.5 bg-neutral-200/70 dark:bg-neutral-950 flex items-center justify-between border-b border-neutral-200/50 dark:border-neutral-800">
          <div className="flex items-center space-x-1.5">
            <div className="w-2 h-2 rounded-full bg-neutral-400 dark:bg-neutral-700"></div>
            <div className="w-2 h-2 rounded-full bg-neutral-400 dark:bg-neutral-700"></div>
            <div className="w-2 h-2 rounded-full bg-neutral-400 dark:bg-neutral-700"></div>
          </div>
          <span className="text-[10px] font-mono text-neutral-500 dark:text-neutral-400 uppercase tracking-widest">git</span>
        </div>
        <pre className="p-4 font-mono text-xs sm:text-sm overflow-x-auto leading-relaxed"><code>{'git add content/index.md\ngit commit -m "docs: update blog content"\ngit push'}</code></pre>
      </div>
    );
  };

  const renderMeta = (extraClasses = '') => (
    <div className={extraClasses + ' flex items-center ' + (viewMode === 'compact' ? 'gap-3' : 'justify-between') + ' text-xs font-mono text-neutral-400 dark:text-neutral-500'}>
      <span className="uppercase tracking-wider">{post.category}</span>
      <span>{post.date}</span>
    </div>
  );

  let modeClasses = 'space-y-3';
  if (viewMode === 'grid') {
    modeClasses = 'bg-neutral-50/40 dark:bg-neutral-900/40 p-5 rounded-2xl border border-neutral-200/50 dark:border-neutral-800 flex flex-col justify-between space-y-3';
  } else if (viewMode === 'magazine') {
    modeClasses = index === 0
      ? 'p-8 bg-neutral-50 dark:bg-neutral-900/60 rounded-2xl space-y-4 border border-neutral-200/50 dark:border-neutral-800'
      : 'py-5 border-b border-neutral-100 dark:border-neutral-900 space-y-2';
  } else if (viewMode === 'compact') {
    modeClasses = 'py-4 flex items-center justify-between gap-4';
  }

  const titleClasses = viewMode === 'compact'
    ? 'text-[1.05em] font-bold tracking-tight text-neutral-900 dark:text-white group-hover:opacity-75 transition-opacity flex-1 truncate'
    : 'text-[1.35em] sm:text-[1.6em] font-bold tracking-tight text-neutral-900 dark:text-white group-hover:opacity-75 transition-opacity';

  const excerptClasses = viewMode === 'compact'
    ? 'hidden'
    : 'text-neutral-600 dark:text-neutral-400 font-normal leading-relaxed line-clamp-3';

  return (
    <article className={'post-item group cursor-pointer transition-all ' + modeClasses}>
      <h4 className={titleClasses}>{post.title}</h4>
      {viewMode !== 'compact' && <p className={excerptClasses}>{post.excerpt}</p>}
      {viewMode !== 'compact' && renderCodeBlock()}
      {viewMode !== 'compact'
        ? renderMeta('pt-2 border-t border-neutral-100 dark:border-neutral-900 mt-auto')
        : renderMeta('shrink-0')}
    </article>
  );
};

export default Post;
