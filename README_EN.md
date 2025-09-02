Parfait ! Merci pour le contenu. Voici la **traduction complète en anglais** de ton `README.md` pour la branche `sass`, que je vais ensuite intégrer dans le document Word.
# agenceco-website (sass branch)

**Static training website** — A showcase website built with HTML, CSS, and JavaScript, using Sass (a CSS preprocessor) for style management.

**Live demo:** [https://baptistev59.alwaysdata.net](https://baptistev59.alwaysdata.net)
**Demo credentials:**

* Email: `john@example.com`
* Password: `password123`

---

### 🔀 Current Branch

This README refers to the **`sass`** branch, which includes a version of the project using **Sass** to improve the organization and modularity of the style sheets.

---

### 📁 Project Structure (sass branch)

```
.
├── index.html           # Home page
├── blog.html            # Blog / News page
├── connexion.html       # Login page
├── addactu.html         # Add a news post
├── detailactu.html      # News post details
├── modifactu.html       # Edit a news post
├── assets/
│   ├── js/              # JavaScript scripts
│   └── sass/            # Sass source files
└── README.md            # Documentation (this file)
```

→ The project is mostly structured with:

* **HTML (≈53%)**
* **CSS (≈45%)** (via Sass)
* **JavaScript (≈2%)**

---

### ⚙️ Installation & Usage

1. Clone the repository and switch to the `sass` branch:

```bash
git clone https://github.com/baptistev59/agenceco-website.git
cd agenceco-website
git checkout sass
```

2. Compile Sass files into CSS (e.g., using Sass CLI):

```bash
sass assets/sass/:assets/css/
```

Or use **Live Sass Compiler** in VS Code.

3. Open `index.html` in your browser (by double-click or `Ctrl+O`),
   or launch a development server (e.g., **Live Server** in VS Code) for auto-refresh.

---

### 🛠️ Technologies Used

* **HTML5**
* **Sass** (CSS preprocessor)
* **CSS3** (generated from Sass)
* **JavaScript** (for optional dynamic features)

---

### 🌐 Pages & Features

The website includes multiple distinct pages:

* `index.html` — homepage
* `blog.html` — list of news articles
* `connexion.html` — login page
* `addactu.html`, `detailactu.html`, `modifactu.html` — **CRUD features** for news posts (Create, Read, Update)

---

### 🔗 Backend (API)

The project uses a separate dedicated API, hosted in another repository:
👉 **AgencEcoBackend**

All installation and usage instructions are detailed in that backend repository's README.

For the online demo, the backend is deployed at:
[https://agencecobackend.vercel.app/](https://agencecobackend.vercel.app/)

---

### 🤝 Contributions

Contributions are welcome! Here's how to proceed:

1. Fork this repository
2. Create a new branch:

   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Make your changes and commit them:

   ```bash
   git commit -m "Add: feature description"
   ```
4. Push to your fork:

   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a **Pull Request** targeting the `sass` branch of the original repository.

---

### 📜 License

This project is licensed under the **MIT License**.
(See the `LICENSE` file if present — if not, consider adding one.)
