import {Formik, Form, useField, ErrorMessage} from "formik";
import {Label, Input, Error, Field, Container, BottomText, Text, Submit} from "./SignUp.styled.js";
import {Link} from "react-router-dom";
import {useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";
import {logged} from "../../Store/Actions/Actions.js";
import * as Yup from "yup";

function CustomInput({ label, ...props }) {

    const [field, meta] = useField(props);

    return (
        <Field>
            <Label htmlFor={props.name}>{label}</Label>
            <Input {...field} {...props} />
            <ErrorMessage name={field.name}>{error => <Error>{error}</Error>}</ErrorMessage>
        </Field>
    );
}

function SignUp() {

    const history = useHistory();
    const dispatch = useDispatch();

    return (
        <Formik
            initialValues={{
                username: "",
                email: "",
                password: "",
                confirmPassword: ""
            }}
            validationSchema={Yup.object({
                username: Yup.string()
                    .min(3, "Username is too that short")
                    .matches("^[A-Z]+", "Name should start with uppercase letter")
                    .required("This field is required"),
                email: Yup.string()
                    .email("Invalid email adress")
                    .required("This field is required"),
                password: Yup.string()
                    .min(7, "Password is too short")
                    .matches("^[^\\s]+$", "Cant use whitespaces in password")
                    .matches("\\d", "Password should contain at least 1 digit")
                    .required("This field is required"),
                confirmPassword: Yup.string()
                    .oneOf([Yup.ref("password")], "Passwords must match")
                    .required("This field is required")
            })}
            onSubmit={({ email, password }) => {
                dispatch(logged());
                localStorage.setItem(email, password);
                history.push("/");
            }}
        >
            {props => (
                <Form>
                    <Container>
                        <CustomInput label="Username" name="username" type="text" placeholder="Username"/>
                        <CustomInput label="Email" name="email" type="email" placeholder="Email"/>
                        <CustomInput label="Password" name="password" type="password" placeholder="Password"/>
                        <CustomInput label="Confirm Password" name="confirmPassword"
                            type="password" placeholder="Confirm your password"/>
                        <BottomText>
                            <Text>Already a member?</Text>
                            <Link to="/login">Log in</Link>
                        </BottomText>
                        <Submit type="submit">Sign Me Up</Submit>
                    </Container>
                </Form>
            )}
        </Formik>
    );
}

export default SignUp;