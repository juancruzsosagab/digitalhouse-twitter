import { FieldValues, useFormContext } from "react-hook-form";

type InputTextProps = {
    fieldName: string;
    label: string;
    styles?: string;
    placeholder?: string;
    type: "text" | "password";
  };

const InputText = <T extends FieldValues,> ({fieldName, label, type, styles, placeholder}: InputTextProps)=>{
    const {register, formState: {errors}} =  useFormContext();
    return(
        <div className={`flex flex-col ${styles ?? ""}`}>
        <label >{label}</label>
        <input
          {...register(fieldName, { required: true })}
          className="p-4 mb-4 rounded bg-gray-50 boder border-gray-200"
          type={type}
          placeholder={placeholder}
        />
        {errors && errors[fieldName] && <p className='text-red-600 mt-2'>{"este campo es obligatorio"}</p>}
      </div>
    )
}

export default InputText;