import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";
import { Button, Card, Container, Form } from "react-bootstrap";

export default function Auth() {
  const local = useLocation();
  const isLogin = local.pathname === LOGIN_ROUTE;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const click = () => {
    if (isLogin) {
    } else {
    }
  };
  return (
    <Container
      className='d-flex align-items-center justify-content-center'
      style={{ height: "calc(100vh - 54px)" }}
    >
      <Card className='p-3' style={{ width: 600 }}>
        <h2 className='mt-4'>{isLogin ? "Авторизация" : "Регистрация"}</h2>
        <Form.Control
          type='email'
          className='mt-4'
          placeholder='Введите email...'
          onChange={(e) => setEmail(e.target.value)}
        />
        <Form.Control
          type='password'
          className='mt-4'
          placeholder='Введите password...'
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className='mt-4 d-flex justify-content-between align-items-center'>
          <p className='m-0'>
            {isLogin ? "Нет аккаунта? " : "Есть аккаунт? "}
            <NavLink
              to={isLogin ? REGISTRATION_ROUTE : LOGIN_ROUTE}
              style={{ fontSize: "120%", color: "blue" }}
            >
              {isLogin ? "Зарегистрироваться" : "Войти"}
            </NavLink>
          </p>
          <Button variant='outline-primary' onClick={click}>
            {isLogin ? "Войти" : "Зарегистрироваться"}
          </Button>
        </div>
      </Card>
    </Container>
  );
}
