function createCategoriesTable() {
    let gamesCategory = JSON.parse(localStorage.getItem('gamesCategory'));

    if (!gamesCategory) {
        gamesCategory = [];
    }

    if (gamesCategory.length < 1) {
        let gamesCategoryLists = [
            {
                id : 1, 
                nama : 'Battle Royale' ,
                logo : 'assets/photos/game-category/br.png' ,
            },
            {
                id : 2, 
                nama : 'Multiplayer Online Battle Arena' ,
                logo : 'assets/photos/game-category/moba.png' ,
            },
            {
                id : 3, 
                nama : 'Multiplayer Online Sandbox' ,
                logo : 'assets/photos/game-category/mos.png' ,
            },
            {
                id : 4, 
                nama : 'Multiplayer Party Knockout Game' ,
                logo : 'assets/photos/game-category/mpkg.png' ,
            },
            {
                id : 5, 
                nama : 'Online Multiplayer Strategy Game' ,
                logo : 'assets/photos/game-category/omsg.png' ,
            },
            {
                id : 6, 
                nama : 'Open World Game' ,
                logo : 'assets/photos/game-category/owg.png' ,
            },
           
        ]

        for (const gc of gamesCategoryLists) {
            gamesCategory.push(gc);
        }
        localStorage.setItem('gamesCategory', JSON.stringify(gamesCategory));
    }

    showGamesCategory();
}
function createGamesTable() {
    let games = JSON.parse(localStorage.getItem('games'));

    if (!games) {
        games = [];
    }

    if (games.length < 1) {
        let gameLists = [
            {
                id : 0, 
                nama : 'Genshin Impact' ,
                logo : 'assets/photos/games/genshin.jpg' ,
                genre : 'Open world game',
                item : 'Diamonds',
                harga: 3000,
                categoryId: 6,
                popular: 1,
                banner : 'assets/photos/bannerGI.jpg',
                deskripsi: 'Genshin Impact adalah permainan yang bergenre dunia terbuka (open world) sekaligus bermain peran aksi. Pada permainan ini, pemain memungkinkan untuk mengendalikan salah satu karakter yang dapat digantikan di dalam sebuah party (kelompok). Karakter-karakter yang ditukarkan dapat dilakukan dengan cepat selama melakukan kombat sehingga memungkinkan pemain untuk menggunakan kombinasi kemampuan dan serangan yang berbeda. Karakter yang dapat memiliki kemampuan diperkuat dengan berbagai cara, seperti menaikkan level-nya secara langsung dan memperkuat artefak beserta senjata yang dapat digunakan oleh seorang karakter.Selain berpetualang, pemain dapat mencoba berbagai tantangan untuk mendapatkan hadiah.'
            },
            {
                id : 1, 
                nama : 'Clash of Clans' ,
                logo : 'assets/photos/games/coc.png' ,
                genre : 'Online multiplayer strategy game',
                item : 'Diamonds',
                harga: 10000,
                categoryId: 5,
                popular: 0,
                banner : 'assets/photos/bannerC/bannerCOC.webp',
                deskripsi: 'Clash of Clans adalah permainan multipemain daring yang pemainnya membentuk komunitas yang disebut klan, melatih pasukan, dan menyerang pemain lain untuk mendapatkan sumber daya. Ada empat mata uang atau sumber daya dalam permainan.Emas dan elixir dapat digunakan untuk membangun dan meningkatkan pertahanan dan jebakan yang melindungi desa pemain dari serangan pemain lain dan untuk membangun serta meningkatkan bangunan. Elixir dan elixir hitam juga digunakan untuk melatih dan meningkatkan pasukan dan mantra. Permata adalah mata uang premium. Serangan dinilai pada skala bintang tiga dan memiliki durasi waktu maksimum tiga menit.'
            },
            {
                id : 2,
                nama : 'Free Fire' ,
                logo : 'assets/photos/games/free fire.png' ,
                genre : 'Battle Royale',
                item : 'Cash',
                harga: 12000,
                categoryId: 1,
                popular: 0,
                banner : 'assets/photos/bannerC/bannerFF.png',
                deskripsi: 'Gameplay Free Fire adalah dimana semua pemain dikerahkan dengan pesawat dan wajib melakukan terjun bebas. Tiap pemain juga harus mencari senjata dan peralatan medis ketika dikirim untuk bertarung melawan pemain lain dan bertahan hidup. Di tengah permainan nanti akan ada pesawat yang lewat dan meluncurkan airdrop dalam bentuk kotak besar berisi rompi anti peluru, helm, senjata khusus seperti AWM, Groza[12], M79 dan M249[13] ataupun senapan mesin. Menemukan airdrop juga tidak sulit. Sebelum airdrop turun, akan terlihat sebuah tanda berbentuk airdrop dengan parasut yang akan muncul di minimap. Kotak ini akan memancarkan garis vertikal atau lurus dari langit dengan cahaya kuningnya.'
            },
            {
                id : 3,
                nama : 'Growtopia' ,
                logo : 'assets/photos/games/growtopia.png' ,
                genre : 'Multiplayer online sandbox',
                item : 'Gems',
                harga: 4000,
                categoryId: 3,
                popular: 0,
                banner : 'assets/photos/bannerGTP.jpg',
                deskripsi: 'Growtopia adalah permainan video kotak pasir MMO 2D di mana hampir semua yang ada di gim ini dapat tumbuh dari biji pohon. Tidak ada tujuan. Namun, ada sistem pencapaian, pencarian epik, dan pencarian lainnya dari NPC. Pemain dapat mengunjungi dunia orang lain atau menciptakan dunia mereka sendiri. Ketika seorang pemain menciptakan dunia baru, dunia akan dihasilkan secara prosedural. Dunia di Growtopia memiliki ukuran yang sama, kecuali dunia khusus (seperti TINY). Pemain dapat mematahkan dan membangun balok, mendapatkan biji atau permata dari balok, menanam benih, dan memanen pohon. Pemain tidak dapat melakukan aktivitas ini jika dunia atau area yang mereka pukul dikunci oleh orang lain'
            },
            // {
            //     id : 4,
            //     nama : 'Call of Duty Mobile' ,
            //     logo : 'assets/photos/games/cod.jpg' ,
            //     genre : 'Battle Royale',
            //     item : 'Credits',
            //     harga: 111
            // },
            {
                id: 5,
                nama : 'Mobile Legends' ,
                logo : 'assets/photos/games/ML.png' ,
                genre : 'Multiplayer online battle arena ',
                item : 'Diamonds',
                harga: 2000,
                categoryId: 2,
                popular: 1,
                banner : 'assets/photos/bannerC/bannerML.png',
                deskripsi: 'Mobile Legends adalah permainan MOBA yang dirancang untuk ponsel. Kedua tim masing-masing berisi lima orang berjuang untuk mencapai dan menghancurkan markas musuh sambil mempertahankan markas mereka sendiri untuk mengendalikan tiga jalur, yang dikenal sebagai jalur "atas", "tengah" dan "bawah", yang menghubung ke setiap markas. Di masing-masing tim, ada lima pemain yang mengendalikan avatar sendiri-sendiri, yang dikenal sebagai "hero", dari perangkat mereka sendiri. Karakter lemah yang dikendalikan komputer disebut "minion", yang bersarang di markas tim lalu menyebar ke tiga jalur dan melawan menara serta lawan yang menghadang.Mengumpulkan EXP berguna untuk menaikkan level hero saat permainan berlangsung.'
            },
            {
                id : 4,
                nama : 'State of Survival' ,
                logo : 'assets/photos/games/state of survival.png' ,
                genre : 'Online mobile strategy game',
                item : 'Golds',
                harga: 3000,
                categoryId: 5,
                popular: 0,
                banner : 'assets/photos/bannerC/bannerSOV.jpg',
                deskripsi: 'Game RPG perang zombie tempat Anda berjuang untuk bertahan hidup dalam kiamat. Enam bulan telah berlalu sejak kiamat zombie dimulai. Virus ini telah menginfeksi kota-kota. Enam bulan teror, kematian, kengerian, perjuangan untuk bertahan hidup, dan melawan zombie dan monster dalam RPG petualangan multipemain ini. Ciptakan aliansi dan bangun kota untuk melawan gerombolan zombie demi bertahan hidup.'
            },
            // {
            //     id : 5,
            //     nama : 'Valorant' ,
            //     logo : 'assets/photos/games/valoran.jpg' ,
            //     genre : 'Battle Royale',
            //     item : 'Credits',
            //     harga: 111
            // },
            {
                id : 6,
                nama : 'Clash Royale' ,
                logo : 'assets/photos/games/clashroyale.jpeg' ,
                genre : 'Online multiplayer strategy game',
                item : 'Diamonds',
                harga: 6000,
                categoryId: 5,
                popular: 1,
                banner : 'assets/photos/bannerC/bannerCR.webp',
                deskripsi : 'Clash Royale adalah game buatan Supercell bertema kerajaan fantasi[1], yang karakter-karakter di dalamnya sebagian diambil dari game saudaranya yakni Clash of Clans. Clash Royale adalah salah satu game yang para pemainnya bertemu satu sama lain secara online, dan berusaha untuk saling menghancurkan menara ratu dan menara raja, dengan cara mengerahkan pasukan berupa sebuah kartu yang akan menjadi hidup saat dimainkan. Ada banyak sekali jenis kartu yang ada di dalam game ini, mulai dari yang memiliki kelangkaan yang rendah yaitu kartu biasa sampai kelangkaan tertinggi yakni kartu jawara, kartu - kartu tersebut didapatkan dengan cara membuka peti, membelanjakan emas, atau menggunakan token acara untuk membeli kartu di toko token.'
            },
            {
                id : 7,
                nama : 'Hogwarts Legacy' ,
                logo : 'assets/photos/games/hogwarts.webp' ,
                genre : 'Open world game',
                item : 'Coins',
                harga: 8600,
                categoryId: 6,
                popular: 1,
                banner : 'assets/photos/bannerHL.jpg',
                deskripsi: 'Hogwarts Legacy adalah permainan bermain peran aksi yang dimainkan dalam sudut pandang orang ketiga. Itu diatur di Sekolah Sihir Hogwarts dan daerah sekitarnya, dipengaruhi oleh waralaba Dunia Sihir. Selama pembuatan karakter, pemain dapat memilih penampilan karakter, jenis kelamin, suara, dan tipe tubuh. Mereka juga dapat memilih salah satu dari empat Asrama Hogwarts. Saat pemain melanjutkan permainan, karakter pemain mereka belajar merapal mantra, membuat ramuan, dan menguasai kemampuan bertarung, yang pada akhirnya mengembangkan gaya bertarung khusus mereka sendiri. Melalui tantangan dalam game, karakter pemain dapat memperoleh poin pengalaman untuk mendapatkan level, yang memungkinkan pemain mengakses dan meningkatkan berbagai mantra, bakat, dan kemampuan.'
            },
            {
                id : 8,
                nama : 'Stumble Guys' ,
                logo : 'assets/photos/games/stumble.png' ,
                genre : 'Multiplayer party knockout game ',
                item : 'Gems',
                harga: 6700,
                categoryId: 4,
                popular: 0,
                banner : 'assets/photos/bannerC/bannerSTUMBLEGUYS.jpg',
                deskripsi: 'Stumble Guys adalah suatu game online berbasis multiplayer royale yang dikeluarkan oleh pengembang Kitka Games. Dalam rating Play Store, Stumble Guys mendapatkan skor rating 4.2 dari para pengunduhnya. Game ini sendiri membutuhkan ruang memori kosong sebesar 103 Megabyte saat akan diinstal. Berdasarkan informasi yang ditampilkan di Play Store, Stumble Guys telah diunduh di lebih dari 10 juta kali.Stumble Guys merupakan permainan yang cukup seru jika ingin dimainkan bersama teman tongkrongan. Dalam fitur game Stumble Guys, para pemain dapat membuat ruangan yang memiliki kode untuk dibagikan sehingga dapat bermain bersama teman lainnya.'
            },
            {
                id : 9,
                nama : 'PUBG Mobile' ,
                logo : 'assets/photos/games/pubg.png' ,
                genre : 'Battle Royale',
                item : 'Credits',
                harga: 6500,
                categoryId: 1,
                popular: 1,
                banner : 'assets/photos/bannerC/bannerPUBG.jpg',
                deskripsi: 'PUBG Mobile menampilkan gameplay yang mirip dengan PlayerUnknown Battlegrounds asli. Pemain terjun payung ke pulau terpencil dan berjuang untuk tetap menjadi pemain terakhir yang bertahan, berkompetisi sendiri atau dalam tim yang terdiri dari dua atau empat orang, tergantung pada mode permainan yang dipilih sebelum pertandingan. Setiap pertandingan berlangsung sekitar 30 menit. Diperlukan waktu tepat 32 menit 50 detik agar zona tersebut tertutup sepenuhnya. Setelah itu, sekitar 11 detik lagi hingga Anda mati di dalam zona tersebut, jadi potensi maksimal sekitar 33 menit 10 detik jika Anda mencoba menyembuhkan diri sendiri.'
            },
            {
                id : 10,
                nama : 'Hay Day' ,
                logo : 'assets/photos/games/hay day.jpeg' ,
                genre : 'Online multiplayer strategy game',
                item : 'Diamonds',
                harga: 7900,
                categoryId: 5,
                popular: 0,
                banner : 'assets/photos/bannerC/bannerHAYDAY.jpg',
                deskripsi: 'Hay Day adalah game seluler populer yang dibuat oleh Supercell pada tahun 2012. Ini adalah simulator bertani tempat Anda dapat menanam tanaman dan pohon, beternak hewan, menjual produk, berkompetisi dalam derby, dan banyak lagi. Hay Day adalah game freemium sehingga semua fitur game ini terbuka untuk pemain yang memilih untuk tidak membeli pembelian dalam aplikasi.'
            },
            // {
            //     id : 11,
            //     nama : 'Speed Drifters' ,
            //     logo : 'assets/photos/games/speed drifters.jpeg' ,
            //     genre : 'Online racing game',
            //     item : 'Diamonds',
            //     harga: 111
            // },
            {
                id : 12,
                nama : 'Brawl Stars' ,
                logo : 'assets/photos/games/brawl.jpeg' ,
                genre : 'Multiplayer online battle arena',
                item : 'Gems',
                harga: 4000,
                categoryId: 2,
                popular: 0,
                banner : 'assets/photos/bannerC/bannerBRAWLSTARS.jpg',
                deskripsi: 'Di Brawl Stars, pemain bertarung melawan pemain lain atau lawan AI dalam berbagai mode permainan. Pemain dapat memilih antara karakter yang disebut Brawlers yang telah mereka buka melalui Kotak, Brawl Pass, Trophy Road, atau dibeli melalui Toko untuk digunakan dalam pertempuran.[6] Pada bulan Desember 2022, Kotak telah dihapus, dan semua metode sebelumnya untuk mendapatkannya diganti dengan kredit dan kredit kroma, yang digunakan untuk membuka Jagoan, yang sekarang sebagian besar ditempatkan di "Starr Road". Brawl Stars memiliki beragam mode permainan yang dapat dipilih pemain, masing-masing memiliki tujuan berbeda. Pemain dapat mengundang teman untuk bermain bersama mereka hingga ukuran tim maksimum dalam mode permainan.'
            },
        ]

        for (const g of gameLists) {
            games.push(g);
        }
        localStorage.setItem('games', JSON.stringify(games));
    }

    showGames();
}

