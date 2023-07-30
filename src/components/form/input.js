export default function Input({value,setValue,label,type}){
    return (
    <div className="mb-3">
        <label className="form-label">{label}</label>
        <input 
        type={type}
        value = {value}
        onChange={(e) => setValue(e.target.value)}
        className="form-control" />
    </div>
    );
}

