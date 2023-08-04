import * as Yup from "yup";

// validations on submit form
export const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .required("firstName required")
    .min(1, "first name must contain at least 1 character ")
    .max(50, "first name must contain 50 characters maximum"),

  lastName: Yup.string()
    .required("last name required")
    .min(1, "last name must contain at least 1 character ")
    .max(50, "last name must contain 50 characters maximum"),

  dateOfBirth: Yup.string().required("date of birth required"),

  street: Yup.string()
    .required("street required")
    .min(1, "street must contain at least 1 character ")
    .max(50, "street must contain 50 characters maximum"),

  city: Yup.string()
    .required("city required")
    .min(1, "city must contain at least 1 character ")
    .max(50, "city must contain 50 characters maximum"),

  state: Yup.string().min(1, "Select a state").required("State required "),

  zipCode: Yup.string()
    .required("zip code is required")
    .min(5, "zip code must contain at least 5 characters ")
    .max(5, "zip code must contain 5 characters maximum"),

  startDate: Yup.string().required("date of start required"),

  department: Yup.string()
    .required("department is required")
    .min(1, "city must contain at least 1 character ")
    .max(20, "city must contain 20 characters maximum"),
});
