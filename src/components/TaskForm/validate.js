const validate =(values)=>{
  var errors ={};
  const { title } = values;
  if(!title){
    errors.title="Vui lòng nhập tiêu đề";
  }
  else if(title.trim().length < 5 ){
  errors.title="Số kí tự tối thiểu là 5"
  }
  return errors;

}
export default validate;