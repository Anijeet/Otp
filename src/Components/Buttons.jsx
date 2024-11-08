export const Button =({ 
    disabled,
    children,
    onClick
})=>{
   
    return(
        <div className="relative top-80 right-20">
            <span onClick={!disabled ? onClick : undefined} className={` rounded-2xl text-4xl px-16 py-4 text-white cursor-pointer ${disabled? "bg-blue-200 ": "bg-green-400"}`}>
                {children}
            </span>
        </div>
    )
}