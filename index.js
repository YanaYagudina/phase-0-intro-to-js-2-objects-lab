const employee = {
    name: "An",
    streetAddress: "13th st",
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
const newEmployee = {...employee}
newEmployee[key] = value;
return newEmployee
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee) {
    employee.name = 'Sam'
    employee.streetAddress = '12 Broadway'
    return employee
}
function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = {...employee, key}
    delete newEmployee.key;
    delete newEmployee.name;
    return newEmployee;
        
};
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee.name
    return employee
}