import {Formik, Form, useField, ErrorMessage} from "formik";
import {Label, Input, Error, Field, Container, BottomText, Text, Submit} from "./Login.styled.js";
import {useDispatch} from "react-redux";
import {logged} from "../../Store/Actions/Actions.js";
import {Link} from "react-router-dom";
import {useHistory} from "react-router-dom";
import * as Yup from "yup";
import {useState} from "react";

function CustomInput({ label, setState, ...props }) {

    const [field, meta] = useField(props);

    return (
        <Field>
            <Label htmlFor={props.name}>{label}</Label>
            <Input {...field} {...props} />
            <ErrorMessage name={field.name}>{error => <Error>{error}</Error>}</ErrorMessage>
        </Field>
    );
}

function Login() {

    const dispatch = useDispatch();
    const history = useHistory();
    const [correctPassword, setCorrectPassword] = useState("");

    return (
        <Formik
            initialValues={{
                password: ""
            }}
            validationSchema={Yup.object({
                password: Yup.string()
                    .oneOf([correctPassword], "Email or password is invalid")
                    .required("This field is required")
            })}
            onSubmit={(values) => {
                dispatch(logged());
                history.push("/");
            }}
        >
            {props => (
                <Form>
                    <Container>
                        <Field>
                            <Label htmlFor="userEmail">Email</Label>
                            <Input type="email" placeholder="Email" onChange={e => setCorrectPassword(localStorage.getItem(e.target.value))} />
                            <ErrorMessage name="userEmail">{error => <Error>{error}</Error>}</ErrorMessage>
                        </Field>
                        <CustomInput label="Password" name="password" type="password" placeholder="Password" />
                        <BottomText>
                            <Text>New to this Site?</Text>
                            <Link to="/signup">Register New Account</Link>
                        </BottomText>
                        <Submit type="submit">Login Me</Submit>
                    </Container>
                </Form>
            )}
        </Formik>
    );
}

export default Login;