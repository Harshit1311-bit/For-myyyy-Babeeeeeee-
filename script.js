const correctPassword = "1.1.2026";

function checkPassword() {

    const password = document.getElementById("password").value;
    const error = document.getElementById("error");

    if (password === correctPassword) {

        document.getElementById("loginScreen").classList.add("hidden");
        document.getElementById("mainScreen").classList.remove("hidden");

        const music = document.getElementById("music");

        music.play().catch(() => {
            console.log("Music will play after user interaction.");
        });

    } else {

        error.innerHTML = "❌ Oops! That's not our special date ❤️";

    }
}

document.getElementById("password").addEventListener("keypress", function(e) {

    if (e.key === "Enter") {

        checkPassword();

    }

});
