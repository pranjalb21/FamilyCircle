const errorMsg = {
    fullname: {
        length: "Name must be atleast 3 characters.",
        required: "Please enter your name."
    },
    username:{
        length:"Username must be atleast 3 characters.",
        required: "Please enter an username."
    },
    passowrd:{
        length: "Password length must be atleast 6 characters.",
        validation: "Password must contain atleast one capital, small letter, special character and number.",
        required: "Please enter a password."
    },
    confirmPassowrd:{
        length: "Confirm password length must be atleast 6 characters.",
        validation: "Confirm password and Password not same.",
        required: "Please enter confirm password."
    },
    email:{
        required:"Please enter an email address.",
        validation: "Please provide a valid email address."
    },
    profileImage:{
        required:"Profile image is required.",
        sizeValidation: "Profile image should not be more than 10MB",
        typeValidation:"Please select an image."
    },
    coverImage:{
        sizeValidation: "Cover image size should not be more than 10MB",
        typeValidation:"Please select an image."
    }
}

export default errorMsg