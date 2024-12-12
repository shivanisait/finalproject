
    document.querySelector('.hamburger').addEventListener('click', function () {
        document.querySelector('.menu').classList.toggle('active');
    });
    button_bali.addEventListener("click", function () {
        console.log("button_bali");
        document.getElementById('buttonimage').src = "bali.jpg";
    })
    
button_banff.addEventListener("click", function () {
        console.log("button_banff");
        document.getElementById('buttonimage').src = "lakemoraine.jpg";
    })

    button_darjeeling.addEventListener("click", function () {
        console.log("button_darjeeling");
        document.getElementById('buttonimage').src = "darjeeling.jpg";
    })
    