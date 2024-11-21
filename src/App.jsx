
// // import React from "react";
// // const name="shubham";
// // const age=23;
// // const App=()=>{
// // return(
// //   <h1>welcome to bhopal {name} we are web age{age*3}devloper</h1>

//import { useState } from "react";

// // )
// // }
// // export default App;
// // ==========================================
// // const sub=<ol>
// //   <li>PHP</li>
// //   <li>java</li>
// //   <li>html</li>
// //   <li>c++</li>
// // </ol>;
// // const App=()=>{
// //   return(
// //     <h1>our computer subject : {sub}</h1>
// //   )
// // }
// // export default App;
// // ==================================
// // const App=()=>{
// //   return(
// //     <>
// //      <p>
// //       <h1>we are wep delover</h1>
// //       <h1>hello </h1>
// //      </p>
// //     </>
// //   )
// // }
// // export default App;

// // const App=()=>{
// //   return(
// //   <>
// //       <center><h1>Application from</h1></center>

// //       Name : <input type="text"/>
// //       <br/>
// //       City : <input type="text"/>
// //       <hr size="4" color="red" />
// //       <button>save</button>

// //   </>
// //   )
// // }
// // export default App;
// // import Cybrom from "./cybrom";
// // const App=()=>{
// //   return(
// //     <h1>Welcome</h1>
// //   )
// // }
// // export default Cybrom;
// // ====================================
// // import Header from "./Headar";
// // import TopManu from "./TopManu";
// // import BottomManu from "./BottomManu";
// // import Content from "./Content";
// // import ShubhManu from "./ShubhManu";
// // import KoseManu from "./KoseManu";
// // import JawraManu from "./JawraManu";
// // import Footer from "./footer";
// // import BetulManu from "./BetulManu";
// // const App=()=>{
// //   return(
// //       <>
// //       <Header/>
// //       <TopManu/>
// //       <BottomManu/>
// //       <Content/>
// //       <ShubhManu/>
// //       <KoseManu/>
// //       <JawraManu/>
// //       <Footer/>
// //       <BetulManu/>
// //       </>
// //   )
// // }
// // export default App;

// // import Collge from "./collge";
// // const App=()=>{
// //   return(
// //     <>
// //    <h1>welcome</h1>
// //    <Collge name="shubham" City="bhopal" />

// //     </>
// //   )
// // }
// // export default App;
// // import Collge from "./collge"

// // const data= {
// //   color:"red",
// //   fontFamily:"verdana",
// //   TextDecoration:"underline",
// //   // backgroundolor:"yellow"
// // }
// // const mydata={
// //   color:"blue",
// //   fontFamily:"arial",
// //   TextDecoration:"overline",
// //   backgroundolor:"yellow"
// // }

// // import {BrowserRouter, Routes, Route } from "react-router-dom";
// // import Layout from "./Layout";
// // import Home from "./home";
// // import About from "./About";
// // import Contect from "./Contect";

// // const App=()=>{
// //  const name=["Ashish", "Shubham","Ayush"];
// //   const data=name.map((item)=>{
// //   return(
// //     <>
  
// //  <BrowserRouter>
// //  <Routes>
// //  <Route path="/" element={<Layout/>}>
// //  <Route index element={<Home/>}/>
// //  <Route path="home" element={<Home/>}/>
// //  <Route path="about" element={<About/>}/>
// //  <Route path="contect" element={<Contect/>}/>

// //  </Route>
// //  </Routes>
// //  </BrowserRouter>

// //   <h1>{item}</h1>

  
// //     </>
// //   )
// // })
// // return(
// //   <>
// //   {data}
// //   </>
// // )
// // }
// // export default App;

// // 08//11//2024//

// // const App=()=>{
// //   const name=["Ashish", "Shubham","Ayush"];
// //   const data=name.map((item)=>{
// //   return(
// //     <>
// //   <h1>{item}</h1>  
// //     </>
// //   )
// // })

