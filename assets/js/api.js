// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest();

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'http://192.168.0.26:4000/api/utils/landing-data', true);

request.onload = function () {
    // Begin accessing JSON data here
    var obj = JSON.parse(this.response);

    // Get Value TKB
    var tkb = document.getElementById("tkb");
    var tkb_resp = document.getElementById("tkb-resp");
    tkb.textContent = "TKB: " + obj.data.tkb.kolek_npl90 + "%";
    tkb_resp.textContent = "TKB: " + obj.data.tkb.kolek_npl90 + "%";

    // Get Value Statistic
    // Akumulasi Borrower
    var all_b_ind = document.getElementById("all_bor_individu");
    var all_b_usa = document.getElementById("all_bor_usaha");
    var all_b = document.getElementById("all_bor");
    all_b_ind.textContent = obj.data.statistik.all_borrower_individu + " Individu";
    all_b_usa.textContent = obj.data.statistik.all_borrower_perusahaan + " Badan Usaha";
    all_b.textContent = parseInt(obj.data.statistik.all_borrower_individu) + parseInt(obj.data.statistik.all_borrower_perusahaan);

    // Borrower Aktif
    var active_b_ind = document.getElementById("active_bor_individu");
    var active_b_usa = document.getElementById("active_bor_usaha");
    var active_b = document.getElementById("active_bor");
    active_b_ind.textContent = obj.data.statistik.active_borrower_individu + " Individu";
    active_b_usa.textContent = obj.data.statistik.active_borrower_perusahaan + " Badan Usaha";
    active_b.textContent = parseInt(obj.data.statistik.active_borrower_individu) + parseInt(obj.data.statistik.active_borrower_perusahaan);

    function fnum(x) {
        if (isNaN(x)) return x;

        if (x < 9999) {
            return x;
        }

        if (x < 1000000) {
            return Math.abs(x / 1000) + " Ribu";
        }
        if (x < 10000000) {
            return (x / 1000000).toFixed(2) + " Juta";
        }

        if (x < 1000000000) {
            return Math.abs((x / 1000000)) + " Juta";
        }

        if (x < 1000000000000) {
            return Math.abs((x / 1000000000)).toFixed(2) + "M";
        }

        return "1T+";
    }

    // Total Pinjaman Berjalan
    var total_pinjaman_berjalan = document.getElementById("tot_pinjam_jalan");
    const totalJalan = fnum(obj.data.statistik.total_pinjaman_berjalan);
    total_pinjaman_berjalan.textContent = totalJalan;

    // Total Pinjaman
    var total_pinjaman = document.getElementById("tot_pinjam");
    const total = fnum(obj.data.statistik.total_pinjaman);
    total_pinjaman.textContent = total;
    var total_resp = document.getElementById("total_resp");
    const totalResp = fnum(obj.data.statistik.total_pinjaman);
    total_resp.textContent = totalResp;

    // Oustanding
    var standing_value = document.getElementById("outstand");
    const outstand = fnum(obj.data.statistik.outstanding);
    console.log(outstand);
    standing_value.textContent = outstand;
};

// Send request
request.send();