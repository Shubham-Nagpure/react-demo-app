// import React, { useReducer, useEffect, useState } from 'react'
// import TextField from './TextFieldComponent';
// import ButtonComponent from './ButtonComponent'
// import LinkComponent from './LinkComponent'
// import ProfileComponent from './ProfileComponent'
// import  useFetch from '../hooks /useFetch'
// import { Button , Container, Form, FormGroup, Label, Spinner } from 'reactstrap';
// import * as yup from 'yup';
//
// const initialState = {
//   email: null,
//   password: null
// }
//
// const loginDataSetter = {
//   loginData: "SET VALUES"
// };
//
// const setLoginData = param => {
//   return {
//     type: loginDataSetter.loginData,
//     payload: param
//   };
// };
//
// const reducer = (state, action) => {
//   switch (action.type) {
//     case loginDataSetter.loginData:
//       return { ...state, ...action.payload };
//     default:
//       return state;
//   }
// }
//
// let schema = yup.object().shape({
//   Email: yup.string().email('Please enter a valid email')
//  .required('Please enter an email'),
//   password: yup.string().required(),
// });
//
// const ContainerComponent = (props) => {
//   const [state, dispatch] = useReducer(reducer, initialState);
//   const [isLoading, setIsLoading] = useState(false);
//   const [token, setToken] = useState("");
//   const [error, setError] = useState("");
//   const reset = () => {
//     setToken(null);
//     setError(null);
//   }
//
//   const onChange = e => {
//     const { value, name } = e.target;
//     let formData = { ...state };
//     formData[name] = value;
//     dispatch(setLoginData(formData));
//   };
//
//   const onSubmit = e => {
//     e.preventDefault();
//     setIsLoading(true);
//     const formdata = new FormData(e.target);
//
//     useFetch("https://reqres.in/api/login",{
//         method: 'POST',
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify({
//           email:formdata.get("email") ,
//           password:formdata.get("password")
//         }),
//       }).then(response => {
//         setIsLoading(false);
//
//         if(response.token!==undefined){
//           setToken(response.token)
//         }else{
//           setError(response.error);
//         }
//       })
//     }
//
//   if(state.isLoading) {
//     return (
//       <div>
//         <Spinner type="grow" color="primary" />
//         <Spinner type="grow" color="info" />
//         <Spinner type="grow" color="light" />
//         <Spinner type="grow" color="secondary" />
//         <Spinner type="grow" color="dark" />
//       </div>
//     );
//   } else if (state.token === '') {
//     return (
//       <Container>
//         <br />
//         <br />
//         <div class="col-md-4 offset-md-4">
//           <div class="text-center p-5 shadow-lg">
//             <Label class="h4 mb-4">LOGIN</Label>
//             <hr />
//             <br />
//             <form onSubmit={onSubmit}>
//               <FormGroup>
//                 <TextField
//                 type ='text'
//                 placeholder="Username"
//                 name = 'email'
//                 class="form-control"
//                 onChange={onChange}
//                 value= {state.email} required/>
//               </FormGroup>
//               <FormGroup>
//                 <TextField
//                 type= 'password'
//                 placeholder = 'Password'
//                 name = 'password'
//                 onChange={onChange}
//                 value= {state.password} />
//               </FormGroup>
//               <FormGroup>
//                 <button
//                 class="btn btn-info btn-block my-4"
//                 type="submit">Submit</button>
//               </FormGroup>
//               <FormGroup>
//                 <Label>New User..</Label>
//                 <LinkComponent
//                 class="text-decoration-none"
//                 value='CreateAccount' href='#'/>
//               </FormGroup>
//             </form>
//           </div>
//         </div>
//       </Container>
//     );
//   }else{
//     return (
//       <>
//         <ProfileComponent/>
//       </>
//     )
//   }
// }
// export default ContainerComponent;
