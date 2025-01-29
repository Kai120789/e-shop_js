import React from "react";
import { Button, Card, Form } from "react-bootstrap";
import Container from "react-bootstrap/Container"
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";
import { NavLink, useLocation } from "react-router-dom";

const Auth = () => {
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE

    return (
        <Container 
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 54}}
        >
            <Card style={{width: 600}} className="p-5">
                <h2 className="m-auto">{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
                <Form className="d-flex flex-column">
                    <Form.Control 
                        className="mt-3"
                        placeholder="Введите ваш e-mail..."
                    />
                    <Form.Control 
                        className="mt-3"
                        placeholder="Введите ваш пароль..."
                    />
                    <div className="d-flex justify-content-between align-items-center mt-3">
                        {isLogin ?
                            <div>
                                Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрироваться</NavLink>
                            </div>
                            :
                            <div>
                                Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войти</NavLink>
                            </div>
                        }
                        
                        <Button className="mt-3" variant="outline-dark">
                            {isLogin ? 'Войти' : 'Зарегистрироваться'}         
                        </Button>
                    </div>
                </Form>
            </Card>
        </Container>
    )
}

export default Auth