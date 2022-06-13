/**
 * 
 * 
 * init class 
 * const validate = new EasyValidation();



**/



export default class EasyValidation {

    //validate Name

    name(elementId) {
        const FeedbackClass = elementId.nextElementSibling;
        const rex = /^[A-Za-z]{2,25}\s[A-Za-z ]{2,75}$/;
        const rex1 = /^[A-Za-z]{2,25}$/;
        if (!rex1.test(elementId.value) && !rex.test(elementId.value)) {
            FeedbackClass.classList.add("show");
            elementId.classList.add("is-invalid");
            return true;
        } else {
            FeedbackClass.classList.remove("show");
            elementId.classList.remove("is-invalid");
            return false;
        }
    }

    //validate Name with Number
    nameWithNumber(elementId) {
        const FeedbackClass = elementId.nextElementSibling;
        const rex = /^[A-Za-z ]{2,25}$/;    
        if (!rex.test(elementId.value)) {
            FeedbackClass.classList.add("show");
            elementId.classList.add("is-invalid");
            return true;
        } else {
            FeedbackClass.classList.remove("show");
            elementId.classList.remove("is-invalid");
            return false;
        }
    }

    //validate Number
    number(elementId) {
        const FeedbackClass = elementId.nextElementSibling;
        const rex = /^[0-9]{2,8}$/;
        if (!rex.test(elementId.value)) {
            FeedbackClass.classList.add('show');
            elementId.classList.add('is-invalid');
            return true;
        } else {
            FeedbackClass.classList.remove('show');
            elementId.classList.remove('is-invalid');
            return false;
        }
    }

    // validate Mobile Number
    mobileNumber(elementId) {
        const FeedbackClass = elementId.nextElementSibling;
        const rex = /^[6-9]([0-9]{9})$/;
        if (!rex.test(elementId.value)) {
            FeedbackClass.classList.add("show");
            elementId.classList.add("is-invalid");
            return true;
        } else {
            FeedbackClass.classList.remove("show");
            elementId.classList.remove("is-invalid");
            return false;
        }
    }

    // validate Email
    email(elementId) {
        const FeedbackClass = elementId.nextElementSibling;
        const rex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

        if (!rex.test(elementId.value)) {
            FeedbackClass.classList.add("show");
            elementId.classList.add("is-invalid");
            return true;
        } else {
            FeedbackClass.classList.remove("show");
            elementId.classList.remove("is-invalid");
            return false;
        }
    }

    // validate Course Name
    courseName(elementId) {
        const FeedbackClass = elementId.nextElementSibling;
        const rex = /[a-zA-Z ().0-9-]{2,30}$/;
        if (!rex.test(elementId.value)) {
            FeedbackClass.classList.add("show");
            elementId.classList.add("is-invalid");
            return true;
        } else {
            FeedbackClass.classList.remove("show");
            elementId.classList.remove("is-invalid");
            return false;
        }

    }

    // validate Batch
    batch(elementId) {
        const FeedbackClass = elementId.nextElementSibling;
        const rex = /([0-9]{4})-([0-9]{4})/g;
        if (!rex.test(elementId.value)) {
            FeedbackClass.classList.add("show");
            elementId.classList.add("is-invalid");
            return true;
        } else if (BatchName.value.length != 9) {
            FeedbackClass.classList.add("show");
            elementId.classList.add("is-invalid");
        } else {
            FeedbackClass.classList.remove("show");
            elementId.classList.remove("is-invalid");
            return false;
        }
    }

    // validate Password
    password(elementId) {
      const FeedbackClass = elementId.nextElementSibling;
        const rex = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/g;
      if (!rex.test(elementId.value)) {
            FeedbackClass.classList.add("show");
          elementId.classList.add("is-invalid");
            return true;
        } else {
            FeedbackClass.classList.remove("show");
          elementId.classList.remove("is-invalid");
            return false;
        }
    }

    // match Password
    matchPassword(elementId,value) {
        const FeedbackClass = elementId.nextElementSibling;
        if (value.trim() != password.value) {
            FeedbackClass.classList.add("show");
            elementId.classList.add("is-invalid");
            return true;
        } else {
            FeedbackClass.classList.remove("show"); 
            elementId.classList.remove("is-invalid");
            return false;
        }
    }

    // validate userName
    userName(elementId) {
        const FeedbackClass = elementId.nextElementSibling;
        const rex = /^[A-Za-z0-9]{2,30}$/;
        if (!rex.test(txtUserName.value)) {
            FeedbackClass.classList.add("show");
            elementId.classList.add("is-invalid");
            return true;
        } else {
            FeedbackClass.classList.remove("show");
            elementId.classList.remove("is-invalid");
            return false;
        }
    }

    // validate Pincode
    pincode(elementId) {
        const FeedbackClass = elementId.nextElementSibling;
        const rex = /^[0-9]{6}$/;
        if (!rex.test(elementId.value)) {
            FeedbackClass.classList.add("show");
            elementId.classList.add("is-invalid");
            return true;
        } else {
            FeedbackClass.classList.remove("show");
            elementId.classList.remove("is-invalid");
            return false;
        }
    }
}