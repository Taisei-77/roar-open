import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Card} from 'react-bootstrap';

function NewsList() {
  const [data, setData] = useState({ hits: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'http://hn.algolia.com/api/v1/search?query=redux',
      );

      setData(result.data);
    };

    fetchData();
  }, []);

  return (
    <ul className="d-flex row">
      {data.hits.map(item => (
        <li key={item.objectID} className="m-3 d-block col-md-5">
            <Card style={{ width: "100%" }}>
                <Card.Body>
                <Card.Title><a href={item.url}>{item.title}</a></Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
        </li>
      ))}
    </ul>
  );
}

export default NewsList;
