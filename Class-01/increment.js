console.log(React);
console.log(ReactDOM);



let root = document.querySelector(".root");

let Increment = ()=>{
    let [counter,setCounter] = React.useState(0);
    return(
    <div>
    <h1 class="value">{counter}</h1>
    <button class="incbutton" onClick={ function (){return setCounter(counter +1 )}}>Increment++</button>
    </div>
    );
};

//React.createElement("p",null,
    
//     [
//         React.createElement("p",null,"Hello P"),
//         React.createElement("p",null,"Hello P")

//     ]);
 
ReactDOM.render(
    <div className="conatiner">
        <Increment/>
        <Increment/>
        <Increment/>
        <Increment/>
        <Increment/>
        <Increment/>
        <Increment/>
        <Increment/>
        <Increment/>
    </div>
    ,root)




// let value = document.querySelector(".value");
// let incbutton = document.querySelector(".incbutton")

// let countNumber = 0;
// value.textContent=countNumber;

// incbutton.addEventListener("click",(x)=>{
//     countNumber++
//     value.textContent=countNumber;
// })