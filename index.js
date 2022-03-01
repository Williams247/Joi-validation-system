const validateSchema = require("./validation");

const values = {
    username: "Williams",
    title: "Place of work",
    email: "williams@gmail.com",
    password: "123",
    birth_year: 2000,
    remarks: "Greate Job",
    role: false,
    passCodeOne: "Base10",
    passCodeTwo: "Base3"
 };
 
const { error } = validateSchema(values);

if (error) {
  console.log(error.message)
} else {
  console.log("Passed")
}
