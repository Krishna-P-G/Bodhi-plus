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
    
    //login validation for admin
    const [mailerror2, setmailerror2] = useState("");
    const [pwerror2, setPwerror2] = useState("");
    //login validation for customer
    const [mailerror3, setmailerror3] = useState("");
    const [pwerror3, setPwerror3] = useState("");
    
    const [pwerror, setPwerror] = useState("");
    const [mailerror, setmailerror] = useState("");
    const [unerror, setunerror] = useState("");
    const [moberror, setMoberror] = useState("");

    const [pwerror1, setPwerror1] = useState("");
    const [mailerror1, setmailerror1] = useState("");
    const [Phnoerror, SetPhnoerror] = useState("");
    const [Nameerror, setNameerror] = useState("");

    const [gym,setGym] = useState([]);
    const [editgyms,seteditGym] = useState();
    const [ addgym,setaddgym ] = useState(false);
    const [ editgym,seteditgym ] = useState(false);

    const [ searchvalue,setSearchvalue ] = useState("");

    const [gymname,setGymname] = useState("");
    const [gymrate,setGymrate] = useState("");
    const [gymurl,setGymurl] = useState("");
    const [gymdescription,setGymdescription] = useState("default");


    var navigate = useNavigate();

const ClientMatch = (e) => {
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
        signupCustomer();
      }
  };

  
  const getAllGyms = () => {
    if(searchvalue==="")
    {
    fetch('http://localhost:1403/gym/getall')
      .then((res) => res.json())
      .then((result) => {
      setGym(result);
        console.log(result);
      });
    }
    else
    {
      fetch(`http://localhost:1403/gym/getbyname/${searchvalue}`)
      .then((res) => res.json())
      .then((result) => {
      setGym(result);
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
        text: "Are you sure you want to delete this gym ?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => 
      {
        if(willDelete){
          axios.delete('http://localhost:1403/gym/delete',  { params: { gymId:id } }).then((response)=>{
            console.log(response);
            getAllGyms()
          });
        }
      });
    };

    const SendtogymDB = (e) => { 
      const gymDetails = {
        gymName:gymname,
        gymRate:gymrate,
        gymUrl:gymurl,
        gymDescription:gymdescription
      };
      axios.post('http://localhost:1403/gym/add', gymDetails).then((response)=>{
        console.log(response);
        if(response.data==="Equipment exists already")
        {
          e.preventDefault();
          swal("This Equipment exists already")
        }
        else
        {
        getAllGyms();
        }
      });
    };

  const admincheck = (e) => {
    setPwerror2("");
    setmailerror2("");
    if(email1===""){
      setmailerror2("*Email required")}
    if(password1===""){
      setPwerror2("*Password required")}
    else{
      signInAdmin()
    }   
  };
  const signInAdmin = (e) => {
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
              navigate("/signup")
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
axios.post('http://localhost:1403/Admin/signup',Admin_data)
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

    

const customercheck = (e) => {
  setPwerror3("");
  setmailerror3("");
  if(email===""){
    setmailerror3("*Email required")}
  if(password===""){
    setPwerror3("*Password required")}
  else{
    signIncustomer()
    
  }   
};

// database post
const sendtoDB = (e) => {
  const customer_data = { //users table name
    username: username,
    mobile: mobile,
    email: email,
    password: password
  };
  axios.post('http://localhost:1403/Customer/signup',customer_data)
  .then((response)=>
  {
    console.log(response);
  });
  };



    

const signIncustomer = (e) => {
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
            navigate("/signup")
          }
        });
      }
      else if(error.code === "auth/invalid-email")
      alert("The Email is invalid ! Please enter a valid Email ID")
      console.log(error);
    });
};

// signup function

const signupCustomer = (e) => {
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
        signIncustomer,
        signupCustomer,
        ClientMatch,
        customercheck,
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
        pwerror3,
        setPwerror3,
        mailerror3,
        setmailerror3,
        pwerror2,
        setPwerror2,
        pwerror1,
        setPwerror1,
        mailerror1,
        setmailerror1,
        mailerror2,
        setmailerror2,
        gym,
        setGym,
        editgyms,
        seteditGym,
        addgym,
        setaddgym,
        editgym,
        seteditgym,
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
        admincheck,
        SendtogymDB,
        setGymname,
        setGymrate,
        setGymurl,
        setGymdescription,
        getAllGyms
    }}
    >{children}
    </Context.Provider>
);
};
export const useStates = () => useContext(Context);