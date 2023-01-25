import { check  , validationResult} from 'express-validator';
//, Express Validator is a set of Express. js middleware
// provides server side data validation
 

 
//exports.isRequestValidated was not working 
//isnt defined error
export const validateSignUpRequest =  [
    check('firstName')
    .notEmpty()
    .withMessage('firstName is required'),
    check('lastName')
    .notEmpty()
    .withMessage('lastName is required'),
    check('email')
    .isEmail()
    .withMessage('valid email is required'),
    check('password')
    .isLength({min: 6})
    .withMessage('password must be 6 characters long')
];

export const validateLogInRequest =  [
    check('email')
    .isEmail()
    .withMessage('valid email is required'),
    check('password')
    .isLength({min: 6})
    .withMessage('password must be 6 characters long')
];

export const isSignUpRequestValidated = function (request, response, next) {

    const errors = validationResult(request);
    if (errors.array().length > 0) {
        return response.status(400).json({ errors: errors.array()[0] });
    }
    next();

};

export const isLogInRequestValidated = function(request , response , next){
    
    const errors = validationResult(request);
    if(errors.array().length >0){
        return response.status(400).json({ errors: errors.array()[0]});
    }
}
 

 