function createTestimonialsTable() {
    let testimonials = JSON.parse(localStorage.getItem('testimonials'));

    if (!testimonials) {
        testimonials = [];
    }

    if (testimonials.length < 1) {
        let testimonialsLists = [
            {
                id : 1, 
                nama : 'Elmano' ,
                status : 'ProGamer' ,
                testimoni : 'Bagus Shop memberikan layanan yang cepat dan efisien. Saya sangat puas dengan pengalaman belanja online di sini!' ,
            }, 
            {
                id : 2, 
                nama : 'Jaylen' ,
                status : 'ProGramer' ,
                testimoni : 'Belanja di Bagus Shop Store sangat praktis dan terjamin keamanannya.' ,
            },
            {
                id : 3, 
                nama : 'Alexander' ,
                status : 'Programmer' ,
                testimoni : 'Saya selalu mendapatkan voucher game dengan harga terbaik di Bagus Shop.' ,
            },
            {
                id : 4, 
                nama : 'Apollo' ,
                status : 'Programmer' ,
                testimoni : 'Mantap top up di Bagus Shop Store sangat amanah.' ,
            },
           
           
        ]

        for (const gc of testimonialsLists) {
            testimonials.push(gc);
        }
        localStorage.setItem('testimonials', JSON.stringify(testimonials));
    }

    showTestimonials();
}

