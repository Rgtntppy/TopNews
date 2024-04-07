import React, { useState, useEffect, useContext } from 'react';
import { propsContext } from 'src/App';

const URL_HEAD = 'https://hacker-news.firebaseio.com/v0'

const News: React.FC = () => {
  const [fetchData, setFetchData] = useState<any>(null);//any型を使用することで異なる型のデータを受け入れる
  const { tailFetchUrl } = useContext(propsContext)!;
  const url = `${ URL_HEAD }${ tailFetchUrl }`;
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const result   = await response.json();
        setFetchData(result);
        console.log(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [url]);

  const fetchDataLimit = 20;
  const checkArray = Array.isArray(fetchData) ? fetchData.slice(fetchDataLimit) : [];

  return (
    <>
    {fetchData && (
      <>
      <h2>{ fetchData.title || '' }</h2>
      <div className='hoge'>
        {Array.isArray(fetchData) ? (
          <ul>
            {checkArray.slice(0, fetchDataLimit).map((item, index) => (
              <li key={ index }>{ item }</li>
            ))}
          </ul>
          ) : (
            <ul>
              {fetchData.kids.slice(0, fetchDataLimit).map((kid: string, index:number) => (
                <li key={ index }>{ kid }</li>
              ))}
            </ul>
        )}
      </div>
      </>
    )}
    </>
  );
};

export default News;