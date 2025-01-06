let list = document.getElementById('flag');

        list.addEventListener('change', function() {
            flagswap(list);
        });

        function flagswap(list) {
            let img = document.getElementById('img');

            if (list.value == "Jordan") {
                img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Flag_of_Jordan.svg/800px-Flag_of_Jordan.svg.png';
            } else if (list.value == "Palestine") { // Corrected spelling
                img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Flag_of_Palestine.svg/800px-Flag_of_Palestine.svg.png';
            } else if (list.value == "Syria") {
                img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Flag_of_Syria_%281930%E2%80%931958%2C_1961%E2%80%931963%29.svg/640px-Flag_of_Syria_%281930%E2%80%931958%2C_1961%E2%80%931963%29.svg.png';
            }
        }