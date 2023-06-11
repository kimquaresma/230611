import React, {useState} from 'react';
import axios from "axios";
import {Card, Button, Container, Row, Col} from "react-bootstrap";

const App = () => {
    const [articles, setArticles] = useState([])
    const getArticles = async () => {
        try{
            const address = "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=f1c87e2bb86248de9f9492e513f93e1f"
            const result = await axios.get(address)
            console.log("++++", result.data)
            setArticles(result.data.articles)
        }catch(err){
            console.log("err", err.message)
        }
    }
    return (
        <Container>
            <Row>
            {articles && articles.map((article, index) =>(
                <Col className={"mt-5"} key={index}>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={article.urlToImage} />
                    <Card.Body>
                        <Card.Title>{article?.title}</Card.Title>
                        <Card.Text>
                            {article.description.slice(0, 120)}
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
                </Col>
            ))}
            </Row>
            <button onClick={getArticles}>ㅇㅇㅇㅁ</button>

        </Container>
    );
};

export default App;