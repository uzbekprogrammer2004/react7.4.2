// // import React, { useState } from "react";
// // import {
// //   TextField,
// //   Button,
// //   Typography,
// //   Container,
// //   Box,
// //   Link,
// // } from "@mui/material";
// // import auth from "../../service/auth";
// // import CleaningModal from "../../components/modal";

// // const Index = () => {
// //   const [modal, setModal] = useState(false);
// //   const [form, setForm] = useState({});
  
// //   const handleChange = (event) => {
// //     const { value, name } = event.target;
// //     setForm({ ...form, [name]: value });
// //   };
  
// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
    
// //     try {
// //       const response = await auth.sign_up(form);
      
// //       if (response.status === 200) {
// //         setModal(true);
// //         localStorage.setItem("email", form.email);
// //       }
      
// //       console.log(response);
// //     } catch (error) {
// //       console.log(error);
// //     }
// //   };

// //   return (
// //     <>
// //       {modal && <CleaningModal open={modal} toggle={() => setModal(false)} />}
// //       <Container maxWidth="sm">
// //         <Box
// //         >
// //           <Typography component="h1" variant="h5" fontSize={30}>
// //             Sign Up
// //           </Typography>
// //           <form onSubmit={handleSubmit}>
// //             <Box sx={{ mt: 3, width: "100%" }}>
// //               <TextField
// //                 margin="normal"
// //                 required
// //                 fullWidth
// //                 id="email"
// //                 label="Email"
// //                 name="email"
// //                 variant="outlined"
// //                 type="email"
// //                 onChange={handleChange}
// //               />
// //               <TextField
// //                 margin="normal"
// //                 required
// //                 fullWidth
// //                 name="full_name"
// //                 id="full_name"
// //                 label="Full Name"
// //                 type="text"
// //                 variant="outlined"
// //                 onChange={handleChange}
// //               />
// //               <TextField
// //                 margin="normal"
// //                 required
// //                 fullWidth
// //                 id="password"
// //                 label="Password"
// //                 variant="outlined"
// //                 name="password"
// //                 type="password"
// //                 onChange={handleChange}
// //               />
// //               <TextField
// //                 margin="normal"
// //                 fullWidth
// //                 name="phone_number"
// //                 id="phone_number"
// //                 label="Phone Number"
// //                 placeholder="+998"
// //                 variant="outlined"
// //                 onChange={handleChange}
// //               />
// //               <Link href="/">Sign In</Link>
// //               <Button
// //                 type="submit"
// //                 fullWidth
// //                 variant="contained"
// //                 sx={{ mt: 3, mb: 2, p: 2, fontSize: 16 }}
// //               >
// //                 Sign Up
// //               </Button>
// //             </Box>
// //           </form>
// //         </Box>
// //       </Container>
// //     </>
// //   );
// // };

// // export default Index;
// // // npm install -D tailwindcss


// import React, { useState } from "react";
// import {
//   TextField,
//   Button,
//   Typography,
//   Container,
//   Box,
//   Link,
// } from "@mui/material";
// import auth from "../../service/auth";
// import CleaningModal from "../../components/modal";

// const Index = () => {
//   const [modal, setModal] = useState(false);
//   const [form, setForm] = useState({
//     email: "",
//     full_name: "",
//     password: "",
//     phone_number: "",
//   });
  
//   const handleChange = (event) => {
//     const { value, name } = event.target;
//     setForm({ ...form, [name]: value });
//   };
  
//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     try {
//       const response = await auth.sign_up(form);
      
//       if (response.status === 200) {
//         setModal(true);
//         localStorage.setItem("email", form.email);
//       }
      
