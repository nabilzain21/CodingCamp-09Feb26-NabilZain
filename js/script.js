document.addEventListener("DOMContentLoaded", function () {

    const welcomeText = document.getElementById("welcomeText");
    const popup = document.getElementById("namePopup");
    const popupInput = document.getElementById("popupNameInput");
    const saveBtn = document.getElementById("saveNameBtn");

    const savedName = localStorage.getItem("username");

    // Jika belum ada nama → tampilkan popup
    if (!savedName) {
        popup.classList.remove("hidden");
    } else {
        welcomeText.textContent = `Hi ${savedName}, Welcome to my website`;
    }

    // Tombol popup - simpan nama
    saveBtn.addEventListener("click", function () {
        const newName = popupInput.value.trim();

        if (newName !== "") {
            localStorage.setItem("username", newName);
            welcomeText.textContent = `Hi ${newName}, Welcome to my website`;
            popup.classList.add("hidden");
        } else {
            alert("Nama tidak boleh kosong!");
        }
    });

    // BONUS: Enter untuk submit popup
    popupInput.addEventListener("keypress", function(e) {
        if (e.key === "Enter") {
            saveBtn.click();
        }
    });

    // Form Message
    const form = document.getElementById("messageForm");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("inputName").value;
        const birth = document.getElementById("inputBirth").value;
        const message = document.getElementById("inputMessage").value;
        const gender = document.querySelector('input[name="gender"]:checked')?.value;

        // Validasi
        if (!name || !birth || !gender || !message) {
            alert("Semua field harus diisi!");
            return;
        }

        // Update Table
        document.getElementById("currentTime").textContent = new Date().toLocaleString();
        document.getElementById("resultName").textContent = name;
        document.getElementById("resultBirth").textContent = birth;
        document.getElementById("resultGender").textContent = gender;
        document.getElementById("resultMessage").textContent = message;

        // Reset form
        form.reset();
    });

});