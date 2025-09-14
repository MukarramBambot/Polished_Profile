# PolishedProfile

PolishedProfile is a powerful open-source resume builder and resume parser.

The goal of PolishedProfile is to provide everyone with free access to a modern professional resume design and enable anyone to apply for jobs with confidence.

Official site: [https://polished-profile.com](https://polished-profile.com)

## ⚒️ Resume Builder

PolishedProfile's resume builder allows user to create a modern professional resume easily.

![Resume Builder Demo](https://i.ibb.co/jzcrrt8/resume-builder-demo-optimize.gif)

It has 5 Core Features:
| <div style="width:285px">**Feature**</div> | **Description** |
|---|---|
| **1. Real Time UI Update** | The resume PDF is updated in real time as you enter your resume information, so you can easily see the final output. |
| **2. Modern Professional Resume Design** | The resume PDF is a modern professional design that adheres to U.S. best practices and is ATS friendly to top ATS platforms such as Greenhouse and Lever. It automatically formats fonts, sizes, margins, bullet points to ensure consistency and avoid human errors. |
| **3. Privacy Focus** | The app only runs locally on your browser, meaning no sign up is required and no data ever leaves your browser, so it gives you peace of mind on your personal data. (Fun fact: Running only locally means the app still works even if you disconnect the internet.) |
| **4. Import From Existing Resume PDF** | If you already have an existing resume PDF, you have the option to import it directly, so you can update your resume design to a modern professional design in literally a few seconds. |
| **5. Successful Track Record** | PolishedProfile users have landed interviews and offers from top companies, such as Dropbox, Google, Meta to name a few. It has been proven to work and liken by recruiters and hiring managers. |

## 🔍 Resume Parser

PolishedProfile’s second component is the resume parser. For those who have an existing resume, the resume parser can help test and confirm its ATS readability.

![Resume Parser Demo](https://i.ibb.co/JvSVwNk/resume-parser-demo-optimize.gif)

You can learn more about the resume parser algorithm in the ["Resume Parser Algorithm Deep Dive" section](https://polished-profile.com/resume-parser).

## 📚 Tech Stack

| <div style="width:140px">**Category**</div> | <div style="width:100px">**Choice**</div> | **Descriptions** |
|---|---|---|
| **Language** | [TypeScript](https://github.com/microsoft/TypeScript) | TypeScript is JavaScript with static type checking and helps catch many silly bugs at code time. |
| **UI Library** | [React](https://github.com/facebook/react) | React’s declarative syntax and component-based architecture make it simple to develop reactive reusable components. |
| **State Management** | [Redux Toolkit](https://github.com/reduxjs/redux-toolkit) | Redux toolkit reduces the boilerplate to set up and update a central redux store, which is used in managing the complex resume state. |
| **CSS Framework** | [Tailwind CSS](https://github.com/tailwindlabs/tailwindcss) | Tailwind speeds up development by providing helpful css utilities and removing the need to context switch between tsx and css files. |
| **Web Framework** | [NextJS 13](https://github.com/vercel/next.js) | Next.js supports static site generation and helps build efficient React webpages that support SEO. |
| **PDF Reader** | [PDF.js](https://github.com/mozilla/pdf.js) | PDF.js reads content from PDF files and is used by the resume parser at its first step to read a resume PDF’s content. |
| **PDF Renderer** | [React-pdf](https://github.com/diegomura/react-pdf) | React-pdf creates PDF files and is used by the resume builder to create a downloadable PDF file. |

## 📁 Project Structure

PolishedProfile is created with the NextJS web framework and follows its project structure. The source code can be found in `src/app`. There are a total of 4 page routes as shown in the table below. (Code path is relative to `src/app`)

| <div style="width:115px">**Page Route**</div> | **Code Path** | **Description** |
|---|---|---|
| / | /page.tsx | Home page that contains hero, auto typing resume, steps, testimonials, logo cloud, etc |
| /resume-import | /resume-import/page.tsx | Resume import page, where you can choose to import data from an existing resume PDF. The main component used is `ResumeDropzone` (`/components/ResumeDropzone.tsx`) |
| /resume-builder | /resume-builder/page.tsx | Resume builder page to build and download a resume PDF. The main components used are `ResumeForm` (`/components/ResumeForm`) and `Resume` (`/components/Resume`) |
| /resume-parser | /resume-parser/page.tsx | Resume parser page to test a resume’s AST readability. The main library util used is `parseResumeFromPdf` (`/lib/parse-resume-from-pdf`) |

## 💻 Local Development

### Method 1: npm

1. Download the repo `git clone https://github.com/Cleven7/Polished-Profile.git`
2. Change the directory `cd polished-profile`
3. Install the dependency `npm install`
4. Start a development server `npm run dev`
5. Open your browser and visit [http://localhost:3000](http://localhost:3000) to see PolishedProfile live

### Method 2: Docker

1. Download the repo `git clone https://github.com/Cleven7/Polished-Profile.git`
2. Change the directory `cd polished-profile`
3. Build the container `docker build -t polished-profile .`
4. Start the container `docker run -p 3000:3000 polished-profile`
5. Open your browser and visit [http://localhost:3000](http://localhost:3000) to see PolishedProfile live


# PolishedProfile Project Analysis

## Overview

**PolishedProfile** is an open-source resume builder and resume parser designed to provide users with a modern, professional resume design and tools to ensure resumes are compatible with Applicant Tracking Systems (ATS). It is built primarily with TypeScript and React, using Next.js as the web framework.

---

## Key Features

### 1. Resume Builder
- **Real-time UI Updates:** The resume PDF updates instantly as users fill out their information.
- **Modern Design:** Ensures professional, consistent formatting adhering to U.S. best practices and is ATS-friendly.
- **Privacy Focus:** All data processing runs locally in the browser; no sign-up, no data leaves the user's device.
- **Import Existing Resume:** Users can import their existing PDF resumes to upgrade or edit them.
- **Proven Track Record:** Users have reported success with top companies.

### 2. Resume Parser
- **ATS Readability Testing:** Users can analyze their resume's ATS compatibility.
- **Deep Dive Documentation:** Detailed explanations are available on how the parser works.

---

## Tech Stack

| Category           | Technology            | Description                                                                                      |
|--------------------|----------------------|--------------------------------------------------------------------------------------------------|
| Language           | TypeScript           | Static type checking for JavaScript.                                                             |
| Web Framework      | Next.js 13           | Server-side rendering, routing, and static site generation.                                      |
| UI Library         | React                | Component-based architecture for building the user interface.                                    |
| State Management   | Redux Toolkit        | Centralized state management, especially for complex resume data.                                |
| CSS Framework      | Tailwind CSS         | Utility-first CSS for rapid UI development.                                                      |
| PDF Reader         | PDF.js               | Extracts text from PDF files for the resume parser.                                              |
| PDF Renderer       | React-pdf            | Generates downloadable PDF resumes.                                                              |

---

## Project Structure

The source code follows the Next.js convention, with the main app located in `src/app`. Key routes and components:

| Route            | Code Path                      | Description                                                                                       |
|------------------|-------------------------------|---------------------------------------------------------------------------------------------------|
| `/`              | `/page.tsx`                   | Home page with hero, steps, testimonials, etc.                                                    |
| `/resume-import` | `/resume-import/page.tsx`      | Import resume PDFs using the `ResumeDropzone` component.                                          |
| `/resume-builder`| `/resume-builder/page.tsx`     | Resume builder, using `ResumeForm` and `Resume` components.                                       |
| `/resume-parser` | `/resume-parser/page.tsx`      | Test a resume's ATS readability, using `parseResumeFromPdf` utility from `/lib/parse-resume-from-pdf`. |

---

## How it Works

### Resume Parsing Logic

- **PDF Reading:** Leverages Mozilla's PDF.js to extract text content from uploaded PDFs.
- **Text Extraction:** Each text item includes content and metadata (position, font style, etc.).
- **ATS Analysis:** The parser analyzes the structure for ATS compatibility.

### Resume Building Logic

- **Form-Based Data Entry:** Users enter resume data into forms managed by Redux.
- **Live Preview:** Resume is rendered in real time using React and react-pdf.
- **Export:** The final resume can be downloaded as a PDF.

---

## Local Development

Supports standard npm and Docker-based development:

**NPM:**
1. Clone repo: `git clone https://github.com/Cleven7/Polished-Profile.git`
2. Install dependencies: `npm install`
3. Start dev server: `npm run dev`

**Docker:**
1. Build image: `docker build -t polished-profile .`
2. Run: `docker run -p 3000:3000 polished-profile`

Browse to `http://localhost:3000` to see the app.

---

## Licensing

- Licensed under the **GNU Affero General Public License v3** (AGPLv3).
- Ensures users have access to the source code, especially for publicly hosted versions.

---

## Summary Table

| Area                     | Details                                                 |
|--------------------------|---------------------------------------------------------|
| Main Language            | TypeScript (97.6%)                                      |
| Other Languages          | CSS, minor "Other"                                      |
| Frameworks & Libraries   | Next.js, React, Redux Toolkit, Tailwind, PDF.js, react-pdf |
| Privacy                  | 100% local processing, no data leaves browser           |
| Core Functions           | Resume building, PDF parsing, ATS testing               |
| Deployment               | npm, Docker                                             |
| License                  | AGPLv3                                                  |

---

## Additional Notes

- The documentation is robust and user-friendly, referencing deep-dives and visual demos.
- All critical logic for PDF parsing and rendering is handled by specialized libraries for reliability and maintainability.
- The project is well-architected for extensibility and privacy.
