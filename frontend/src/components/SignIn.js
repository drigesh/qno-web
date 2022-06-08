import React, {useState} from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
export default function SignIn({show,setShow,sign,handleTabChange0,handleTabChange1}) {

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const [formState,setFormState] = useState({
        name: '',
        mobile: '',
        password: '',
        cpassword:'',
        check:false,
        errors: {
            name: '',
            mobile: '',
            password: '',
            cpassword:'',
            check:''
        }
    })

    const validateForm = errors => {
        let valid = true;
        Object.values(errors).forEach(val => val.length > 0 && (valid = false));
        return (formState.password === formState.cpassword) && valid;
        // return valid;
    };

    const handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        let errors = formState.errors;
    
        switch (name) {
          case 'name': 
            errors.name = 
              value.length < 4
                ? 'Full Name must be at least 4 characters long!'
                : '';
            break;
          case 'mobile': 
            errors.mobile = 
              value.length == 10 && Number(value) > 6000000000 && Number(value) < 9999999999
                ? ''
                : 'Mobile Number is not valid!';
            break;
          case 'password': 
            errors.password = 
              value.length < 8
                ? 'Password must be at least 8 characters long!'
                : '';
            break;
          default:
            break;
        }
        setFormState({errors,...formState, [name]: value});
        console.log(formState);
      }

      const handleSubmit = (event) => {
        event.preventDefault();
        
        let errors = formState.errors;
    
        
        errors.cpassword = formState.password !== formState.cpassword ? 'Confirm password should match with the password.' : ''
        errors.check = !formState.check ? 'Please agree to terms and conditions' : ''

        let valid = true;
        Object.values(errors).forEach(val => val.length > 0 && (valid = false));
        Object.values(errors).every(val => {
            if(val.length > 0){
                alert(val);
                valid=false;
                return false;
            }
            return true;
        });

        if(valid) {
            console.log("Its valid input.");
        }

      }


    // const [name,setName] = useState('');

    const handleChangeCheck = (e) =>{
        setFormState({
            ...formState,
            check : e.target.checked
        });
        // console.log(formState);
    }
    
    
    return  (
    <div className=''>
        <Modal show={show} onHide={handleClose} 
        centered
        >
            <div className='border-1 border-darkTheme m-1 rounded-sm p-2'>
            <div className='flex m-1 mb-3'>
                <div className={`w-6/12 mx-auto text-center py-2 ${sign == 0 ? "font-bold text-themeColor-500" : ""}`} onClick={handleTabChange0}> Sign Up </div>
                <span className='text-3xl'> | </span>
                <div className={`w-6/12 mx-auto text-center py-2 ${sign == 0 ? "" : "font-bold text-themeColor-500"}`} onClick={handleTabChange1}> Sign In </div>
            </div>
            {sign == 0 ? 
            <Form className='m-1 ' onSubmit={handleSubmit}>
            <Form.Group className="mt-3 flex" controlId="formBasicEmail">
                <Form.Label className='text-sm my-auto w-5/12 ml-1'>Name:</Form.Label>
                <Form.Control className='placeholder:text-sm' type="text" placeholder="Enter Your Name" name='name' value={formState.name} onChange={handleChange}/>
            </Form.Group>
            {formState.errors.name.length > 0 && 
                <p className='block text-xs w-9/12 pl-6 my-1 text-red-700 ml-auto'>{formState.errors.name}</p>}


            <Form.Group className="mt-3 flex" controlId="formBasicPhone">
                <Form.Label className='text-sm my-auto w-5/12 ml-1'>Mobile No:</Form.Label>
                <Form.Control className='placeholder:text-sm' type="text" placeholder="Enter Mobile Number" name='mobile' value={formState.mobile} onChange={handleChange}/>
            </Form.Group>
            {formState.errors.mobile.length > 0 && 
                <p className='block text-xs w-9/12 pl-6 my-1 text-red-700 ml-auto'>{formState.errors.mobile}</p>}


            <Form.Group className="mt-3 flex" controlId="formBasicPassword">
                <Form.Label className='text-sm my-auto w-5/12 ml-1'>Password:</Form.Label>
                <Form.Control className='placeholder:text-sm' type="password" placeholder="Password" name='password' value={formState.password} onChange={handleChange}/>
            </Form.Group>
            {formState.errors.password.length > 0 && 
                <p className='block text-xs w-9/12 pl-6 my-1 text-red-700 ml-auto'>{formState.errors.password}</p>}


            <Form.Group className="mt-3 flex" controlId="formBasicCheckPassword">
                <Form.Label className='text-sm my-auto w-5/12 ml-1'>Confirm Password:</Form.Label>
                <Form.Control className='placeholder:text-sm' type="password" placeholder="Confirm Password" name='cpassword' value={formState.cpassword} onChange={handleChange}/>
            </Form.Group>


            <Form.Group className="my-3 flex " controlId="formBasicCheckbox">
                <Form.Check className="text-sm mx-auto " type="checkbox" label="I agree to the Terms and Conditions" name='check' onChange={handleChangeCheck} checked={formState.check}/>
            </Form.Group>

            <Button className='hover:bg-darkTheme w-5/12 bg-themeColor mx-auto block border-0' type="submit">
                Sign In
            </Button>
            </Form> 

            : 
            
            <Form className='m-1 '>

                <Form.Group className="mt-3 flex" controlId="formBasicPhone">
                    <Form.Label className='text-sm my-auto w-5/12 ml-1'>Mobile No:</Form.Label>
                    <Form.Control className='placeholder:text-sm' type="text" placeholder="Enter Mobile Number" name='mobile' value={formState.mobile} onChange={handleChange}/>
                </Form.Group>
                {formState.errors.mobile.length > 0 && 
                    <p className='block text-xs w-9/12 pl-6 my-1 text-red-700 ml-auto'>{formState.errors.mobile}</p>}


                <Form.Group className="mt-3 flex" controlId="formBasicPassword">
                    <Form.Label className='text-sm my-auto w-5/12 ml-1'>Password:</Form.Label>
                    <Form.Control className='placeholder:text-sm' type="password" placeholder="Password" name='password' value={formState.password} onChange={handleChange}/>
                </Form.Group>

                <a className='text-sm text-darkTheme block text-right px-3 mt-0 mb-2 hover:underline hover:text-darkTheme'> Forgot Password?</a>
                <Button className='hover:bg-darkTheme w-5/12 bg-themeColor mx-auto block border-0' type="submit">
                    Sign In
                </Button>
            </Form> 
            }
            </div>

        </Modal>
    </div>
  ) 
  
}