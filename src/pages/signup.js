import { useContext, useState } from "react";
import Input from "../components/form/input";
// import toast, { Toaster } from 'react-hot-toast';
// import axios from 'axios';
// import { AuthContext } from "../context/auth";



export default function Register() {

  // const [auth, setAuth] = useContext(AuthContext);
 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name,setName] = useState("");
  const [confirm,setConfirm] = useState("");


  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try{
  //     if(password !== confirm){
  //       // toast.error("Passwords do not match");
  //       return;
  //      } 
    //   const {data} = await axios.post(`${process.env.REACT_APP_API}/signup`, {
    //     name,
    //     email,
    //     password
    //   });
    //   if(data.error){
    //     toast.error(data.error);
    //     return;
    //   } else{
    //     setAuth(data);
    //     toast.success(data.message);
    //     console.log("Registration Succesful", data);
    //   }
    //   }catch(err){
    //   console.log(err);
    //   }
    // }
    return(
      <div className="d-flex  justify-content-center    align-items-center  vh-100" 
      style={{marginTop:"-100px"}} >
        
        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <h1 className="mb-3 fw-bold">Register</h1>
              <form>                         
                <Input value={name} setValue={setName} label="Name" type={"text"} />
                <Input value={email} setValue={setEmail}  label="Email address" type={"email"}/>
                <Input value={password} setValue={setPassword}  label="Password" type={"password"}/>
                <Input value={confirm}  setValue = {setConfirm}  label ="Confirm Password"  type={"password"} />
                <button 
                // onClick={handleSubmit}
                type="submit" class="btn btn-primary" 
                disabled={!name || !email || password.length<6}>
                  Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
  );
}     