// // return(
// //   <>
// //   <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum fugiat eligendi vitae iste commodi necessitatibus vero aspernatur optio animi facilis?</p>
// //   {data}
// //   </>
// // )
// // }
// // export default App;


// //   const name=["Ashish", "Shubham","Ayush"];
// //   const ans=name.map((key)=><option>{key}</option>)
// //   const App=()=>{
// //   return(
// //     <>
// //   <h1>Welcome</h1>
// //   <select>
// //     {ans}
// //   </select>
  
// //     </>
// //   )
// // }
// // export default App;



// const student=[
//   {
//     "rollno":121,
//     "name":"Sachin",
//     "city":"bhopal"
//   }
//   // {
//   //   "rollno":134,
//   //   "name":"Abhisekh",
//   //   "city":"bhopal"
//   // },
//   // {
//   //   "rollno":360,
//   //   "name":"Shubham",
//   //   "city":"bhopal"
//   // }
// ]

// const ans=student.map((key)=>{
//   return(
//   <>
//   <tr>
//   <td>{key.rollno}</td>
//   <td>{key.name}</td>
//   <td>{key.city}</td>
// </tr>
//   </>
// )
// })

// const App=()=>{
// return(
//   <>
//   <h1>Welcome</h1>
//  <table>
//   <tr>
//     <td>Rollno</td>
//     <td>Name</td>
//     <td>City</td>
//   </tr>
// {ans}
//  </table>

//   </>
// )
// }
// export default App;





// import image from "./image/img1.jpg";
// const App=()=>{
//   return(
//      <>
//       <h1>Wlcome to Cybrom</h1>

   
    
//      </>
//   )
// }
// export default App;



// const App=()=>{
//   return(
//      <>
//       <h1>Appliction from</h1>
//       Enter Name <input type="text" />
//       <br />
//       Enter City <input type="text" />
//      </>
//   )
// }
// export default App;



// const App=()=>{
//     const [city, setCity] = useState("Bhopal");
//     const myval =()=>{
//         setCity("Indor")
//     }
//     return(
//        <>
//        <h1>Welcome To : {city} </h1>
//        <button onClick={myval}>Click Here</button>


//        </>
//     )
//   }
//   export default App;


// import { useState } from "react";
// const App=()=>{
// const [color , setColor ] = useState("red");
        
//     return(
//        <>
//        <h1 style={{color:color}}>Welcome To : {color} </h1>
//        <br />
//        <button onClick={()=>{setColor("Yellow")}}>yellow</button>
//        <button onClick={()=>{setColor("red")}}>red</button>
//        <button onClick={()=>{setColor("pink")}}>pink</button>
//        <button onClick={()=>{setColor("blue")}}>blue</button>

//        </>
//     )
//   }
//   export default App;



// import { useState } from "react";

// const App = () => {
//   const [cnt, setCnt] = useState(0);
//   const myInc = () => {
//     setCnt(cnt + 1);
//   };
//   const myDec = () => {
//     if (cnt <= 0) {
//       alert("You can not decrement less then 0");
//     } else {
//       setCnt(cnt - 1);
//     }
//   };

//   return (
//     <>
//       <center>
//         <h1>Counter : {cnt}</h1>
//         <button onClick={myInc} style={{ backgroundColor: "green" }}>
//           Increment
//         </button>
//         <button onClick={myDec} style={{ backgroundColor: "red" }}>
//           decrement
//         </button>
//         <button
//           onClick={() => {
//             setCnt(0);
//           }}
//           style={{ backgroundColor: "yellow" }}
//         >
//           reset
//         </button>
//       </center>
//     </>
//   );
// };
// export default App;





import { Link, Route } from "react-router-dom";
const Layout=()=>{
  return(
    <>
          <BrowserRouter>
          <Routes>
            <Route></Route>
          </Routes>
          </BrowserRouter>
    </>
  )
}

export default App;