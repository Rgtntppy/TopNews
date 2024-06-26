import 'src/Component/News/news.scss';
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { propsContext } from 'src/App';
import { Story } from 'src/Component/News/newsInterfaces';
import LoadingSpinner from 'src/Component/News/LoadingIcon/LoadingSpinner';

const BASE_URL = 'https://hacker-news.firebaseio.com/v0';

const News: React.FC = () => {
  const [stories, setStories] = useState<Story[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [fetchData, setFetchData] = useState<any>(null);//any型を使用することで異なる型のデータを受け入れる
  const { tailFetchUrl } = useContext(propsContext)!;
  const totalUrl = `${ BASE_URL }${ tailFetchUrl }`;
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(totalUrl);
        const result = response.data;
        setFetchData(result);
        console.log(response)

        if (Array.isArray(result)) {
          const storyPromises = result.slice(0, 10).map(id =>
            axios.get<Story>(`${BASE_URL}/item/${id}.json`)
          );
          const storyResponses = await Promise.all(storyPromises);
          const fetchedStories = storyResponses.map(response => response.data);
          setStories(fetchedStories);
          console.log(fetchedStories)

        }else {
          setStories([result])
        }

      } catch (err) {
        setError('データの取得に失敗しました。');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [totalUrl]);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const showDataLimit = 10;
  const checkArray = Array.isArray(fetchData) ? fetchData.slice(showDataLimit) : [];

  return (
    <>
      <div className='newsList'>
        <h2>{ fetchData.title || '' }</h2>
        <ul>
          {stories.map(story => (
            <li key={story.id} className='newsItem'>
              <a href={story.url} target="_blank" rel="noopener noreferrer">{story.title}</a>
              <p>By {story.by}</p>
              <p>Score {story.score}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* せっかく作ったのを消すのがもったい何ので、コメントアウトにて保管 */}
      {/* {fetchData && (
        <>
        <div className='arrayList'>
          {Array.isArray(fetchData) ? (
            <ul>
              {checkArray.slice(0, showDataLimit).map((item, index) => (
                <li key={ index }>{ item }</li>
              ))}
            </ul>
            ) : (
              <ul>
                {fetchData.kids.slice(0, showDataLimit).map((kid: string, index:number) => (
                  <li key={ index }>{ kid }</li>
                ))}
              </ul>
          )}
        </div>
        </>
      )} */}
    </>
  );
};

export default News;