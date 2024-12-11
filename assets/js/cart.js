// document.addEventListener('DOMContentLoaded', function() {
    // function testess() {
    //     console.log('ya');
    //     let userId = document.getElementById('user_id');
    //     Swal.fire({
    //         title: 'Yakin?',
    //         text: "Apakah Anda yakin ingin menambahkan user id " + userId.value + "?",
    //         icon: 'question',
    //         showCancelButton: true,
    //         confirmButtonColor: '#3085d6',
    //         confirmButtonText: 'Ok',
    //         cancelButtonText: 'Tidak',
    //         allowOutsideClick: false,
    //         allowEscapeKey: false,
    //         allowEnterKey: false,
    //     }).then((result) => {
    //         if (result.isConfirmed) {
    //             // localStorage.removeItem('loginUsers');
    //             // window.location.href = 'pages/index.html';
    //         }
    //     });
    // }

    // Export fungsi testess jika perlu
//     window.testess = testess;
// });
function createPaymentTable() {
    let paymentCategories = JSON.parse(localStorage.getItem('paymentCategories'));

    if (!paymentCategories) {
        paymentCategories = [];
    }

    if (paymentCategories.length < 1) {
        let paymentCategoryLists = [
            {
                id : 1, 
                nama : 'Gopay' ,
                logo : 'assets/photos/payment/gopay.png' ,
            },
            {
                id : 2, 
                nama : 'OVO' ,
                logo : 'assets/photos/payment/ovo.jpeg' ,
            },
            {
                id : 3, 
                nama : 'QRIS' ,
                logo : 'assets/photos/payment/qris copy.png' ,
            },
            {
                id : 4, 
                nama : 'Indomart' ,
                logo : 'assets/photos/payment/indomaret.jpeg' ,
            },
            {
                id : 5, 
                nama : 'Alfamart' ,
                logo : 'assets/photos/payment/logo-alfamart.jpg' ,
            },
            {
                id : 6, 
                nama : 'Transfer Bank' ,
                logo : 'assets/photos/payment/logo-semua-bank-14.png' ,
            },
           
        ]

        for (const pc of paymentCategoryLists) {
            paymentCategories.push(pc);
        }
        localStorage.setItem('paymentCategories', JSON.stringify(paymentCategories));
    }

    showPaymentCategory();
}

function showPaymentCategory(){
    let bungkus = document.getElementById('section-payment');
    let paymentCategories = JSON.parse(localStorage.getItem('paymentCategories'));

    let content = ""; // Inisialisasi variabel string untuk menyimpan konten
   
    //
    for (const pC of paymentCategories) {
        const {id, nama, logo } = pC;
        content += `
                <div class="swiper-slide card text-center py-2" style="border-radius: 20px;">
                        
                    <p class="name mb-0 mt-2 fw-bold">${nama}</p>
                    <p class="address">${status}</p>
                    <div class="card-body px-5 py-4 position-relative mx-auto">
                    <i
                        class="bx bxs-quote-left position-absolute top-0 start-0"
                    ></i>
                    <i
                        class="bx bxs-quote-right position-absolute bottom-0 end-0"
                    ></i>
                    <p class="testi-text">
              
                    </p>
                    </div>
                </div>
        `;
    }

    // bungkus.innerHTML = content; // Menetapkan konten baru ke elemen
}


