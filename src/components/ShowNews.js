import React from 'react';
import Item from './Item';
import useDataNews from '../hooks/dataNews';

 const ShowNews = (props) =>  {
    const { type } = props.match.params;
    const { isLoad, stories = [] } = useDataNews(type ? type : 'newstories');
  return (
    <>
     {isLoad ? (<p>Loading...</p>) :
      <>
        {stories.map(
          (story) => story && <Item  key={story.id} story={story} />
        )}
      </>
    }
    </>
  );
};

export default ShowNews;