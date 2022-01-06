const form = document.getElementById('form');

const userDate = [];

function retrieveFormValue(event) {
    event.preventDefault();

    const myFirstName = form.querySelector('[name="myFirstName"]');
    const myLastName  = form.querySelector('[name="myLastName"]');
    const myPassword  = form.querySelector('[name="myPassword"]');
    const myAge       = form.querySelector('[name="myAge"]');
    const myCountry   = form.querySelector('[name="myCountry"]');
    const myCity      = form.querySelector('[name="myCity"]');
    const myStreet    = form.querySelector('[name="myStreet"]');

    const userDate ={
        password: myPassword.value,
        age: myAge.value,
        country: myCountry.value,
        city: myCity.value,
        street: myStreet.value,
        nameUser:{
            firstName: myFirstName.value,
            lastName: myLastName.value
        }

    }

    console.log(userDate);
}


form.addEventListener('submit', retrieveFormValue);
