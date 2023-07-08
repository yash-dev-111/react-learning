const parent  = React.createElement("div", {id: 'child1'},[
    React.createElement('h1', {}, 'Sibling 1'),
    React.createElement('h1', {}, 'Sibling 2')
] ,
React.createElement('div', {id: "child2"}, [
    React.createElement('h1', {}, 'Sibling 1.1'),
    React.createElement('h1', {}, 'Sibling 1.2')
]))

console.log(parent)
const root = ReactDOM.createRoot(document.getElementById('root')) //root is the place where all the React code runs

root.render(parent) //rendering heading inside a root