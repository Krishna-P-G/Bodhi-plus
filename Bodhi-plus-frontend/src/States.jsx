import { createContext, useContext, useState } from "react";
import { signInWithEmailAndPassword,createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2"
import swal from "sweetalert";
import axios from "./axios";
const Context = createContext();
export const States = ({ children }) => {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [mobile, setMobile] = useState("");
    const [password, setPassword] = useState("");

    const [email1, setEmail1] = useState("");
    const [password1, setPassword1] = useState("");
    const [phno, setPhno] = useState("");
    const [name, setName] = useState("");

    const [pwerror, setPwerror] = useState("");
    const [mailerror, setmailerror] = useState("");
    const [unerror, setunerror] = useState("");
    const [moberror, setMoberror] = useState("");

    const [pwerror1, setPwerror1] = useState("");
    const [mailerror1, setmailerror1] = useState("");
    const [Phnoerror, SetPhnoerror] = useState("");
    const [Nameerror, setNameerror] = useState("");

    const [product,setProduct] = useState([]);
    const [editproduct,seteditProduct] = useState();
    const [ addprod,setaddprod ] = useState(false);
    const [ editprod,seteditprod ] = useState(false);

    const [ searchvalue,setSearchvalue ] = useState("");

    const [prodname,setProdname] = useState("");
    const [prodrate,setProdrate] = useState("");
    const [produrl,setProdurl] = useState("");
    const [prodstrip,setProdStrip] = useState("default");


    var navigate = useNavigate();

const passMatch = (e) => {
      setPwerror("");
      setMoberror("");
      setmailerror("");
      setunerror("");
      if(username===""){
          setunerror("*Username required")}
      if(mobile===""){
           setMoberror("*Mobile Number required")}
      if(email===""){
          setmailerror("*Email required")}
      if(password===""){
          setPwerror("*Password required")}
      else{
        signUp();
      }
  };

  
  const getAllProducts = () => {
    if(searchvalue==="")
    {
    fetch('http://localhost:1403/product/getall')
      .then((res) => res.json())
      .then((result) => {
      setProduct(result);
        console.log(result);
      });
    }
    else
    {
      fetch(`http://localhost:1403/product/getbyname/${searchvalue}`)
      .then((res) => res.json())
      .then((result) => {
      setProduct(result);
        console.log(result);
        if(result.length==='0')
        {
          
        }
      });
    }
     };

     const deletefromDB = (id) => {
      swal({
        title: "Confirmation",
        text: "Are you sure you want to delete this product ?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => 
      {
        if(willDelete){
          axios.delete('/product/delete',  { params: { productId:id } }).then((response)=>{
            console.log(response);
            getAllProducts()
          });
        }
      });
    };

    const SendtoprodDB = (e) => { 
      const prodDetails = {
        productName:prodname,
        productRate:prodrate,
        productUrl:produrl,
        productStrip:prodstrip
      };
      axios.post('/product/add', prodDetails).then((response)=>{
        console.log(response);
        if(response.data==="Product exists already")
        {
          e.preventDefault();
          swal("This Products exists already")
        }
        else
        {
        getAllProducts();
        }
      });
    };

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
        navigate("/admin/home");
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

const AdminMatch = (e) => {
setmailerror1("");
setPwerror1("");
setNameerror("");
SetPhnoerror("");
if(name===""){
  setNameerror("*Name required")}
if(phno===""){
    SetPhnoerror("*Phone Number required")}
if(email1===""){
  setmailerror1("*Email required")}
if(password1===""){
  setPwerror1("*Password required")}
else{
 SignupAdmin();
}
};


// database post

const sendtoDBAdmin = (e) => {
const Admin_data = { //DOctor table name
  name: name,
  phno: phno,
  email1: email1,
  password1: password1,
};
axios.post('/Admin/signup',Admin_data)
.then((response)=>
{
  console.log(response);
});
};






// signup function


const SignupAdmin = (e) => {
createUserWithEmailAndPassword(auth, email1, password1)
.then((userCredential) => {
  console.log(userCredential.user);
  sendtoDBAdmin();
  navigate("/admin/home");

})
.catch((error) => {
  if(error.code === "auth/email-already-in-use")
  alert("The email address is already in use by another account")
  else if(error.code === "auth/invalid-email")
  alert("The Email is invalid ! Please enter a valid Email ID")
  console.log(error);
});   
};

    

const logincheck = (e) => {
  setPwerror("");
  setmailerror("");
  if(email===""){
    setmailerror("*Email required")}
  if(password===""){
    setPwerror("*Password required")}
  else{
    signIn()
    
  }   
};

// database post
const sendtoDB = (e) => {
  const customer_data = { //users table name
    username: username,
    mobile: mobile,
    email: email,
    password: password,
  };
  axios.post('/Customer/signup',customer_data)
  .then((response)=>
  {
    console.log(response);
  });
  };



    

const signIn = (e) => {
  signInWithEmailAndPassword(auth, email, password)
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
            setEmail("");
            setPassword("");
            navigate("/signupquery")
          }
        });
      }
      else if(error.code === "auth/invalid-email")
      alert("The Email is invalid ! Please enter a valid Email ID")
      console.log(error);
    });
};

// signup function

const signUp = (e) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log(userCredential.user);
      sendtoDB();
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
        email,
        setEmail,
        password,
        setPassword,
        setMobile,
        mobile,
        signIn,
        signUp,
        passMatch,
        logincheck,
        pwerror,
        setPwerror,
        unerror,
        setunerror,
        mailerror,
        setmailerror,
        username,
        setUsername,
        setMoberror,
        sendtoDB,
        moberror,
        name,
        setName,
        Nameerror,
        setNameerror,
        pwerror1,
        setPwerror1,
        mailerror1,
        setmailerror1,
        product,
        setProduct,
        editproduct,
        seteditProduct,
        addprod,
        setaddprod,
        editprod,
        seteditprod,
        searchvalue,
        setSearchvalue,
        password1,
        email1,
        phno,
        setPhno,
        Phnoerror,
        SetPhnoerror,
        setPassword1,
        setEmail1,
        AdminMatch,
        deletefromDB,
        SignupAdmin,
        sendtoDBAdmin,
        logincheck1,
        SendtoprodDB,
        setProdname,
        setProdrate,
        setProdurl,
        setProdStrip,
        getAllProducts
    }}
    >{children}
    </Context.Provider>
);
};
export const useStates = () => useContext(Context);