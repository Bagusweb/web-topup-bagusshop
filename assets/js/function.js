function formatRupiah(angka) {
    let reverse = angka.toString().split('').reverse().join('');
    let ribuan = reverse.match(/\d{1,3}/g);
    ribuan = ribuan.join('.').split('').reverse().join('');
    return 'Rp. ' + ribuan;
}

function filterBy(games, params) {
  let filteredGames = [...games]; // Menggunakan spread operator untuk membuat salinan baru dari array games

  if (params.categoryId) {
    filteredGames = filteredGames.filter(game => game.categoryId === params.categoryId);
  }

  if (params.keyword) {
    const keyword = params.keyword.toLowerCase();
    filteredGames = filteredGames.filter(game => game.nama.toLowerCase().includes(keyword));
  }

  return filteredGames;
}


const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function generateString(length) {
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

  