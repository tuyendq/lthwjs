let a = 1

const printChildScopeA = () => {
    a = 200
    console.log(a)
}
const printParentScopeA = () => {
    console.log(a)
}

printChildScopeA();

printParentScopeA();

printChildScopeA();
printParentScopeA();
// printChildScopeA();
console.log(a)