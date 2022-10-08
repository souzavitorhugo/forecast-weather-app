import { srid } from "./util";
import LookImg from "../appends/lookfor.svg"

export default function TextInputAnimated({id, 
  label, 
  type,
  error=false, 
  className,
  ...props}) {
    if (!id) {
      id = `inputAnimado-${srid()}`;
    }

    const errorEl = !!error ? <div className="invalid-feedback">{error}</div> : null;

    return (
      <div className="w-100">  
        <label htmlFor={id}> {label} </label>
        <input type={type} className={`${className} form-control ${!!error ? "is-invalid" : ""}`} id={id} {...props}/> 
        {errorEl}
      </div>
    )
}