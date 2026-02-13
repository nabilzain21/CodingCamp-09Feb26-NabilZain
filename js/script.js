document.addEventListener("DOMContentLoaded", function () {

    const nameSpan = document.getElementById("name");
    const savedName = localStorage.getItem("username");

    // Tampilkan nama tersimpan saat reload
    if (savedName) {
        nameSpan.textContent = savedName;
    }

    const form = document.getElementById("messageForm");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("inputName").value;
        const birth = document.getElementById("inputBirth").value;
        const message = document.getElementById("inputMessage").value;
        const gender = document.querySelector('input[name="gender"]:checked')?.value;

        // Simpan nama ke localStorage
        localStorage.setItem("username", name);

        // Update Hero
        nameSpan.textContent = name;

        // Update Table
        document.getElementById("currentTime").textContent = new Date().toLocaleString();
        document.getElementById("resultName").textContent = name;
        document.getElementById("resultBirth").textContent = birth;
        document.getElementById("resultGender").textContent = gender;
        document.getElementById("resultMessage").textContent = message;

        // Optional: reset form
        form.reset();
    });
    

});

