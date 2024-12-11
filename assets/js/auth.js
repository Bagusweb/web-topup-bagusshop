
// Contoh: Mengubah volume
document.getElementById("loginPageAudio").volume = 0.08; 
function createAdminUser() {
    let users = JSON.parse(localStorage.getItem('users')) || [];
    let adminExists = users.some(user => user.email === 'admin@gmail.com');

    if (!adminExists) {
        let user = {
            name: 'Admin Kel 4',
            username: 'admin',
            email: 'admin@gmail.com',
            password: '11111'
        };
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));
    }
}

//Fungsi Login
function login(){
    let users = JSON.parse(localStorage.getItem('users')) || [];
    let emailInput = document.getElementById('email-login').value;
    let passwordInput = document.getElementById('password-login').value;

    let userFound = false;

    for (const user of users) {
        const {name, username, email, password} = user;

        if (password === passwordInput && email === emailInput) {
            const loggedInUser = {
                name,
                username,
                email,
            };

            let loginUsers = JSON.parse(localStorage.getItem('loginUsers')) || [];

            // Hapus pengguna sebelumnya dari data login
            // loginUsers = loginUsers.filter(user => user.email !== emailInput);
            localStorage.removeItem('loginUsers');
            loginUsers.push(loggedInUser);
            localStorage.setItem('loginUsers', JSON.stringify(loginUsers));

            Swal.close();

            Swal.fire({
                title: 'Berhasil!',
                text: "Berhasil masuk, selamat datang!",
                icon: 'success',
                showCancelButton: false,
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Ok',
                allowOutsideClick: false,
                allowEscapeKey: false,
                allowEnterKey: false,
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.href = 'index.html';
                }
            });

            userFound = true;
            break;
        }
    }

    if (!userFound) {
        Swal.fire({
            title: 'Gagal!',
            text: "Email atau password salah!",
            icon: 'error',
            showCancelButton: false,
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Ok',
            allowOutsideClick: false,
            allowEscapeKey: false,
            allowEnterKey: false,
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = 'login.html';
            }
        });
    }
}






function register(){
    
    let emailInput = document.getElementById('email-register').value;
    let passwordInput = document.getElementById('password-register').value;
    let passwordKonfirmasiInput = document.getElementById('konfirmasi-password-register').value;

    
    Swal.fire({
        title: 'Mohon Tunggu',
        showConfirmButton: false,
        allowOutsideClick: false,
        willOpen: () => {
          Swal.showLoading()
        }
    });

        let users = JSON.parse(localStorage.getItem('users')) || [];
        let emailUserExists = users.some(user => user.email === emailInput);
   
        
        if (emailUserExists) {
            Swal.close();
    
            Swal.fire({
                title: 'Gagal!',
                text: "Email sudah terdaftar!",
                icon: 'error',
                showCancelButton: false,
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Ok',
                allowOutsideClick: false,
                allowEscapeKey: false,
                allowEnterKey: false,
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.href = 'register.html';
                }
            });
         

           
        }else{

            if (passwordInput !== passwordKonfirmasiInput) {
                Swal.close();
    
                Swal.fire({
                    title: 'Gagal!',
                    text: "Password dan konfirmasi password belum sesuai!",
                    icon: 'error',
                    showCancelButton: false,
                    confirmButtonColor: '#3085d6',
                    confirmButtonText: 'Ok',
                    allowOutsideClick: false,
                    allowEscapeKey: false,
                    allowEnterKey: false,
                }).then((result) => {
                    if (result.isConfirmed) {
                        window.location.href = 'register.html';
                    }
                });
               

            }else{
                let user = {
                    name: emailInput,
                    username: emailInput,
                    email: emailInput,
                    password: passwordInput
                };
                users.push(user);
                localStorage.setItem('users', JSON.stringify(users));

                Swal.close();
    
                Swal.fire({
                    title: 'Berhasil!',
                    text: "Berhasil mendaftar, silakan login!",
                    icon: 'success',
                    showCancelButton: false,
                    confirmButtonColor: '#3085d6',
                    confirmButtonText: 'Ok',
                    allowOutsideClick: false,
                    allowEscapeKey: false,
                    allowEnterKey: false,
                }).then((result) => {
                    if (result.isConfirmed) {
                        window.location.href = 'login.html';
                    }
                })
    
             

            }
           
        }
    



    //Tambahan ketika udah login maka masukkan informasi email ke dalam localStorage
}



// Panggil fungsi ini saat halaman dimuat
window.onload = function() {
    createAdminUser();
}