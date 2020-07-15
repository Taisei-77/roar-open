import React from "react";
import { Container } from 'react-bootstrap';
import NewsList from "./NewsList";

const News = () => {

  return (
    <Container>
      <div className="m-5">
        <h1 className="text-left">News</h1>
      </div>
      <NewsList/>
    </Container>
  );
};

export default News;