function cekCart(){
    let cart = JSON.parse(localStorage.getItem('cart'));

    if (!cart) {
        Swal.fire({
            title: 'Gagal!',
            text: "Silakan memilih game terlebih dahulu!",
            icon: 'error',
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
    }
}
function getBannerDetailGame(){
    let cart = JSON.parse(localStorage.getItem('cart'));
    let gameId = cart.gameId;
    let games = JSON.parse(localStorage.getItem('games'));
    let banner = null;
    let name = null;
    for (const i of games) {
        if (i.id === gameId) {
            nama = i.nama;
            deskripsi = i.deskripsi;
            banner = i.banner;
        }
    }

    let bungkusBanner = document.getElementById('banner-detail-img');
    let bungkusDesc = document.getElementById('game-detail-desc');
    bungkusBanner.innerHTML = `<img src="${banner}" alt="TopUpFourFun Banner" class="img-fluid" style="border-radius: 20px; box-shadow: 4px 6px 8px rgba(0,0,0,0.5);">`;
    bungkusDesc.innerHTML = 
        `
            <h2 style="color: white;"><b>${nama}</b></h2>
            <p class="text-justify mt-4" style="color: white;">
                ${deskripsi}
            </p>
            
        `;

        // <p class="text-justify">
            //     Top up ML Diamond, Twilight Pass, dan Weekly Pass hanya dalam hitungan detik! Cukup masukkan User ID dan Zone ID MLBB Anda, pilih jumlah Diamond yang Anda inginkan, selesaikan pembayaran, dan Diamond akan secara langsung ditambahkan ke akun Mobile Legends Anda.
            // </p>
            // <p class="text-justify">
            //     Bayarlah menggunakan Codacash, GoPay, ShopeePay, Dana, OVO, LinkAja, Telkomsel, Indosat, Tri, XL, Bank Transfer, QRIS, Indomaret, Alfamart, Kredivo, Kartu Kredit, dan Doku Wallet.
            // </p>
            // <p class="text-justify">
            //     Harga sudah termasuk PPN. Informasi tambahan, untuk transaksi menggunakan Telkomsel akan dikenakan biaya tambahan pajak.
            // </p>
            // <p class="text-justify warning">
            //     PERINGATAN: Harga sudah termasuk PPN. Informasi tambahan, untuk transaksi menggunakan Telkomsel akan dikenakan biaya tambahan pajak.
            // </p>
    


}
function getToken(){
    let cart = JSON.parse(localStorage.getItem('cart'));
    document.getElementById('token').value = cart.token;
}


function crudPlayerId(playerId) {
    let cart = JSON.parse(localStorage.getItem('cart'));
    let gameId = cart.gameId;
    let games = JSON.parse(localStorage.getItem('games'));
    let item = null;
    for (const i of games) {
     
        if (i.id == gameId) {
            item = i.item;
            break;
        }
    }

    let jmlDiamond = 0;
    for (let i = 0; i < cart.playerId.length; i++) {
        if (cart.playerId[i].userId === playerId) {
            jmlDiamond = cart.playerId[i].jmlDm
            break;
        }
    }
    Swal.fire({
        title: 'Form Detail User',
        html: `
            <input type="text" id="usernameOld" class="swal2-input" placeholder="UserId" value="${playerId}" hidden>
            <div>
                <label for="usernameSA">User ID</label>
                <input type="text" id="usernameSA" class="swal2-input" placeholder="UserId" value="${playerId}">
            </div>
            <div>
                <label for="jmlDiamondSA">Jml ${item}</label>
                <input type="number" id="jmlDiamondSA" class="swal2-input" placeholder="Jumlah Diamond" value="${jmlDiamond}" min="0">
            </div>
        `,

    

        showCancelButton: true,
        showConfirmButton: true,
        confirmButtonText: 'Update data',
        cancelButtonText: 'Delete data',
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        focusConfirm: false,
    }).then((result) => {
        if (result.isConfirmed) {
            const usernameOld = Swal.getPopup().querySelector('#usernameOld').value;
            const username = Swal.getPopup().querySelector('#usernameSA').value;
            const jmlDiamond = Swal.getPopup().querySelector('#jmlDiamondSA').value;

            // Panggil fungsi untuk meng-handle update data
            handleUpdate(username, usernameOld, jmlDiamond, item);
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            // Panggil fungsi untuk meng-handle delete data
            handleDelete(playerId);
        }
    });
}

function handleUpdate(username, usernameOld, jmlDiamond, item) {
    let countUsername = (username+"").length;

    if(jmlDiamond*1 < 0){
        Swal.fire({
            title: 'Gagal!',
            text: "Jumlah "+ item +" tidak boleh negatif!",
            icon: 'error',
            showCancelButton: false,
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Ok',
            allowOutsideClick: false,
            allowEscapeKey: false,
            allowEnterKey: false,
        });

        return;
    }

    if(countUsername < 9){
        Swal.fire({
            title: 'Gagal!',
            text: "User ID minimal 9 digit!",
            icon: 'error',
            showCancelButton: false,
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Ok',
            allowOutsideClick: false,
            allowEscapeKey: false,
            allowEnterKey: false,
        });

    }else if(countUsername > 10){

        Swal.fire({
            title: 'Gagal!',
            text: "User ID maksimal 10 digit!",
            icon: 'error',
            showCancelButton: false,
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Ok',
            allowOutsideClick: false,
            allowEscapeKey: false,
            allowEnterKey: false,
        });

    }else{

        let cart = JSON.parse(localStorage.getItem('cart'));
        for (let i = 0; i < cart.playerId.length; i++) {
            if (cart.playerId[i].userId === usernameOld) {
                cart.playerId[i].userId = username;
    
                if (jmlDiamond) {
                    cart.playerId[i].jmlDm = jmlDiamond*1;
                }
                break;
            }
        }
    
        localStorage.setItem('cart', JSON.stringify(cart));
        showPlayerId();
        getDetailPembayaran();

        Swal.fire({
            title: 'Berhasil!',
            text: "Berhasil mengupdate data User!",
            icon: 'success',
            showCancelButton: false,
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Ok',
            allowOutsideClick: false,
            allowEscapeKey: false,
            allowEnterKey: false,
        });

    }



}



function handleDelete(playerId) {
    let cart = JSON.parse(localStorage.getItem('cart'));

    // Temukan indeks dari playerId yang ingin dihapus
    let indexToRemove = -1;
    for (let i = 0; i < cart.playerId.length; i++) {
        if (cart.playerId[i].userId === playerId) {
            indexToRemove = i;
            break;
        }
    }

    if (indexToRemove !== -1) {
        // Hapus elemen dari array
        cart.playerId.splice(indexToRemove, 1);

        // Perbarui localStorage
        localStorage.setItem('cart', JSON.stringify(cart));

        // Tampilkan ulang daftar player ID
        showPlayerId();
        getDetailPembayaran();
        // Tampilkan pesan sukses
        Swal.fire({
            title: 'Berhasil!',
            text: "Berhasil menghapus data User!",
            icon: 'success',
            showCancelButton: false,
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Ok',
            allowOutsideClick: false,
            allowEscapeKey: false,
            allowEnterKey: false,
        });
    } else {
        // Jika playerId tidak ditemukan
        Swal.fire({
            title: 'Gagal!',
            text: "User ID tidak ditemukan!",
            icon: 'error',
            showCancelButton: false,
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Ok',
            allowOutsideClick: false,
            allowEscapeKey: false,
            allowEnterKey: false,
        });
    }
}



function showPlayerId() {
    let playerIds = JSON.parse(localStorage.getItem('cart'));
    playerIds = playerIds.playerId;

    let bungkusPlayerId = document.getElementById('listPlayer');
    let temp = '';
    for (const pI of playerIds) {
        temp += 
        `
            <div class="btn btn-success" onclick="crudPlayerId('${pI.userId}')">
                ${pI.userId}
            </div> 
        `;
    }

    bungkusPlayerId.innerHTML = temp;
}



function showUserLoginStatus(){
    let bungkus = document.getElementById('user-status');
    let userLogin = JSON.parse(localStorage.getItem('loginUsers'));
    if (userLogin !== null) {
        let user = userLogin[userLogin.length - 1].name
        bungkus.innerHTML = `

        <i class="bx bxs-user" style="color: white; font-size: large; margin: 20px;"> ${user}</i>
        <div class="btn btn-primary btn-sm" onClick="logout()" style="border-radius: 20px; width: 80px; font-weight: bold; font-size: medium;">Logout</div>
        `; // Menetapkan konten baru ke elemen
    }else{
        bungkus.innerHTML = `
        
            <div class="btn btn-primary btn-sm" style="border-radius: 20px; width: 80px; font-weight: bold; font-size: medium;"><a href="login.html" class="auth-link">Login</a></div>
            <div class="btn btn-success btn-sm" style="border-radius: 20px; width: 80px; font-weight: bold; font-size: medium;"><a href="register.html" class="auth-link">Daftar</a></div>
        `;
    }
}

    function tambahPlayerId() {
    
        let userId = document.getElementById('user_id').value;
        let countUserId = (userId + "");
        countUserId = countUserId.length;
        
    
        if (!userId) {
            Swal.fire({
                title: 'Gagal!',
                text: "Silakan isi User ID terlebih dahulu!",
                icon: 'error',
                showCancelButton: false,
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Ok',
                allowOutsideClick: false,
                allowEscapeKey: false,
                allowEnterKey: false,
            });
        }else if(countUserId < 9){
            Swal.fire({
                title: 'Gagal!',
                text: "User ID minimal 9 digit!",
                icon: 'error',
                showCancelButton: false,
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Ok',
                allowOutsideClick: false,
                allowEscapeKey: false,
                allowEnterKey: false,
            });

        }else if(countUserId > 10){

            Swal.fire({
                title: 'Gagal!',
                text: "User ID maksimal 10 digit!",
                icon: 'error',
                showCancelButton: false,
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Ok',
                allowOutsideClick: false,
                allowEscapeKey: false,
                allowEnterKey: false,
            });

        }else{

            Swal.fire({
                title: 'Yakin?',
                text: "Apakah Anda yakin ingin menambahkan User ID " + userId + "?",
                icon: 'question',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Ok',
                cancelButtonText: 'Tidak',
                allowOutsideClick: false,
                allowEscapeKey: false,
                allowEnterKey: false,
            }).then((result) => {
                if (result.isConfirmed) {
                    let cartData = JSON.parse(localStorage.getItem('cart'));
                    let userIdLd = cartData.playerId;
                    
                    if (userIdLd.length > 4) {
                        Swal.fire({
                            title: 'Gagal!',
                            text: "Maksimal hanya 5 User ID yang dapat ditambahkan!",
                            icon: 'error',
                            showCancelButton: false,
                            confirmButtonColor: '#3085d6',
                            confirmButtonText: 'Ok',
                            allowOutsideClick: false,
                            allowEscapeKey: false,
                            allowEnterKey: false,
                        });

                        // document.getElementById('user_id').value = null;
                        showPlayerId();
                        return;
                    }


                    let exist = false;
                    if (userIdLd.length > 0) {
                    
            
                        for (const i of userIdLd) {
   
                            if(i.userId === userId){
                        
                                exist = true;
                            }
                        }
                    }

            
                    if (exist) {
                        
                        Swal.fire({
                            title: 'Gagal!',
                            text: "User ID sudah ditambahkan sebelumnya!",
                            icon: 'error',
                            showCancelButton: false,
                            confirmButtonColor: '#3085d6',
                            confirmButtonText: 'Ok',
                            allowOutsideClick: false,
                            allowEscapeKey: false,
                            allowEnterKey: false,
                        });

                        document.getElementById('user_id').value = null;
                        showPlayerId();
                     
                    }else{

                        cartData.playerId.push({userId: userId, jmlDm: 0});
                        localStorage.setItem('cart', JSON.stringify(cartData));

                        Swal.fire({
                            title: 'Berhasil!',
                            text: "Berhasil menambahkan User ID!",
                            icon: 'success',
                            showCancelButton: false,
                            confirmButtonColor: '#3085d6',
                            confirmButtonText: 'Ok',
                            allowOutsideClick: false,
                            allowEscapeKey: false,
                            allowEnterKey: false,
                        });

                        document.getElementById('user_id').value = null;
                        showPlayerId();
                        getDetailPembayaran();
                    }

         
             
                }
            });
        }
    }


    function getDetailPembayaran(){
        let bungkus = document.getElementById('detail-pembayaran');
        let cart = JSON.parse(localStorage.getItem('cart'));
        let games = JSON.parse(localStorage.getItem('games'));
        let gameId = cart.gameId;
        let payment = cart.payment;
        let totalBayar = 0;
        let hargaGame = 0;
        let totalDms = 0;
        let item = '';

        if (!payment) {
            payment = 'Belum memilih metode pembayaran'
        }
        for (const i of games) {
    
            if (i.id === gameId) {
                hargaGame = i.harga
                item = i.item
                break;
            }
        }

        let playerIds = cart.playerId;
        if (playerIds.length > 0) {
            
            for (const p of cart.playerId) {
                const {userId, jmlDm} = p;
                totalBayar += jmlDm * hargaGame;
                totalDms += jmlDm;
            }
        }

        let harga = formatRupiah(totalBayar);
        bungkus.innerHTML = 
        `
            <div class="nomor">3</div>
                <h1>Masukkan Detail Anda</h1>
                    <p>Silahkan masukkan email Anda untuk menerima bukti pembelian Anda</p>
                        <input type="email" class="email-control" placeholder="Masukkan Alamat E-mail Anda" id="email-invoice">
                            <div class="clear"></div>
                        <div class="detail-akhir">${totalDms} ${item} • ${payment}</div>
                    <div class="btn btn-primary buy-control" onclick="generateInvoice()">Beli Sekarang</div>
            <div class="harga">${harga}</div>
        `;
    }

    function generateInvoice() {
        let emailInv = document.getElementById('email-invoice').value;

        if (!emailInv) {
            Swal.fire({
                title: 'Gagal!',
                text: "Mohon masukkan email pengiriman invoice!",
                icon: 'error',
                showCancelButton: false,
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Ok',
                allowOutsideClick: false,
                allowEscapeKey: false,
                allowEnterKey: false,
            });
            return;
        }
        let cart = JSON.parse(localStorage.getItem('cart'));
        let games = JSON.parse(localStorage.getItem('games'));
        let gameId = cart.gameId;
        let payment = cart.payment;

        if (cart.paymentHarga) {
            
            let paymentHarga = cart.paymentHarga;
        }
        let totalBayar = 0;
        let hargaGame = 0;
        let totalDms = 0;
        let item = '';
        let playerIds = cart.playerId;
        let totalUserId = playerIds.length;

        if (!payment) {
            Swal.fire({
                title: 'Gagal!',
                text: "Mohon memilih metode pembayaran terlebih dahulu!",
                icon: 'error',
                showCancelButton: false,
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Ok',
                allowOutsideClick: false,
                allowEscapeKey: false,
                allowEnterKey: false,
            });
            return;
        }

        for (const i of games) {
    
            if (i.id === gameId) {
                hargaGame = i.harga
                item = i.item
                break;
            }
        }

        for (const j of playerIds) {
            const {userId, jmlDm} = j;

            if (jmlDm < 1) {
                Swal.fire({
                    title: 'Gagal!',
                    text: "User " + userId + " belum memasukkan jumlah " + item + "!",
                    icon: 'error',
                    showCancelButton: false,
                    confirmButtonColor: '#3085d6',
                    confirmButtonText: 'Ok',
                    allowOutsideClick: false,
                    allowEscapeKey: false,
                    allowEnterKey: false,
                });
                return;
            }
        }
      

        
        if (playerIds.length > 0) {
            
            for (const p of cart.playerId) {
                const {userId, jmlDm} = p;
                totalBayar += jmlDm * hargaGame;
                totalDms += jmlDm;
            }
        }
        let paymentHarga = cart.paymentHarga;
        totalBayar += paymentHarga;
        let harga = formatRupiah(totalBayar);

        Swal.fire({
            title: 'Invoice',
            html: `
                <div class="container" style>
                    <p>Alamat email: </p>
                    <p>${emailInv} </p>
                    <br>
                    <p>Bayar Dengan: </p>
                    <p>${payment} </p>
                    <br>
                    <p>Jumlah User ID: </p>
                    <p>${totalUserId} </p>
                    <br>
                    <p>Total Pembayaran: </p>
                    <p>${harga} </p>
                </div>
            `,
            showCancelButton: true,
            showConfirmButton: true,
            confirmButtonText: 'Bayar Sekarang',
            cancelButtonText: 'Bayar Nanti',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            focusConfirm: false,
            customClass: {
                container: 'swal2-modal-lg'
            }
        }).then((result) => {
            if (result.isConfirmed) {
                // Panggil fungsi untuk bayar sekarang
                handlePayNow();
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                // Modal akan tertutup
            }
        });
    }
    
    
    function handlePayNow() {
        // Lakukan apa yang diperlukan untuk memproses pembayaran sekarang
        // Misalnya, Anda dapat mengambil data dari formulir menggunakan
        // document.getElementById('elementId').value dan melanjutkan dengan proses pembayaran.
        let timerInterval
        Swal.fire({
        title: 'Mohon tunggu!',
        html: 'Proses pembayaran sedang berlangsung',
        timer: 3000,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading()
            const b = Swal.getHtmlContainer().querySelector('b')
            timerInterval = setInterval(() => {
            b.textContent = Swal.getTimerLeft()
            }, 100)
        },
        willClose: () => {
            clearInterval(timerInterval)
        }
        }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
            Swal.fire({
                title: 'Berhasil!',
                text: "Pembayaran berhasil!",
                icon: 'success',
                showCancelButton: false,
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Ok',
                allowOutsideClick: false,
                allowEscapeKey: false,
                allowEnterKey: false,
            }).then((result) => {
                if (result.isConfirmed) {
                    // localStorage.clear();
                    localStorage.removeItem("cart");

                    window.location.href = 'index.html';
                }
            });
        }
        })
    }


    function updateMetode(params) {
        let cart = JSON.parse(localStorage.getItem('cart'));
        if (params == 1) {
            cart.payment = 'Qris';
            cart.paymentHarga = 1500;
        }
        if (params == 2) {
            cart.payment = 'Gopay';
            cart.paymentHarga = 2500;
    
        }
        if (params == 3) {
            cart.payment = 'Ovo';
            cart.paymentHarga = 1500;
    
        }
        if (params == 4) {
            cart.payment = 'Bank';
            cart.paymentHarga = 3500;
    
        }
        if (params == 5) {
            cart.payment = 'Alfamart';
            cart.paymentHarga = 2500;
    
        }
        
        localStorage.setItem('cart', JSON.stringify(cart));
        getDetailPembayaran();
    }
    
    


window.onload = function() {
    // showUserLoginStatus();
    cekCart();
    createPaymentTable();
    getToken();
    showPlayerId();
    getBannerDetailGame();
    getDetailPembayaran();
}
