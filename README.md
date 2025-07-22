# 🚀 Next.js Frontend - CI/CD Enabled

This is the frontend of the full-stack CI/CD project built with **Next.js**. It includes Docker support and CI/CD automation with **Jenkins** and **GitHub Actions**.

## 📁 Project Structure

<img width="452" height="1128" alt="image" src="https://github.com/user-attachments/assets/8b3d6b29-8b97-4b9f-b168-d968353d855b" />

## 🌐 Local Development

```bash
npm install
npm run dev
```
Visit: http://localhost:3000

# 🐳 Docker Usage

Build and run manually:
```bash
docker build -t maryemaman/nextjs-frontend .
docker run -p 3000:3000 maryemaman/nextjs-frontend
```

Or use Docker Compose from root project:

```bash
docker-compose up --build
```

# 🔁 CI/CD Pipeline (via Jenkins)
This repo includes a Jenkinsfile that:

- Builds the Docker image
- Logs into Docker Hub
- Pushes the image to your Docker Hub repo

Jenkinsfile Highlights
```bash
IMAGE_NAME = 'maryemaman/nextjs-frontend'
```

Make sure Jenkins is set up with:

Docker-in-Docker (DinD)

Docker Hub credentials (dockerhub-credentials)

# 🧪 Manual Testing

After running:

```bash
docker-compose up --build
```

Test in browser:

- ✅ Frontend: http://localhost:3000

🔗 Useful Commands
```bash
git add .
git commit -m "update"
git push origin main
```

---

📄 **Made by Maryem Mohamed**  
🔗 [GitHub Profile](https://github.com/MaryemAman)  
🚀 Powered by Docker, Jenkins, and GitHub CI/CD
