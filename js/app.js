// ================= CONTACT FORM =================

const form = document.getElementById("contactForm");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name || !email || !message) {
            alert("Please fill all fields.");
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            alert("Please enter a valid email.");
            return;
        }

        alert("Message Sent Successfully!");
        form.reset();
    });
}

// ================= BLOG API =================

const blogContainer = document.getElementById("blogContainer");
const loading = document.getElementById("loading");
const error = document.getElementById("error");

function loadBlogs() {

    if (!blogContainer) return;

    loading.style.display = "block";
    error.innerText = "";
    blogContainer.innerHTML = "";

    const blogs = [
        {
            title: "Productivity Tips",
            description: "Discover practical ways to improve productivity and complete tasks more efficiently."
        },
        {
            title: "Project Management Guide",
            description: "Learn how to organize projects, monitor progress, and achieve successful outcomes."
        },
        {
            title: "Team Collaboration Strategies",
            description: "Explore methods to improve communication and teamwork in modern organizations."
        },
        {
            title: "Work Efficiency Techniques",
            description: "Understand techniques that help you complete tasks faster and improve performance."
        },
        {
            title: "Remote Work Best Practices",
            description: "Learn essential practices for staying productive while working remotely."
        },
        {
            title: "Building Better Habits",
            description: "Develop positive habits that improve productivity, discipline, and personal growth."
        }
    ];

    setTimeout(() => {

        loading.style.display = "none";

        blogs.forEach(blog => {

            const card = document.createElement("div");
            card.classList.add("card");

            card.innerHTML = `
                <div class="icon">📝</div>
                <h3>${blog.title}</h3>
                <p>${blog.description}</p>
            `;

            blogContainer.appendChild(card);
        });

    }, 500);
}

loadBlogs();