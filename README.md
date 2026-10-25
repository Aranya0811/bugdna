# BugDNA 🧬
### AI-Powered Bug Investigation with Gemma

**Trace the failure. Find the root cause. Understand the fix.**

BugDNA is an AI-assisted debugging tool that analyzes stack traces and source code to help developers understand software failures, identify likely root causes, and explore potential fixes using Google's Gemma model.

## 🌐 Deployment Links

- **Live Website:** `PENDING_FRONTEND_DEPLOYMENT`
- **Backend API:** https://bugdna-bau1.onrender.com
- **API Documentation:** https://bugdna-bau1.onrender.com/docs
- **Health Check:** https://bugdna-bau1.onrender.com/health
- **Source Code:** https://github.com/Aranya0811/bugdna

> The backend is deployed on Render. The frontend website link will be added after the React application is deployed.

## ✨ Features

- **AI-powered debugging:** Investigates errors using stack traces and source code.
- **Root-cause analysis:** Explains likely reasons behind software failures.
- **Structured reports:** Presents investigation results in organized sections.
- **Three built-in sample cases:** Demonstrates common programming errors immediately.
- **Interactive interface:** Dark developer-focused UI with lime-green accents.
- **Beginner-friendly workflow:** Makes error analysis more approachable for students and developers.

## 🛠️ Tech Stack

| Component | Technology |
|---|---|
| Frontend | React, Vite, CSS |
| Backend | Python, FastAPI, Uvicorn |
| AI Integration | Google GenAI SDK, Gemma |
| Backend Hosting | Render |
| Frontend Hosting | Vercel (planned) |

## 🧪 Three Built-in Sample Cards

BugDNA includes three ready-to-use examples that make demonstrations quick and easy during a hackathon.

1. **Null Profile Field** — Demonstrates an `AttributeError` caused by calling `.strip()` on a `None` value.
2. **Index Out of Bounds** — Demonstrates an `IndexError` when accessing an element in an empty list.
3. **Unhandled API Failure** — Demonstrates a `KeyError` when code assumes an API response contains a `user` field.

Selecting a sample automatically loads its stack trace and source code, allowing users to investigate an example without preparing their own input.

## 💡 1. Problem Solved

Debugging is often time-consuming, especially for beginners who struggle to interpret stack traces and identify the code responsible for a failure.

BugDNA addresses this challenge by bringing stack trace analysis, source code context, and AI-assisted investigation into one interface. It helps developers understand what might have gone wrong, why it happened, and what they should investigate next.

The goal is to reduce repetitive manual analysis and make debugging more accessible.

## 😊 2. How I Felt While Building It

Building BugDNA was an exciting, hands-on experience. It was satisfying to turn an idea into an interactive application that connects a real software development problem with AI-assisted analysis.

The process also involved debugging the application itself, resolving integration issues, configuring the backend, and improving the user interface. It reinforced that building an AI-powered product requires more than connecting a model: it also requires thoughtful design, reliable APIs, and end-to-end testing.

## 🧠 3. Experience with Gemma

Integrating Gemma into BugDNA provided an opportunity to explore how generative AI can assist with practical software engineering tasks.

The backend receives the stack trace and relevant source code, sends them to the configured Gemma model through the Google GenAI SDK, and returns an investigation report to the frontend.

This demonstrates how a generative model can provide contextual explanations rather than merely displaying an error message.

## 💚 4. Gemma Recommendations and Insights

Gemma helps BugDNA generate investigation suggestions that may include:

- Interpreting exceptions using the supplied source code.
- Identifying likely root causes.
- Explaining the relationship between the error and the code.
- Suggesting potential fixes and next debugging steps.

These are AI-generated recommendations, not guaranteed diagnoses. Developers should verify suggestions through testing and code review.

## 🧩 5. Hardest Issue

One of the hardest parts of building BugDNA was connecting the frontend, backend, and AI service into a reliable workflow.

Key challenges included:

- Handling frontend inputs and investigation states.
- Processing requests and responses through FastAPI.
- Integrating the Google GenAI SDK.
- Troubleshooting network connectivity and API configuration.
- Preparing the application for deployment.

Working through these challenges highlighted the importance of testing individual components before validating the complete application.

## 🎯 6. Project Use Cases

BugDNA can be useful for:

- **Students and beginners:** Learning to interpret stack traces and understand common programming errors.
- **Hackathon participants:** Investigating bugs encountered while rapidly developing prototypes.
- **Developers:** Getting an initial explanation of exceptions and potential causes.
- **Learning and code review:** Exploring why a particular code path may fail.
- **Educational demonstrations:** Understanding how AI can support debugging workflows.

BugDNA is an investigation assistant, not a replacement for a debugger, automated tests, or experienced code review.

## 🃏 7. Why Three Built-in Cards?

The three built-in cards make BugDNA easy to demonstrate during a hackathon.

They provide reproducible examples of different error categories without requiring judges to write their own code or prepare stack traces. A user can select a card, launch an investigation, and immediately see the workflow in action.

The examples cover a missing value, an invalid list index, and an unexpected API response.

## ⚙️ 8. Constraints and Limitations

- AI-generated explanations may be incorrect or incomplete.
- Investigation quality depends on the supplied stack trace and source code.
- The current workflow relies on user-provided context rather than automatically executing code or inspecting an entire repository.
- The AI service requires valid API credentials and network connectivity.
- Free hosting may introduce cold starts and slower initial requests.
- Sensitive source code, credentials, and personal data should not be submitted unless sharing is authorized.

## 🔮 9. Future Improvements

Potential improvements include:

1. **GitHub repository integration:** Automatically retrieve relevant files and investigate repository issues.
2. **Multi-language support:** Improve analysis for Java, JavaScript, TypeScript, C++, and other languages.
3. **Suggested code patches:** Generate proposed fixes with explanations.
4. **Sandboxed validation:** Run tests safely to check whether suggested fixes work.
5. **Follow-up questions:** Support conversational debugging of a report.
6. **Investigation history:** Save and revisit previous reports.
7. **Evaluation and testing:** Measure recommendation accuracy using known bugs and test cases.
8. **Production reliability:** Add stronger monitoring, timeouts, usage limits, and error handling.
9. **Expanded sample library:** Add more examples across languages and error categories.

## 🚀 Run Locally

### Prerequisites

- Node.js and npm
- Python 3
- A Google API key with access to the configured model

### 1. Clone the repository

```bash
git clone https://github.com/Aranya0811/bugdna.git
cd bugdna
```

### 2. Set up the backend

Create and activate a virtual environment:

```bash
python -m venv .venv
source .venv/bin/activate
```

Install dependencies:

```bash
pip install -r backend/requirements.txt
```

Create a `.env` file in the project root:

```env
GEMINI_API_KEY=your_google_api_key
```

Start the backend from the project root:

```bash
uvicorn backend.main:app --reload --port 8000
```

The local backend will run at `http://127.0.0.1:8000`.

### 3. Set up the frontend

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Open the local URL displayed by Vite, usually `http://localhost:5173`.

For production, configure the frontend to call the deployed backend URL instead of the local API address.

## 🔐 Security

- Keep API keys in environment variables.
- Never commit `.env` files or expose API keys in frontend code.
- Do not send sensitive source code or credentials to external AI services unless authorized.
- Review and test AI-generated suggestions before applying them.

## 👨‍💻 Author

**Aranya Kumar**

GitHub: [@Aranya0811](https://github.com/Aranya0811)

*Built with Gemma to make debugging clearer, more accessible, and more efficient.*
