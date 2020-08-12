import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Escribe tu nombre")
    .max(255, "Debe de tener menos de 255 caracteres")
    .required("Debe de introducir tu nombre"),
  apellidos: Yup.string()
    .min(2, "Escribe tu apellido")
    .max(255, "Debe de tener menos de 255 caracteres")
    .required("Debe de introducir tu apellido"),
});

export default validationSchema;
