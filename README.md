# Amit Kumar Pati — React Portfolio

A responsive, animated React + Vite portfolio with a cinematic introduction-video hero, projects, skills, internship timeline, education, certificates, contact form, and Google Maps location panel.

## Requirements
- Windows 10/11
- Node.js LTS (18+ recommended) and npm
- VS Code (recommended)

## 1. Extract and open
1. Extract `amit-kumar-pati-portfolio.zip`.
2. Open the extracted `amit-kumar-pati-portfolio` folder in VS Code.
3. Open **Terminal → New Terminal**.

## 2. Install and run
```bash
node -v
npm -v
npm install
npm run dev
```
Open the local URL Vite prints, usually `http://localhost:5173`.

## 3. Add your introduction video
1. Create the folder `public/videos` if it does not exist.
2. Copy your own introduction video into it and name it exactly `amit-intro.mp4`.
3. The hero already references `/videos/amit-intro.mp4`.
4. Use an MP4 encoded with H.264 video + AAC audio, ideally 1080p and compressed for fast loading.

**Autoplay note:** browsers generally block autoplay with sound. This portfolio starts the video muted, loops it, and provides an on-screen sound toggle. If the video file is absent, a designed fallback hero remains visible.

## 4. Add your resume PDF
Copy your final resume PDF into `public/resume.pdf`. The **Download Resume** links are already configured to use this path. Do not rename the file unless you also update the links in `src/App.jsx`.

## 5. Configure automatic email delivery (optional but recommended)
The contact form supports EmailJS. Without configuration, it opens the visitor's default email app with a pre-filled message (`mailto:` fallback).

1. Create a free account at https://www.emailjs.com/
2. Add an email service and a template with variables:
   - `from_name`
   - `from_email`
   - `subject`
   - `message`
   - `to_email`
3. In the project root, copy `.env.example` to `.env`.
4. Add your EmailJS Service ID, Template ID and Public Key:
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```
5. In the EmailJS template, set the recipient to `{{to_email}}` or directly to `apati9587@gmail.com`.
6. Stop and restart `npm run dev` after changing `.env`.

EmailJS public keys are intended for browser use. Add domain restrictions and configure abuse/spam protection in your EmailJS account. Never put private API secrets in a Vite frontend.

## 6. Update profile links and map
Open `src/App.jsx` and update the `profile` object if any link or contact detail changes. The map currently points to Sripura, Pubasahi, Jajpur, Odisha, India. For privacy, consider changing this to a broader public location (for example, Jajpur, Odisha) before publishing.

## 7. Production build
```bash
npm run build
npm run preview
```
The production-ready site is generated in `dist/`.

## 8. Deploy
- **Vercel:** import the GitHub repository; framework preset Vite; build command `npm run build`; output directory `dist`. Add the three EmailJS environment variables in Project Settings → Environment Variables.
- **Netlify:** build command `npm run build`; publish directory `dist`. Add the same environment variables in Site configuration → Environment variables.

## Included sections
- Cinematic hero with muted autoplay video, play/pause and sound controls
- Animated starfield, gradient glows, scroll progress and reveal effects
- About / profile overview
- Technical skills and office skills
- Internship experience timeline
- Project showcase
- Education and certifications
- Soft skills
- Contact form with EmailJS + mailto fallback
- Google Maps embed and directions link
- Responsive mobile menu, theme toggle, scroll-to-top
- SEO metadata and accessible labels

## Notes
- Resume facts and project descriptions are based on the supplied resume. No unverified performance metrics, client claims, or live project URLs have been invented.
- Add your actual video and resume PDF before deployment.
