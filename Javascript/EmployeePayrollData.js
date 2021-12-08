function validate() {
    var nameregex = ('^[A-Z]{1}[a-zA-Z\\s]{3,}$');
    var ctrl =  document.getElementById('name').value;
    var profilepic = document.getElementById('profileimages').value;
    if((ctrl.match(nameregex)) == null)
    {
        window.alert('Invalid Entry!!!! Please enter the name as First Letter in Capital and atleast 3 characters ');
    }
    else if (profilepic == null){
        window.alert('Please select appropriate Profile Picture');

    }
    return false;
}
window.addEventListener('DOMContentLoaded' , (Event) => {
    const Name = document.querySelector('#name');
    const textError = document.querySelector('.text-error');
    Name.addEventListener('input', function(){
        if(Name.value.length == 0){
            textError.textContent=" Please enter the name in correct format";
            return;
        }
        try{
            (new EmployeePayrollData()).Name = Name.value;
            textError.textContent = " ";
        }catch  (e){
            textError.textContent = e;
        }
    });
    
    
    const salary = document.querySelector('#salary');
    const output = document.querySelector('.salary-output');
    output.textContent = salary.value;
    salary.addEventListener('input', function() {
        output.textContent = salary.value;

    });
});

const save  = () => {
    try{
        localStorage.setItem("Name: ", document.getElementById('name').value);
        localStorage.setItem("Profile Image : ", getSelectedValues('[name=profileImage]'));
        var gender = document.getElementById('gender').value;
        var gender_value;
        if (document.getElementById('maleGender').checked) {
            localStorage.setItem("Gender : ",document.getElementById('maleGender').value);
          } else {
          localStorage.setItem("Gender : ",document.getElementById('femaleGender').value);
        }
        localStorage.setItem("Salary: ", document.getElementById('salary').value);
        localStorage.setItem("Department :", getSelectedValues ('[name=Dept]'));
        localStorage.setItem("Notes: ", document.getElementById('notes').value);
        localStorage.setItem("Start Date",document.getElementById('day').value 
        + document.getElementById('month').value +" " +
        document.getElementById('year').value);
        
        // let employeePayrollData = createEmployeePayroll();
        // createAndUpdateStorage(employeePayrollData);
    }catch(e) {
        return;
    }
}

const createEmployeePayroll = () => {

    
    // let employeePayrollData = new employeePayrollData();
    // try {
    //     employeePayrollData.name =  getInputValueById('#name');
    // } catch (e) {
    //     setTextvalue('.text-error' , e);
    //     throw e;
    // }
    //     employeePayrollData.profileImage = getSelectedValues('[name=profileImage]').pop();
    //     employeePayrollData.gender = getSelectedValues('[name=gender]').pop();
    //     employeePayrollData.department = getSelectedValues('[name=Dept]').pop();
    //     employeePayrollData.salary = getSelectedValues('[name=salary]').pop();
    //     employeePayrollData.notes =getInputValueById('#notes');
    //     let date = getInputValueById('#day') + getInputValueById('#month') +" " +
    //                 getInputValueById('#year');
    //     employeePayrollData.date = Date.parse(date);
    //     alert(employeePayrollData.toString());
    //     return employeePayrollData;
    }

const getSelectedValues = (propertyValue) => {
    let allItems = document.querySelectorAll(propertyValue);
    let selItems = [];
    allItems.forEach(item => {
        if(item.checked) selItems.push(item.value);
    });
    return selItems;
}

function createAndUpdateStorage(employeePayrollData){
    let employeePayrollList = JSON.parse(localStorage.getItem("EmployeePayrollList"));
    
    if(employeePayrollList !== "undefined"){
        employeePayrollList.push(employeePayrollData);
    } else {
        employeePayrollList = [employeePayrollData]
    }
    alert(employeePayrollList.toString());
    localStorage.setItem("EmployeePayrollList", JSON.stringify(employeePayrollList))
}
