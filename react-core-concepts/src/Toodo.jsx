// export default function Todo({task}){
//     return (
//         <li>Task: {task}</li>
//     )
// }


// export default function Todo({task, isDone}){
//     if(isDone === true){
//         return <li>Finished : {task}</li>
//     }
//     else{
//         return <li>Work one : {task}</li>
//     }
// }

// conditional rendering option 2
// export default function Todo({task, isDone}){
//     if(isDone){
//         return <li>Finished : {task}</li>
//     }
//         return <li>Work on : {task}</li>
// }


// conditional rendering option 3: ternary Operator
// export default function Todo({task}){
//     return (
//         <li>{isDone ? 'Finished' : 'Work on'}: {task}</li>
//     )
// }


// conditional rendering option 4: &&
// export default function Todo({task}){
//     return (
//         <li>{task} {isDone && ': Done'}</li>
//     )
// }



// // conditional rendering option 5: ||
// export default function Todo({task}){
//     return (
//         <li>{task} {isDone || ': Do it'}</li>
//     )
// }


// conditional rendering option 6: 
export default function Todo({task, isDone}){
    let listItem;
    if(isDone){
        listItem = <li>Finished : {task}</li>
    }
    else{
        listItem = <li>Work one : {task}</li>
    }
    return listItem;
}