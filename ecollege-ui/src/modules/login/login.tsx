import React, { FormEvent, useState } from "react";
import { Brand } from "../../shared/layout/header/header-components";
import { useForm, SubmitHandler } from "react-hook-form";

import {
  Form,
  FormGroup,
  Row,
  Col,
  Label,
  Input,
  Card,
  CardHeader,
  CardBody,
  Button,
  Alert,
} from "reactstrap";

export interface ILoginInput {
  username: string;
  password: string;
}

const Login = () => {
  const padding = "10%";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginInput>();

  const handleLoginSubmit = (data: ILoginInput) => {
    alert(JSON.stringify(data));
  };

  const loginError = false;

  return (
    <div className="Login">
      <Row>
        <Brand colorName={{ color: "#000" }} />
      </Row>
      <Row>
        <Col md="12">
          {loginError ? (
            <Alert color="danger" data-cy="loginError">
              <strong>Failed to sign in!</strong> Please check your credentials.
            </Alert>
          ) : null}
        </Col>
      </Row>
      <Row style={{ padding }}>
        <Col></Col>
        <Col>
          <Card
            className="my-2"
            color="secondary"
            outline
            style={{
              width: "100%",
            }}
          >
            <CardHeader>Login</CardHeader>
            <CardBody>
              <Form onSubmit={handleSubmit(handleLoginSubmit)}>
                <FormGroup>
                  <Label for="usernameLabel">Email</Label>
                  <Input
                    id="username"
                    placeholder="Enter username"
                    type="text"
                    {...register("username", { required: true })}
                  />
                  {errors?.username?.type === "required" && (
                    <p>This field is required</p>
                  )}
                </FormGroup>
                <FormGroup>
                  <Label for="examplePassword">Password</Label>
                  <Input
                    id="password"
                    placeholder="Enter password"
                    type="password"
                    {...register("password", { required: true })}
                  />
                  {errors?.password?.type === "required" && (
                    <p>This field is required</p>
                  )}
                </FormGroup>
                <Button block type="submit">
                  Submit
                </Button>
              </Form>
            </CardBody>
          </Card>
        </Col>
        <Col></Col>
      </Row>
      <Row></Row>
    </div>
  );
};
export default Login;
