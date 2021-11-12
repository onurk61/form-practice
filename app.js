function validate(username){
    let regex = /^[a-z0-9]+$/g;
    console.log(regex.test(username))
}
validate('Mike_sfdhm')
validate('Mike_sfdhm_')
validate('     Mike_sf')
validate('asd')
validate('MIKE34123')
