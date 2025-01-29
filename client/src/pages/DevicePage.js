import React from "react";
import { Card, Col, Container, Image, Row, Button } from "react-bootstrap";
import star from "../assets/zvezda.png"


const DevicePage = () => {
    const device = {id: 1, name: 'Iphone 12', price: 10000, rating: 5, img: 'https://tdvikom.ru/upload/iblock/e27/f7rxxxnxky7opqaeu38d95ev1e3xz6ju.png', brandId: 1, typeId: 1}
    const descriptions = [
        {id: 1, title: 'Оперативная память', description: '5 gb'},
        {id: 2, title: 'Оперативная память', description: '5 gb'},
        {id: 3, title: 'Оперативная память', description: '5 gb'},
        {id: 4, title: 'Оперативная память', description: '5 gb'},
        {id: 5, title: 'Оперативная память', description: '5 gb'},
    ]
    return (
        <Container className="mt-3">
            <Row>
                <Col md={4}>
                    <Image width={300} height={300} src={device.img}/>
                </Col>
                <Col md={4}>
                    <Row className="d-flex flex-column align-items-center">
                        <h2 className="text-center">{device.name}</h2>
                        <div 
                            className="d-flex align-items-center justify-content-center"
                            style={{background: `url(${star}) no-repeat center center`, width:240, height:240, backgroundSize:'240px 240px'}}
                        
                        >
                            {device.rating}
                        </div>
                    </Row>
                </Col>
                <Col md={4}>
                    <Card
                        className="d-flex flex-column align-items-center justify-content-around"
                        style={{width: 300, height: 300, fontSize: 32, border: '5px solid lightgray'}}
                    >
                        <h3>От: {device.price} руб.</h3>
                        <Button variant={"outline-dark"}>Добавить в корзину</Button>
                    </Card>
                </Col>
            </Row>
            <Row className="d-flex flex-column m-3">
                <h1>Характеристики:</h1>
                {descriptions.map((info, index) =>
                    <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
                        {info.title}: {info.description}
                    </Row>
                )}
            </Row>
        </Container>
    )
}

export default DevicePage