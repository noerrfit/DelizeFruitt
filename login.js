document.getElementById("loginForm").addEventListener("submit", function(e){
    e.preventDefault();

    const email = document.getElementById("email").value;
    const pw    = document.getElementById("password").value;

    if(email.trim() !== "" && pw.trim() !== ""){

        localStorage.setItem("user", JSON.stringify({
            email: email,
            name: email.split("@")[0],
            join: new Date().toLocaleDateString()
        }));

        window.location.href = "index.html";
    } else {
        alert("Email dan Password wajib diisi!");
    }
});

