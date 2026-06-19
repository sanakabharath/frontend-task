// ================= CONTACT FORM =================

const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const message =
        document.getElementById("message").value.trim();

    if (
        name === "" ||
        email === "" ||
        message === ""
    ) {
        alert("Please fill all fields.");
        return;
    }

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email.");
        return;
    }

    alert("Message Sent Successfully!");
    form.reset();
});


// ================= DARK MODE =================

const themeBtn =
    document.getElementById("theme-btn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    localStorage.setItem(
        "theme",
        document.body.classList.contains("dark")
    );
});

if (
    localStorage.getItem("theme") === "true"
) {
    document.body.classList.add("dark");
}


// ================= HAMBURGER MENU =================

const hamburger =
    document.querySelector(".hamburger");

const navLinks =
    document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});


// ================= BLOG API =================

async function loadBlogs() {

    const container =
        document.getElementById("blogContainer");

    if (!container) return;

    container.innerHTML =
        "<p>Loading articles...</p>";

    try {

        await fetch(
            "https://jsonplaceholder.typicode.com/posts"
        );

        const blogs = [
            "Productivity Tips",
            "Project Management Guide",
            "Team Collaboration Strategies",
            "Work Efficiency Techniques",
            "Remote Work Best Practices",
            "Building Better Habits"
        ];

        container.innerHTML = "";

        blogs.forEach(title => {

            container.innerHTML += `
                <div class="card">
                    <div class="icon">📝</div>
                    <h3>${title}</h3>
                    <p>
                        Learn practical strategies to improve productivity,
                        collaborate effectively, and manage projects
                        successfully with TaskFlow.
                    </p>
                </div>
            `;
        });

    }
    catch (error) {

        container.innerHTML =
            "<p>Unable to load articles. Please try again later.</p>";
    }
}

loadBlogs();
// ================= PRICING PLAN SELECT =================

const plans =
document.querySelectorAll(".price-card");

plans.forEach(plan => {

    const button =
    plan.querySelector("button");

    button.addEventListener("click", () => {

        plans.forEach(p =>
            p.classList.remove("active")
        );

        plan.classList.add("active");

    });

});