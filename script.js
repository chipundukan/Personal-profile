/* =========================
   CONTACT FORM HANDLING
========================= */
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let output = document.getElementById("formOutput");

    // Validation
    if (name === "" || email === "" || message === "") {
        output.className = "text-danger mt-3";
        output.innerText = "❌ Please fill in all fields!";
        return;
    }

    if (!email.includes("@")) {
        output.className = "text-danger mt-3";
        output.innerText = "❌ Enter a valid email!";
        return;
    }

    // Success
    output.className = "text-success mt-3";
    output.innerText = `✅ Message sent successfully, ${name}!`;

    // Reset form
    document.getElementById("contactForm").reset();
});

/* =========================
   SMOOTH SCROLLING
========================= */
document.querySelectorAll('a.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        let target = document.querySelector(this.getAttribute("href"));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});

/* =========================
   CLOSE NAVBAR ON CLICK (MOBILE)
========================= */
const navLinks = document.querySelectorAll(".nav-link");
const navbarCollapse = document.getElementById("navbarNav");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        if (navbarCollapse.classList.contains("show")) {
            new bootstrap.Collapse(navbarCollapse).hide();
        }
    });
});

/* =========================
   SCROLL EFFECT (NAVBAR SHADOW)
========================= */
window.addEventListener("scroll", function() {
    let navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("shadow");
    } else {
        navbar.classList.remove("shadow");
    }
});
