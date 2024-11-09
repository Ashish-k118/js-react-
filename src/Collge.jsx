// const Collge=({name,City,})=>{
//     return(
//         <>
// <h1>My Collge name is : {name} </h1>
// <h2>My City {City} </h2>


//         </>
//     )
// }
// export default Collge;
// =========================================================
const Collge=({name,city,children})=>{
    return(
      <>
       {children}
      <h1>welcome this is cybrom component</h1>
      <h1>Name : {name} </h1>
      <h1>City : {city}</h1>
      {children} 
       <h1>welcome this is cybrom component</h1>
      <h1 style={{color:"red"}}>{children}</h1> 
     
      </>
    )
}
export default Collge;