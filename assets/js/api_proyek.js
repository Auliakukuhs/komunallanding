const app = document.getElementById('peluang_proyek');

// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest();

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'http://192.168.0.26:4000/api/utils/landing-peluang?lang=id', true);

request.onload = function () {
    // Begin accessing JSON data here
    var obj = JSON.parse(this.response);
    console.log(obj.data);
    if (request.status >= 200 && request.status < 400) {
        obj.data.forEach(project => {

            // Function Capitalize Word
            String.prototype.capitalize = function(lower) {
                return (lower ? this.toLowerCase() : this).replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
            };

            // Function Currency Format
            function currencyFormat(num) {
                return (
                  num
                    .toFixed(2) // always two decimal digits
                    .replace('.', ',') // replace decimal point character with ,
                    .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
                ) // use . as a separator
              }

            const cardscore = document.createElement('div');
            cardscore.setAttribute('class', 'card-score card-primary '+project.status_name.toLowerCase());

                const cardcontent = document.createElement('div');
                cardcontent.setAttribute('class', 'card-content');

                const rowone = document.createElement('div');
                rowone.setAttribute('class', 'row');

                    const terkumpul = document.createElement('span');
                    terkumpul.setAttribute('class', 'price-nominal-white dana text-right '+project.status_name.toLowerCase());
                    if(project.jumlah_terkumpul/project.jumlah*100 == '100'){
                        var sumKumpul = (project.jumlah_terkumpul/project.jumlah*100);
                    }
                    else{
                        var sumKumpul = (project.jumlah_terkumpul/project.jumlah*100).toFixed(2);
                    }
                    terkumpul.textContent = sumKumpul+"% | IDR "+currencyFormat(project.jumlah_terkumpul);

                const rowprog = document.createElement('div');
                rowprog.setAttribute('class', 'row-progress');

                    const prog = document.createElement('div');
                    prog.setAttribute('class', 'progress');

                        const progbar = document.createElement('div');
                        progbar.setAttribute('class', 'progress-bar '+project.status_name.toLowerCase());
                        progbar.setAttribute('role', 'progress-bar');
                        progbar.setAttribute('style', 'width:'+(project.jumlah_terkumpul/project.jumlah*100).toFixed(2)+'%');

                const rowtwo = document.createElement('div');
                rowtwo.setAttribute('class', 'row');
            
                    const colNameProject = document.createElement('div');
                    colNameProject.setAttribute('class', 'col-lg-4 align-self-center mb-10');

                        const idProject = document.createElement('span');
                        idProject.setAttribute('class', 'price-label-white');
                        idProject.textContent = project.project_uid;

                        var br1 = document.createElement('br');

                        const nameProject = document.createElement('span');
                        nameProject.setAttribute('class', 'price-nominal-white '+project.status_name.toLowerCase());
                        nameProject.textContent = project.project_name;

                    const colJumlahPinjam = document.createElement('div');
                    colJumlahPinjam.setAttribute('class', 'col-lg-2 align-self-center mb-10');

                        const titleJumlah = document.createElement('span');
                        titleJumlah.setAttribute('class', 'price-label-white');
                        titleJumlah.textContent = "Jumlah Pinjaman";

                        var br2 = document.createElement('br');

                        const jumlahPinjam = document.createElement('span');
                        jumlahPinjam.setAttribute('class', 'price-nominal-white '+project.status_name.toLowerCase());
                        jumlahPinjam.textContent = "IDR "+currencyFormat(project.jumlah);

                    const colBungaRating = document.createElement('div');
                    colBungaRating.setAttribute('class', 'col-lg-2 align-self-center mb-10');

                        const titleBungaRating = document.createElement('span');
                        titleBungaRating.setAttribute('class', 'price-label-white');
                        titleBungaRating.textContent = "Rating & Suku Bunga";

                        var br3 = document.createElement('br');

                        const bungaRating = document.createElement('span');
                        bungaRating.setAttribute('class', 'price-nominal-white '+project.status_name.toLowerCase());
                        bungaRating.textContent = project.credit_rating+" | "+project.persen_bunga_efektif_lender+"%";

                    const colTenor = document.createElement('div');
                    colTenor.setAttribute('class', 'col-lg-2 align-self-center mb-10');

                        const titleTenor = document.createElement('span');
                        titleTenor.setAttribute('class', 'price-label-white');
                        titleTenor.textContent = "Tenor";

                        var br4 = document.createElement('br');

                        const tenor = document.createElement('span');
                        tenor.setAttribute('class', 'price-nominal-white '+project.status_name.toLowerCase());
                        tenor.textContent = project.tenor+" Bulan | "+project.metode_pembayaran_name;

                    const colStatus = document.createElement('div');
                    colStatus.setAttribute('class', 'col-lg-2 align-self-center mb-10');

                        const titleStatus = document.createElement('span');
                        titleStatus.setAttribute('class', 'price-label-white small');
                        titleStatus.textContent = "Status";

                        var br5 = document.createElement('br');

                        const status = document.createElement('span');
                        status.setAttribute('class', 'price-nominal-white small small');

                            const statusActive = document.createElement('li');
                            statusActive.setAttribute('class', 'status-active '+project.status_name.toLowerCase());
                            statusActive.textContent = project.status_name.capitalize(true);


            app.appendChild(cardscore);

            cardscore.appendChild(cardcontent);
            cardcontent.appendChild(rowone);
            cardcontent.appendChild(rowprog);
            cardcontent.appendChild(rowtwo);

            rowone.appendChild(terkumpul);
            rowprog.appendChild(prog);
                prog.appendChild(progbar);
            rowtwo.appendChild(colNameProject);
                colNameProject.appendChild(idProject);
                colNameProject.appendChild(br1);
                colNameProject.appendChild(nameProject);
            rowtwo.appendChild(colJumlahPinjam);
                colJumlahPinjam.appendChild(titleJumlah);
                colJumlahPinjam.appendChild(br2);
                colJumlahPinjam.appendChild(jumlahPinjam);
            rowtwo.appendChild(colBungaRating);
                colBungaRating.appendChild(titleBungaRating);
                colBungaRating.appendChild(br3);
                colBungaRating.appendChild(bungaRating);
            rowtwo.appendChild(colTenor);
                colTenor.appendChild(titleTenor);
                colTenor.appendChild(br4);
                colTenor.appendChild(tenor);
            rowtwo.appendChild(colStatus);
                colStatus.appendChild(titleStatus);
                colStatus.appendChild(br5);
                colStatus.appendChild(status);
                    status.appendChild(statusActive);

            if(statusActive.textContent == "Terdanai"){
                $(document).ready(function(){
                    // $(".card-score.card-primary.terdanai").css({"background-color": "domgrey", "display": "none"});
                    $(".card-score.card-primary.terdanai").css({"background-color": "#fff"});
                    $(".price-nominal-white.terdanai").css({"color": "#91919196"});
                    $(".price-nominal-white.dana.text-right.terdanai").css({"color": "#91919196"});
                    $(".status-active.terdanai").css({"color": "#91919196"});
                    $(".progress-bar.terdanai").css({"border-radius": "0px", "background-color": "#cdcdcd"});
                });
            }

        });
      } else {

      }
};

// Send request
request.send();