function showGames(category) {
    let bungkusPopular = document.getElementById('section-games-promo');
    let bungkusGameLists = document.getElementById('gamelists');
    let games = JSON.parse(localStorage.getItem('games'));
    let popularGames = [];
    let gamesToDisplay = [...games]; // Duplikat data games untuk ditampilkan

    let keyword = document.getElementById('searchGameInput').value;

    if (category || keyword) {
        let params = {
            categoryId: category,
            keyword: keyword,
        }

        gamesToDisplay = filterBy(gamesToDisplay, params);
    }

    // Tampilkan Game List
    let contentGameLists = "";

    if (gamesToDisplay.length < 1) {
        contentGameLists = 'Game tidak ditemukan'
    } else {
        for (const game of gamesToDisplay) {
            const {id, nama, logo, genre, item, harga, categoryId, popular} = game;
            let rupiah = formatRupiah(harga);

            contentGameLists += `
                <div class="col-lg-3 mb-4">
                    <a href="cart.html" class="gamelists-link" onClick="toCart(${id})">
                        <div class="card-arvi">
                            <img src="${logo}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h6 class="card-title" style="font-weight: bold; font-size: 24px;">${nama}</h6>
                                <div class="d-flex">
                                    <span class="badge badge-pill discount-precentage">${genre}</span>
                                    <span class="badge badge-pill discount-price"></span>
                                </div>
                                <p class="mt-1 mb-0" style="font-size: 14px;">Start From:</p>
                                <h5 class="mt-1" style="font-weight: bold;">${rupiah} <span style="font-size: 12px; color: #989898;">/${item}</span> </h5>
                                <div class="d-flex align-items-center">
                                    <img class="star-rating" src="assets/photos/icon-bintang.png" alt="">
                                    <img class="star-rating" src="assets/photos/icon-bintang.png" alt="">
                                    <img class="star-rating" src="assets/photos/icon-bintang.png" alt="">
                                    <img class="star-rating" src="assets/photos/icon-bintang.png" alt="">
                                    <img class="star-rating" src="assets/photos/icon-bintang.png" alt="">
                                    <span style="color: #989898;">(972)</span>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            `;
        }
    }

    bungkusGameLists.innerHTML = contentGameLists;

    // Tampilkan Game Populer
    for (const gmsP of games) {
        const {id, nama, logo, genre, item, harga, categoryId, popular} = gmsP;

        if (popular === 1) {
            popularGames.push(gmsP);
        }
    }

    let gamePopular = "";

    for (const gmsP of popularGames) {
        const {id, nama, logo, genre, item, harga, categoryId, popular} = gmsP;
        let rupiah = formatRupiah(harga);

        gamePopular += `
            <div class="swiper-slide position-relative card-holder">
                <a href="cart.html" class="gamelists-link" onClick="toCart(${id})">
                    <div class="card-arvi">
                        <img src="${logo}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h6 class="card-title">${nama}</h6>
                            <div class="d-flex">
                                <span class="badge badge-pill discount-precentage">${genre}</span>
                            </div>
                            <p class="mt-1 mb-0" style="font-size: 14px;">Start From:</p>
                            <h5 class="mt-1" style="font-weight: bold;">${rupiah} <span style="font-size: 12px; color: #989898;">/${item}</span> </h5>
                            <div class="d-flex align-items-center">
                                <img class="star-rating" src="assets/photos/icon-bintang.png" alt="">
                                <img class="star-rating" src="assets/photos/icon-bintang.png" alt="">
                                <img class="star-rating" src="assets/photos/icon-bintang.png" alt="">
                                <img class="star-rating" src="assets/photos/icon-bintang.png" alt="">
                                <img class="star-rating" src="assets/photos/icon-bintang.png" alt="">
                                <span style="color: #989898;">(972)</span>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        `;
    }

    bungkusPopular.innerHTML = gamePopular;
}



