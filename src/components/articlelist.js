import React from 'react';
import blogData from '../data/blog';

function ArticleList(props) {
const posts = blogData.posts

  return (
    <div>
 <main>
      {posts.map(post => (
        <ArticleList key={post.id} post={props.post} />
      ))}
    </main>
    </div>
  );
}

export default ArticleList;

