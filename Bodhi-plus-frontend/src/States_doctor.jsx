
import { createContext, useContext, useState } from "react";
import { signInWithEmailAndPassword,createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import axios from "./axios";
const Context = createContext();
export const States = ({ children }) => {
    const [email1, setEmail1] = useState("");
    const [password1, setPassword1] = useState("");
    const [state_reg, setStateReg] = useState("");
    const [year, setYear] = useState("");
    const [name, setName] = useState("");

    const [pwerror1, setPwerror1] = useState("");
    const [mailerror1, setmailerror1] = useState("");
    const [StateRegerror, setStateRegerror] = useState("");
    const [Yearerror, setYearerror] = useState("");
    const [Nameerror, setNameerror] = useState("");



    const [gym, setGym] = useState([]);
    var navigate = useNavigate();

    const logincheck1 = (e) => {
        setPwerror1("");
        setmailerror1("");
        if(email1===""){
          setmailerror1("*Email required")}
        if(password1===""){
          setPwerror1("*Password required")}
        else{
          signInDoc()
        }   
      };
      const signInDoc = (e) => {
        signInWithEmailAndPassword(auth, email1, password1)
          .then((userCredential) => {
            console.log(userCredential.user);
            navigate("/home");
          })
          .catch((error) => {
            if(error.code==="auth/wrong-password")
            alert("The password is incorrect. Please enter the correct password");
            else if(error.code === "auth/user-not-found")
            {
              swal({
                title: "User Record not found",
                text: "Do you wish to create a new account ?",
                icon: "warning",
                buttons: true,
                dangerMode: true,
              })
              .then((willDelete) => {
                if(willDelete){
                  setEmail1("");
                  setPassword1("");
                  navigate("/signupquery")
                }
              });
            }
            else if(error.code === "auth/invalid-email")
            alert("The Email is invalid ! Please enter a valid Email ID")
            console.log(error);
          });
          
      };

const DocMatch = (e) => {
    setStateRegerror("");
    setYearerror("");
    setmailerror1("");
    setPwerror1("");
    setNameerror("");
    if(state_reg===""){
      setStateRegerror("*State Reg No required")}
    if(year===""){
      setYearerror("*Year required")}
    if(name===""){
      setNameerror("*Name required")}
    if(email1===""){
      setmailerror1("*Email required")}
    if(password1===""){
      setPwerror1("*Password required")}
    else{
      SignupDoc();
    }
};
  

// database post

const sendtoDBDoc = (e) => {
    const doctor_data = { //DOctor table name
      state_reg: state_reg,
      year: year,
      name: name,
      email1: email1,
      password1: password1,
    };
    axios.post('/Doctor/signup',doctor_data)
    .then((response)=>
    {
      console.log(response);
    });
    };


    



// signup function


const SignupDoc = (e) => {
  createUserWithEmailAndPassword(auth, email1, password1)
    .then((userCredential) => {
      console.log(userCredential.user);
      sendtoDBDoc();
      navigate("/home");

    })
    .catch((error) => {
      if(error.code === "auth/email-already-in-use")
      alert("The email address is already in use by another account")
      else if(error.code === "auth/invalid-email")
      alert("The Email is invalid ! Please enter a valid Email ID")
      console.log(error);
    });   
};
  return(
    <Context.Provider value={{
        
        DocMatch,
        state_reg,
        setStateReg,
        year,
        setYear,
        name,
        setName,
        StateRegerror,
        setStateRegerror,
        Yearerror,
        setYearerror,
        Nameerror,
        setNameerror,
        pwerror1,
        setPwerror1,
        mailerror1,
        setmailerror1,
        gym,
        setGym,
        SignupDoc,
        sendtoDBDoc,
        password1,
        email1,
        setPassword1,
        setEmail1,
        logincheck1

    }}
    >{children}
    </Context.Provider>
);
};
export const useStates = () => useContext(Context);