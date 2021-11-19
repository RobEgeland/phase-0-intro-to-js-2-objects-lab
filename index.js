const employee = {
    name: "rob",
    streetAddress: "25 Duxbury",
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
   const newObj = {...employee, [key]: value};
    return newObj;
};

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee
};

function deleteFromEmployeeByKey(employee, key, value) {
    const newObj = {...employee};
    delete newObj[key];
    return newObj;
};

function destructivelyDeleteFromEmployeeByKey(employee, key, value) {
    delete employee[key];
    return employee;
}
