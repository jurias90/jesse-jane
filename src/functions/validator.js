function validator(form){
    let errors = {}
    let validations = {}
    let valid = false;

    Object.keys(form).map((key) => {
        const value = form[key];
        
        if(key === "email"){
            valid = value.includes('@') ? true : false;
            errors[key] = !valid ? "Please add the @ to your email." : null
           
        } else{
            valid = value.length > 1 ? true : false
            errors[key] = !valid ? "Please make your inoput longer then 2 letters." : null

        }        
        validations[key] = valid;
        
    })
    return [errors, validations]

}

export default validator
