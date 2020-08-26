import { object, string, boolean, ref } from "yup";

const validationSchema = object().shape({
    name: string()
        .min(2, "Escribe tu nombre")
        .max(25, "Debe de tener menos de 25 caracteres")
        .required("Debe de introducir tu nombre"),
    Username: string()
        .min(2, "Escribe tu Username")
        .max(25, "Debe de tener menos de 25 caracteres")
        .required("Debe de introducir tu username"),
    Email: string()
        .email("El correo electrónico debe ser válido")
        .required("Debe de introducir tu email"),
    Password: string()
        .min(8, "Debe de tener al menos 8 caracteres")
        .max(15, "Debe de tener menos de 15 caracteres")
        .required("Debe de introducir tu Password"),
    ConfirmPassword: string()
        .required("repita su contraseña")
        .oneOf([ref("Password")], "Passwords must match"),
    termsOfService: boolean()
        .oneOf([true], "accept the Terms of use & Privacy Policy")
        .required("Tiene que acptar los terminos y condiciones"),
});

export default validationSchema;