function showGamesCategory(){
    let bungkus = document.getElementById('section-gamecategory-lists');
    let gamesCategory = JSON.parse(localStorage.getItem('gamesCategory'));


    let content = ""; // Inisialisasi variabel string untuk menyimpan konten
   
    for (const gc of gamesCategory) {
        const {id, nama, logo } = gc;
        content += `
                <div class="col-lg-4 col-md-6 mt-4 mt-md-0 mb-4">
                    <a href="#games" class="game-category-link" onclick="showGames(${id})">
                        <div class="card-service d-flex align-items-center">
                            <img src="${logo}" class="img-fluid img-section-gamelists" alt="" />
                            <div class="detail">
                                <h5>${nama}</h5>
                            </div>
                        </div>
                    </a>
                </div>
        `;
    }

    bungkus.innerHTML = content; // Menetapkan konten baru ke elemen
}

function showTestimonials(){
    let bungkus = document.getElementById('section-testimonials');
    let testimonials = JSON.parse(localStorage.getItem('testimonials'));


    let content = ""; // Inisialisasi variabel string untuk menyimpan konten
   
    for (const gc of testimonials) {
        const {id, nama, status, testimoni } = gc;
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
                        ${testimoni}
                    </p>
                    </div>
                </div>
        `;
    }

    bungkus.innerHTML = content; // Menetapkan konten baru ke elemen
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

function toCart(gameId) {
    // Mengambil data keranjang dari localStorage (jika ada)
    let cartData = JSON.parse(localStorage.getItem('cart'));
  
  
    // Jika belum ada data keranjang, buat objek kosong
      cartData = {};
      // Menyimpan data ke dalam objek keranjang

      cartData.gameId = gameId;
      cartData.playerId = [];
      cartData.payment = null;
      cartData.token = generateString(18);

      localStorage.setItem('cart', JSON.stringify(cartData));

}

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



function logout(){

    Swal.fire({
        title: 'Yakin?',
        text: "Apakah Anda yakin ingin keluar dari aplikasi?",
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
            localStorage.removeItem('loginUsers');


            window.location.href = 'index.html';
        }
    });
}

// document.getElementById('logoutButton').addEventListener('click',function(){
//     logout();
// });


window.onload = function() {
    createGamesTable();
    createCategoriesTable();
    createTestimonialsTable();
    showUserLoginStatus();
}




