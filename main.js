const myFunction = ({firstName,Lastname}) => {
    console.log('Fullname :', firstName+ Lastname);
}

myFunction({
    firstName: 'kafil',
    Lastname: 'udin'
})

function addName(firstName,Lastname) {
    console.log('fullname :',firstName,Lastname)
}

addName('kafil','udin')

const sum = new Function('x','y', 'return x+y')

console.log(sum(7,2))

const myMessage = () => {
    alert("My Name is Kafiluddin")
}

const handleChange = () => {
    const getValue = document.getElementById('fullName').value
    console.log('the value is :', getValue);
}

const array = [1,2,3]
console.log(array);
const objc = {name: "amirul"}
const Str = "amirul"
const numb = 1

const myMessage1 = () => {
    alert("kafiludin")
}

const handleChange1 = () => {
    const getValue = document.getElementsByClassName('name')[0].value
    console.log('the value is :',getValue);
}

const sum3 = (x,y) => {
    console.log(x+y)
} 

sum3(3, 3)