import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Escribe tu nombre")
    .max(25, "Debe de tener menos de 25 caracteres")
    .required("Debe de introducir tu nombre"),
  Username: Yup.string()
    .min(2, "Escribe tu Username")
    .max(25, "Debe de tener menos de 25 caracteres")
    .required("Debe de introducir tu username"),
  Email: Yup.string()
    .email("El correo electrónico debe ser válido")
    .required("Debe de introducir tu email"),
  Password: Yup.string()
    .min(8, "Debe de tener al menos 8 caracteres")
    .max(15, "Debe de tener menos de 15 caracteres")
    .required("Debe de introducir tu Password"),
  ConfirmPassword: Yup.string()
    .required("repita su contraseña")
    .oneOf([Yup.ref("Password")], "Passwords must match"),
  termsOfService: Yup.boolean()
    .oneOf([true], "accept the Terms of use & Privacy Policy")
    .required("Tiene que acptar los terminos y condiciones"),
});

export default validationSchema;
