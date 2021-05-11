import axios from 'axios';
import {API_URL} from './const';
import { selectFields } from './selectFields';

const getOneNews = async (storyId) => {
    try {
     const result = await axios.get(`${API_URL}/item/${storyId}.json`);
    return selectFields(result.data);
  } catch (error) {
        console.log('Error to get one news');
    }
};

export const getNews = async (type) => {
    try {
        const { data: newsIds }  = await axios.get(`${API_URL}/${type}.json`);
        const news = await Promise.all(newsIds.slice(0, 200).map(getOneNews));
        return news;
    } catch(error){
        console.log('Error to get all news');
    }
};
