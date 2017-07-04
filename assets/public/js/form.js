// submitFormRegistration = () => {
//
//     const user = {
//         firstName: document.getElementById("firstName").value,
//         secondName:document.getElementById("secondName").value,
//         email: document.getElementById("e-mail").value,
//         phone: document.getElementById("phone").value
//     };
//
//     const createData = user => {
//         return {
//             method: 'POST',
//             body: JSON.stringify(user),
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json',
//             }
//         };
//     };
//
//
//     const data = createData(user);
//     fetch("/reg", data).then(res => {
//         console.log('utils user 24 res:', res);
//         console.log(res.status);
//
//         if (res.status === 200) {
//             document.location.href = "#";
//             document.location.href = "#Registration_DONE";
//             $("#regForm")[0].reset();
//         }
//
//         if (res.status === 417){
//             document.location.href = "#Registration Email_ERROR";
//         }
//
//         if(res.status === 400) {
//             console.log('status = ', res.status);
//             document.location.href = "#Registration_ERROR";
//         }
//     })
//         .catch(err => {
//             console.log('Ошибка', err)
//         })
// };

submitFormRegistration = () => {

    const user = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        aboutUs: document.getElementById("aboutUs").value
    };


    const createData = user => {
        return {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        }
    };

    const data = createData(user);
    fetch("/reg", data).then(res => {
        console.log('utils user 24 res:', res);
        console.log(res.status);

        if (res.status === 200) {
            document.location.href = "#";
            document.location.href = "#Registration_DONE";
            $("#regForm")[0].reset();
        }

        if (res.status === 417){
            document.location.href = "#Registration Email_ERROR";
        }

        if(res.status === 400) {
            console.log('status = ', res.status);
            document.location.href = "#Registration_ERROR";
        }
    })
        .catch(err => {
            console.log('Error', err)
        });
};