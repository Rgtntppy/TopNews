import React, { useState, useEffect, useContext } from 'react';
import { propsContext } from 'src/App';

const URL_HEAD = 'https://hacker-news.firebaseio.com/v0'

const News: React.FC = () => {
  const [data, setData] = useState<any>(null);//any型を使用することで異なる型のデータを受け入れる
  const { title } = useContext(propsContext)!;
  const { tailFetchUrl } = useContext(propsContext)!;
  const url = `${ URL_HEAD }${ tailFetchUrl }`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const result   = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [url]);

  const firstElements = Array.isArray(data) ? data.slice(0, 6) : [];

  return (
    <>
    {data && (
    <>
    <h2>{ title }</h2>
    {Array.isArray(data) ? (
    <ul>
      {firstElements.map((item, index) => (
      <li key={ index }>{ item.title }</li>
      ))}
    </ul>
    ) : (
      <div>{ data.title }</div>
    )}
    </>
    )}
    </>
  );
};

export default News;