const errorMsg = {
    fullname: {
        length: "Name must be atleast 3 characters.",
        required: "Please enter your name.",
    },
    username: {
        length: "Username must be atleast 3 characters.",
        required: "Please enter an username.",
    },
    password: {
        length: "Password length must be atleast 6 characters.",
        validation:
            "Password must contain atleast one capital, small letter, special character and number.",
        required: "Please enter a password.",
    },
    confirmPassword: {
        length: "Confirm password length must be atleast 6 characters.",
        validation: "Confirm password and Password not same.",
        required: "Please enter confirm password.",
    },
    email: {
        required: "Please enter an email address.",
        validation: "Please provide a valid email address.",
    },
    profileImage: {
        required: "Profile image is required.",
        sizeValidation: "Profile image should not be more than 10MB",
        typeValidation: "Please select an image.",
    },
    coverImage: {
        sizeValidation: "Cover image size should not be more than 10MB",
        typeValidation: "Please select an image.",
        required:"Please select an image."
    },
    avatar: {
        sizeValidation: "Avatar size should not be more than 10MB",
        typeValidation: "Please select an image.",
        required:"Please select an Avatar for your profile."
    },
    userNameOrEmail:{
        length: "Username or email must be atleast 3 characters.",
        required: "Please enter an username or email.",
    },
    title:{
        length: "Title must be atleast 3 characters.",
        required: "Please enter video title.",
    },
    description:{
        length: "Description must be atleast 3 characters.",
        required: "Please enter video description.",
    },
    thumbnail: {
        sizeValidation: "Thumbnail size should not be more than 10MB",
        typeValidation: "Please select a thumbnail.",
        required:"Thumbnail is required."
    },
    video: {
        typeValidation: "Please select a video.",
        required:"Video is required"
    },
    content:{
        length: "Tweet must be atleast 3 characters.",
        required: "Please type something to post.",
    },
    image: {
        sizeValidation: "Image size should not be more than 10MB",
        typeValidation: "Please select a Image.",
        required:"Image is required."
    },
};

export default errorMsg;
