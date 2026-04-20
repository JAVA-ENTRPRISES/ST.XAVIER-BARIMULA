document.addEventListener("DOMContentLoaded", () => {
    // HEADER INJECTION
    const headerHTML = `
    <header>
        <div class="header-container">
            <div class="logo-box">
                <img src="image/logo.jpeg" alt="ST. XAVIERS SCHOOL Logo" class="school-logo">
                <div class="school-titles">
                    <h1>ST XAVIERS SCHOOL</h1>
                
                </div>
            </div>
            <nav>
                <ul class="nav-links">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="about.html">About Us</a></li>
                    <li><a href="facilities.html">Facilities</a></li>
                    <li><a href="academics.html">Academics</a></li>
                    <li><a href="admission.html">Admission</a></li>
                    <li><a href="gallery.html">Gallery</a></li>
                    <li><a href="mandatory.html">Mandatory Disclosure</a></li>
                    <li><a href="contact.html">Contact Us</a></li>
                </ul>
            </nav>
        </div>
    </header>`;

    // FOOTER INJECTION
    const footerHTML = `
    <footer>
        <div class="footer-grid">
            <div class="footer-col">
                <img src="image/logo.jpeg" alt="ST. XAVIERS SCHOOL Logo" class="footer-logo">
                <p>ST. XAVIERS SCHOOL is committed to providing world-class education with traditional values in the heart of Kendrapara.</p>
            </div>
            <div class="footer-col">
                <h3>Quick Links</h3>
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="admission.html">Admission 2026</a></li>
                  <li><a href="about.html">About Us</a></li>
                    <li><a href="mandatory.html">CBSE Disclosure</a></li>
                    <li><a href="gallery.html">Photo Gallery</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <h3>Contact Info</h3>
                <p>📍 AT- Barimula, Kendrapara, Odisha</p>
                <p>📞 7978048062</p>
                <p>📧 stxaviersschool40@gmail.com</p>
            </div>
        </div>
        <div class="footer-bottom">
            &copy; 2026 ST. XAVIERS SCHOOL | Developed for CBSE Affiliation
        </div>
    </footer>`;

    document.getElementById("header-placeholder").innerHTML = headerHTML;
    document.getElementById("footer-placeholder").innerHTML = footerHTML;
});