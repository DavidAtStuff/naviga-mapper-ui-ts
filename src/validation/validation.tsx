export {}
/**
//  * Validation functions used to test inputs from users. 
//  */
// const Validation = {
//     articleId: [{
//       isValid: (value: any) => /^[0-9]*$/.test(value),
//       message: 'Please only input Composer id numbers',
//     },
//     {
//       isValid: (value: any) => value.toString().length === 9,
//       message: 'All Composer id numbers are 9 numbers long, PAY THE FINE OR PAY WITH YOUR BLOOD',
//     }
//   ],
// };


// /**
//  * Receive error messages produced by invalid inputs into free text area. 
//  * Will only accept numbers which are 9 characters long (ie the same length as all composer articles).
//  * 
//  * @param form: the input passed by the page
//  */
// export const GetErrorFields = (form: any) => {
//   Object.keys(form).reduce((articleId, key) => {
//     if (!Validation[key]) return articleId;

//     const errorsPerField = Validation[key]
//       // get a list of potential errors for each field
//       // by running through all the checks
//       .map((validation) => ({
//         isValid: validation.isValid(form[key]),
//         message: validation.message,
//       }))
//       // only keep the errors
//       .filter((errorPerField) => !errorPerField.isValid);

//     return { ...articleId, [key]: errorsPerField };
//   },)};