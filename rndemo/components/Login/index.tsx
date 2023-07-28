import React from "react";
import { Button, Text, View,TextInput } from "react-native";
import { Formik } from "formik";

import * as Yup from "yup";


const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required()
    .email("Enter valid email"),
  password: Yup.string()
    .required()
    .min(6, "That can't be very secure")
});

const  Login =() => (
    <View>
        <Text>Login</Text>
        <Formik
            initialValues={{email:'',password:''}}
            validationSchema={validationSchema}
            onSubmit={values=>{
                console.log(values)
            }}
        >{({handleChange,handleBlur,handleSubmit,errors,values,isValid})=>(
            <View>
                <TextInput name="email"
                placeholder="Enter Email"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                    />
                    {
                        errors.email &&
                        <Text style={{fontSize:10,color:'red'}}>{errors.email}</Text>
                    }
                <TextInput name="password"
                placeholder="Enter Password"
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                    />
                    {
                        errors.password &&
                        <Text style={{fontSize:10,color:'red'}}>{errors.password}</Text>
                    }
                    <Button
                    onPress={handleSubmit}
                    title="Login"
                    disabled={!isValid}
                    />

            </View>
        )}
        </Formik>
    </View>

);
export default Login;