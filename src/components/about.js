import React from 'react';
import blogData from '../data/blog';

function About(prop) {
  return (
    <div>
     <aside>
<img src={prop.image}  alt="blog logo" />
     
<p>{blogData.about} </p>


     </aside>
    </div>
  );
}

export default About;