//       console.log(response);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <>
//       {modal && <CleaningModal open={modal} toggle={() => setModal(false)} />}
//       <Container maxWidth="sm">
//         <Box
//           sx={{
//             marginTop: 4,
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//           }}
//         >
//           <Typography component="h1" variant="h5" fontSize={30}>
//             Sign Up
//           </Typography>
//           <form onSubmit={handleSubmit} style={{ width: '100%' }}>
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               id="email"
//               label="Email"
//               name="email"
//               variant="outlined"
//               type="email"
//               value={form.email}
//               onChange={handleChange}
//             />
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               name="full_name"
//               id="full_name"
//               label="Full Name"
//               type="text"
//               variant="outlined"
//               value={form.full_name}
//               onChange={handleChange}
//             />
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               id="password"
//               label="Password"
//               variant="outlined"
//               name="password"
//               type="password"
//               value={form.password}
//               onChange={handleChange}
//             />
//             <TextField
//               margin="normal"
//               fullWidth
//               name="phone_number"
//               id="phone_number"
//               label="Phone Number"
//               placeholder="+998"
//               variant="outlined"
//               value={form.phone_number}
//               onChange={handleChange}
//             />
//             <Link href="/">Sign In</Link>
//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               sx={{ marginTop: 3, marginBottom: 2, padding: 2, fontSize: 16 }}
//             >
//               Sign Up
//             </Button>
//           </form>
//         </Box>
//       </Container>
//     </>
//   );
// };

// export default Index;


import React, { useState } from 'react';
import {
  TextField,
  Button,
  Typography,
  Container,
  Box,
  Link,
} from '@mui/material';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import auth from '../../service/auth';
import CleaningModal from '../../components/modal';

const validationSchema = Yup.object({
  email: Yup.string().email("Noto'g'ri elektron pochta manzili").required('Iltimos, elektron pochta manzilini kiriting'),
  full_name: Yup.string().required("Iltimos, to'liq ismingizni kiriting"),
  password: Yup.string()
    .required('Iltimos, parolni kiriting')
    .min(8, 'Parol kamida 8 belgidan iborat bo\'lishi kerak'),
  phone_number: Yup.string(),
});

const Index = () => {
  const [modal, setModal] = useState(false);

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await auth.sign_up(values);

      if (response.status === 200) {
        setModal(true);
        localStorage.setItem('email', values.email);
      }

      console.log(response);
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      {modal && <CleaningModal open={modal} toggle={() => setModal(false)} />}
      <Container maxWidth="sm">
        <Box
          sx={{
            marginTop: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5" fontSize={30}>
            Ro'yxatdan o'tish
          </Typography>
          <Formik
            initialValues={{
              email: '',
              full_name: '',
              password: '',
              phone_number: '',
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form style={{ width: '100%' }}>
                <Field
                  as={TextField}
                  fullWidth
                  id="email"
                  name="email"
                  label="Elektron pochta"
                  variant="outlined"
                  type="email"
                  margin="normal"
                  helperText={<ErrorMessage name="email" />}
                />
                <Field
                  as={TextField}
                  fullWidth
                  id="full_name"
                  name="full_name"
                  label="To'liq ismi"
                  variant="outlined"
                  type="text"
                  margin="normal"
                  helperText={<ErrorMessage name="full_name" />}
                />
                <Field
                  as={TextField}
                  fullWidth
                  id="password"
                  name="password"
                  label="Parol"
                  variant="outlined"
                  type="password"
                  margin="normal"
                  helperText={<ErrorMessage name="password" />}
                />
                <Field
                  as={TextField}
                  fullWidth
                  id="phone_number"
                  name="phone_number"
                  label="Telefon raqami"
                  placeholder="+998901234567"
                  variant="outlined"
                  margin="normal"
                  helperText={<ErrorMessage name="phone_number" />}
                />
                <Link href="/">Kirish</Link>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  disabled={isSubmitting}
                  sx={{ marginTop: 3, marginBottom: 2, padding: 2, fontSize: 16 }}
                >
                  {isSubmitting ? 'Ro\'yxatdan o\'tish...' : 'Ro\'yxatdan o\'tish'}
                </Button>
              </Form>
            )}
          </Formik>
        </Box>
      </Container>
    </>
  );
};

export default Index;
