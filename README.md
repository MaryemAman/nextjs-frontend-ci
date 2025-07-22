# 🚀 Maryem System (Next.js) Frontend - CI/CD Enabled

This is the frontend of the Maryem System full-stack project, built with **Next.js**. It features Docker support and CI/CD automation using **Jenkins** and **GitHub Actions**.

---

## [Localhost:3000](http://localhost:3000)
<img width="300" height="500" alt="Maryem System Login" src="https://github.com/user-attachments/assets/c85d721a-5696-4b00-94bb-7365d6c3cf4b" />

## Once Logged In:
<img width="300" height="500" alt="Maryem System Dashboard" src="https://github.com/user-attachments/assets/91399f64-d39f-4450-b099-3f7c82523cba" />

## [Localhost:7070](http://localhost:7070)
<img width="300" height="500" alt="phpMyAdmin" src="https://github.com/user-attachments/assets/2a60d3f5-435f-418f-b201-dba880977a57" />

---

## 📁 Project Structure

<img width="452" height="1128" alt="Project Structure" src="https://github.com/user-attachments/assets/8b3d6b29-8b97-4b9f-b168-d968353d855b" />

---

## 🌐 Local Development

```bash
npm install
npm run dev
```
Visit: [http://localhost:3000](http://localhost:3000)

---

# ⚠️ Prerequisites

- 🐳 Docker Desktop must be running

From the root folder, start all services (frontend, backend, database, phpMyAdmin):

```bash
docker-compose up --build
```

---

# 🐳 Docker Usage

Build and run manually:
```bash
docker build -t maryemaman/nextjs-frontend .
docker run -p 3000:3000 maryemaman/nextjs-frontend
```

Or use Docker Compose from the root project:

```bash
docker-compose up --build
```

---

# 🔁 CI/CD Pipeline (via Jenkins)

This repo includes a Jenkinsfile that:

- Builds the Docker image
- Logs into Docker Hub
- Pushes the image to your Docker Hub repo

**Jenkinsfile Highlights**
```groovy
IMAGE_NAME = 'maryemaman/nextjs-frontend'
```

**Jenkins Setup:**

- Docker-in-Docker (DinD) running
- Docker Hub credentials (ID: `dockerhub-credentials`)

---

# 🧪 Manual Testing

After running:

```bash
docker-compose up --build
```

Test in browser:

- ✅ Frontend: [http://localhost:3000](http://localhost:3000)
- ✅ phpMyAdmin: [http://localhost:7070](http://localhost:7070)

---

# ⚙️ Environment Variables

- `BACKEND_API_HOST` – URL of the backend API (e.g., `http://localhost:9000`)
- `SECRET_COOKIE_PASSWORD` – Secret for session cookies

Set these in `.env` or via Docker Compose.

---

🔗 **Useful Commands**
```bash
git add .
git commit -m "update"
git push origin main
```

---

📄 **Made by Maryem Mohamed**  
🔗 [GitHub Profile](https://github.com/MaryemAman)  
🚀 Powered by Docker, Jenkins, and GitHub CI/CD
