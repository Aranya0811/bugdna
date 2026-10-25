# BugDNA 🧬
### AI-Powered Bug Investigation with Gemma

**Trace the failure. Find the root cause. Understand the fix.**

BugDNA is an AI-powered debugging assistant that analyzes stack traces and source code to help developers identify likely root causes, understand errors, and explore potential fixes using Google's Gemma model.

## 🚀 Live Demo

- **Frontend:** `ADD_YOUR_VERCEL_URL_HERE`
- **Backend API:** `ADD_YOUR_RENDER_URL_HERE`
- **GitHub Repository:** [Aranya0811/bugdna](https://github.com/Aranya0811/bugdna)

## ✨ Features

- **AI-powered debugging:** Investigates errors using stack traces and relevant source code.
- **Root-cause analysis:** Explains likely reasons behind software failures.
- **Structured reports:** Presents debugging findings in organized sections.
- **Three built-in sample cases:** Quickly demonstrate the application without preparing custom inputs.
- **Interactive UI:** A dark developer-focused interface with lime-green accents.
- **Fast experimentation:** Try different errors and investigate them without setting up separate debugging scenarios.

## 🛠️ Tech Stack

| Component | Technology |
|---|---|
| Frontend | React, Vite, CSS |
| Backend | Python, FastAPI, Uvicorn |
| AI integration | Google GenAI SDK, Gemma |
| Deployment | Render and Vercel |

## 🧪 Three Built-in Sample Cases

The three built-in cards make it easy for hackathon judges and first-time users to explore the application immediately.

1. **Null Profile Field** — Demonstrates an `AttributeError` caused by calling `.strip()` on a `None` value.
2. **Index Out of Bounds** — Demonstrates an `IndexError` when accessing an element from an empty list.
3. **Unhandled API Failure** — Demonstrates a `KeyError` when code assumes an API response contains a `user` field.

Selecting a card automatically loads its example stack trace and source code, making the debugging workflow quick and accessible.

## 💡 Problem Solved

Debugging can be time-consuming, especially for beginners who struggle to interpret stack traces or connect an exception to the relevant source code.

BugDNA addresses this problem by bringing error context and AI-assisted investigation into one interface. It helps developers understand what may have gone wrong, why it happened, and what they should investigate next.

The goal is to make debugging more approachable, reduce repetitive manual analysis, and help developers learn from their errors.

## 🧠 Experience with Gemma

Integrating Gemma into BugDNA was an opportunity to explore how generative AI can assist with a practical software engineering task.

The application sends the stack trace and relevant source code to the backend, which uses the Google GenAI SDK to request an AI-generated investigation report. The response is then displayed in a structured format.

This approach demonstrates how an open model family such as Gemma can be incorporated into a developer tool to provide contextual explanations rather than merely displaying an error message.

## 💚 Gemma Recommendations and Insights

Gemma powers the investigation workflow by helping developers:

- Interpret exceptions in the context of the supplied source code.
- Identify likely root causes.
- Understand the relationship between the failure and the code.
- Explore potential fixes and debugging steps.

The generated recommendations should be treated as **AI-assisted suggestions**, not guaranteed diagnoses. Developers should verify suggested changes by testing the code and reviewing the surrounding application logic.

## 🧩 Hardest Issue

One of the most challenging parts of building BugDNA was getting the complete workflow working reliably across the frontend, backend, and AI service.

The project required coordinating:
- React input handling and investigation state.
- FastAPI request processing and response handling.
- Google GenAI SDK integration and model responses.
- Network connectivity and API configuration.
- Deployment configuration so the frontend can communicate with the backend.

Solving these integration challenges highlighted the importance of testing each layer independently before testing the entire application.

## 😊 How I Felt While Building It

Building BugDNA was an exciting and practical learning experience. It was satisfying to turn an idea into an interactive tool that connects a real developer problem with AI-assisted analysis.

The process also involved debugging the debugger itself: handling connectivity issues, configuring the backend, refining the interface, and making sure sample investigations worked end to end.

The experience reinforced that building a useful AI application involves more than prompting a model. It also requires reliable software engineering, thoughtful UX, and careful integration.

## 🎯 Project Use Cases

BugDNA can be useful for:

- **Students and beginners:** Learning to interpret stack traces and understand common programming errors.
- **Hackathon participants:** Quickly investigating errors encountered while building prototypes.
- **Developers:** Getting an initial explanation of exceptions and potential causes.
- **Code reviews and learning:** Exploring why a particular code path may fail.
- **Educational demonstrations:** Showing how AI can support debugging workflows.

BugDNA is an investigation assistant, not a replacement for a debugger, automated test suite, or experienced code review.

## ⚙️ Constraints and Limitations

- AI-generated explanations may be incorrect or incomplete.
- The quality of the investigation depends on the accuracy and relevance of the supplied stack trace and source code.
- The application currently focuses on user-provided error context rather than automatically inspecting a complete repository or running the program.
- The AI service requires valid API credentials and network connectivity.
- Free hosting services may experience cold starts, causing initial requests to take longer.
- Sensitive code, secrets, and personal data should not be submitted unless sharing them is authorized.

## 🔮 Future Improvements

Potential improvements include:

1. **Repository integration:** Allow users to connect a GitHub repository and investigate relevant files.
2. **More programming languages:** Improve support for Java, JavaScript, TypeScript, C++, and other languages.
3. **Fix generation:** Offer suggested patches or corrected code with clear explanations.
4. **Automated validation:** Run tests in a secure sandbox to check whether a proposed fix works.
5. **Conversation-based debugging:** Let users ask follow-up questions about an investigation.
6. **Investigation history:** Save and revisit previous reports.
7. **Improved model evaluation:** Test recommendations against known bugs and measure their accuracy.
8. **Better production reliability:** Add request timeouts, clearer error handling, monitoring, and usage limits.
9. **Expanded examples:** Add more built-in cases covering common errors across different languages and frameworks.

## 🖥️ Run Locally

### Prerequisites

- Node.js and npm
- Python 3
- A Google Gemini API key with access to the configured model

### 1. Clone the repository

```bash
git clone https://github.com/Aranya0811/bugdna.git
cd bugdna
```

### 2. Set up the backend

```bash
python -m venv .venv
source .venv/bin/activate
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

### 3. Set up the frontend

Open another terminal:

```bash
cd frontend
npm install
npm run dev
```

Open the local URL displayed by Vite, usually `http://localhost:5173`.

For production, configure the frontend to use the deployed backend URL instead of the local API address.

## 🔐 Security

- Keep API keys in environment variables.
- Never commit `.env` files or expose API keys in frontend code.
- Avoid sending sensitive source code or credentials to external AI services.
- Validate AI-generated fixes before applying them.

## 👨‍💻 Author

**Aranya Kumar**

GitHub: [@Aranya0811](https://github.com/Aranya0811)

---

*Built with Gemma to make debugging more understandable, accessible, and efficient.*
