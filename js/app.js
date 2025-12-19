const content = document.getElementById("content");
const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");


/* ================================
  SAYFA RENDER FONKSİYONU (SPA)
================================ */
const renderPage = (hash) => { 

    /* -------- HAKKIMDA -------- */
    if (hash === "#hakkimda") {
        content.innerHTML = `
        <section id="hakkimda">
            <header>
                <h1>Hakkimda</h1>
            </header>

            <article>
                <p>
                    Merhaba, ben <strong>Khadra Khoder</strong>.<br>
                    Sakarya Üniversitesinde <strong>Bilişim Sistemleri Mühendisliği</strong> bölümünde öğrenim görmekteyim.<br>
                    Hedefim, web ve yazilim alaninda kendimi geliştirerek
                    kullanici odakli ve modern web uygulamalari geliştirmektir.<br>
                    Bu portfolyo sitesi, HTML5, CSS3 ve JavaScript kullanilarak
                    SPA mimarisine uygun şekilde geliştirilmiştir.
                </p>

                <br>

                <div class="card card-small">
                    <img src="assets/images/1.image.jpeg" class="card-img-top" alt="profil">

                    <div class="card-body">
                        <h5 class="card-title">Teknoloji</h5>
                        <p class="card-text">
                            Web teknolojileri ve yapay zekâ kullanilarak dijital
                            dünyanin küresel ölçekte birbirine bağlanmasi sağlanmaktadir.
                        </p>
                    </div>
                </div>

                <br>

                <h4><i class="fa-regular fa-id-card"></i> Personal Details</h4>
                <p>
                    <b>Name:</b> Khadra Khoder <br>
                    <b>Age:</b> 20 <br>
                    <b>Education:</b> Student <br>
                    <b>Student Number:</b> B231200576 <br>
                    <b>Nationality:</b> Lebanese <br>
                    <b>Email:</b> khadrakhoder1402@gmail.com
                </p>

                <h4><i class="fa-solid fa-book-open"></i> Education Information</h4>

                <table>
                    <thead>
                        <tr>
                            <th>Academic Year</th>
                            <th>Level</th>
                            <th>Country</th>
                            <th>School</th>
                            <th>Department</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>2019-2022</td>
                            <td>High School</td>
                            <td>Lebanon</td>
                            <td>Al-Kavashra</td>
                            <td>Life Science</td>
                            <td>Graduate</td>
                        </tr>
                        <tr>
                            <td>2024-2025</td>
                            <td>University</td>
                            <td>Turkey</td>
                            <td>Sakarya University</td>
                            <td>ISE</td>
                            <td>Active</td>
                        </tr>
                    </tbody>
                </table>

                <h4><i class="fa-solid fa-earth-americas"></i> Languages</h4>
                <ul>
                    <li>Arabic</li>
                    <li>French</li>
                    <li>Turkish</li>
                    <li>English</li>
                </ul>
            </article>
        </section>
        `;
    }

    /* -------- PROJELERİM (FETCH + JSON) -------- */
    else if (hash === "#projelerim") {
        content.innerHTML = `
        <section id="projelerim">
            <header>
                <h1>Projelerim</h1>
                <p>
                    Üniversite eğitimim süresince geliştirdiğim bazi akademik ve kişisel projeler aşağida yer almaktadir.
                </p>
            </header>

            <section class="projects" id="projectsContainer">
                <!-- Projeler fetch ile buraya gelecek -->
            </section>
        </section>
        `;

        loadProjects(); //  fetch burada çağrılıyor 
    }

    /* -------- İLETİŞİM -------- */
    else if (hash === "#iletisim") {
        content.innerHTML = `
        <section id="iletisim">
            <header>
                <h1>İletişim</h1>
                <p>Benimle iletişime geçmek için aşağidaki formu kullanabilirsiniz.</p>
            </header>

            <article>
                <form id="contactForm">
                    <label for="name">Name</label>
                    <input id="name" type="text" required placeholder="Enter your name">

                    <label for="email">Email</label>
                    <input id="email" type="email" required placeholder="Enter your email">

                    <label for="message">Message</label>
                    <textarea id="message" required></textarea>

                    <button type="submit">Gönder</button>
                </form>

                <p id="result"></p> 
            </article>
        </section>
        `;

        const form = document.getElementById("contactForm");
        const result = document.getElementById("result");

        form.addEventListener("submit", (e) => {
            e.preventDefault();
            result.textContent = "Mesaj gönderildi!";
            result.style.color = "green";
            form.reset();
        });
    }

    /* -------- DEFAULT -------- */
    else {
        content.innerHTML = `
            <section>
                <h1>Hoş Geldiniz</h1>
                <p>Menüden bir sayfa seçin.</p>
            </section>
        `;
    }
};

/* ================================
   FETCH İLE PROJELERİ YÜKLEME
================================ */
const loadProjects = async () => {
    const container = document.getElementById("projectsContainer");

    try {
        const response = await fetch("data/projects.json");
        const projects = await response.json();

        container.innerHTML = ""; // eski içerikleri temizle

        projects.forEach(project => {
            const card = document.createElement("article");
            card.className = "card";

            card.innerHTML = `
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <small><strong>Kullanilanlar:</strong> ${project.technologies}</small> 
            `;

            container.appendChild(card);
        });

    } catch (error) {
        console.error("Projeler yüklenemedi:", error);
        container.innerHTML = "<p>Projeler yüklenemedi.</p>";
    }
};



/* ================================
   SAYFA YÜKLEME & ANİMASYON
================================ */
const loadPage = () => {
    const hash = location.hash || "#hakkimda";

    content.classList.add("fade-out");

    setTimeout(() => {
        renderPage(hash);
        content.classList.remove("fade-out");
    }, 300);
};

/* ================================
   EVENT LISTENERS
================================ */
window.addEventListener("load", loadPage);
window.addEventListener("hashchange", loadPage);

hamburger.addEventListener("click", () => {
    menu.classList.toggle("active");
});

menu.addEventListener("click", () => {
    menu.classList.remove("active");
});
