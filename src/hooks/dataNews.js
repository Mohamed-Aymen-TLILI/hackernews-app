import {useState, useEffect} from 'react';
import {getNews} from '../utils/api';

const useDataNews = (type) => {
    const [stories, setStories] = useState({});
    const [isLoad, setIsLoad] = useState(false);

  useEffect(() => {
    if (!stories[type]) {
      setIsLoad(true);
      getNews(type)
        .then((stories) => {
          setStories((prevState) => ({
            ...prevState,
            [type]: stories
          }));
          setIsLoad(false);
        })
        .catch(() => {
          setIsLoad(false);
        });
    }
  }, [type]);

  return { isLoad, stories: stories[type] };
};

export default useDataNews;