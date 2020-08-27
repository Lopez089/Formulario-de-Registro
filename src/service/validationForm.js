import { object, string, boolean, ref } from "yup";

const validationSchema = object().shape({
    name: string()
        .min(2, "Write your name")
        .max(25, "Must be less than 25 characters")
        .required("You must enter your name"),
    Username: string()
        .min(2, "Write your Username")
        .max(25, "Must be less than 25 characters")
        .required("You must enter your username"),
    Email: string().email("enter a valid email").required("You must enter your email"),
    Password: string()
        .min(8, "Must be at least 8 characters")
        .max(15, "Must be less than 15 characters")
        .required("You must enter your Password"),
    ConfirmPassword: string()
        .required("repeat your password")
        .oneOf([ref("Password")], "Passwords must match"),
    termsOfService: boolean()
        .oneOf([true], "Accept the Terms of use & Privacy Policy")
        .required("Accept the Terms of use & Privacy Policy"),
});

export default validationSchema;
