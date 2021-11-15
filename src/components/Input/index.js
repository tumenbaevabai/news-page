
const Input = ({name, nameText, register, defaultValue, errors, required}) => {

    return (
        <>
            <label className="form-label" htmlFor={name}>{nameText}</label>
            <input defaultValue={defaultValue} className=" form-control" type="text" id={name} {...register(name, {required})}/>
            {errors.name && <div className="text-danger">Заполните это поле</div>}
        </>
    )
}

export default Input