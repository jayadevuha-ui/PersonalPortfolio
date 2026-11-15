# Satyavamsi Portfolio

Personal portfolio of **Kurasala Jayadeva Satyavamsi**, focused on data science, machine learning, and practical AI projects.

**Website:** https://vamsi.tech

## About the website

A responsive, multi-page portfolio built with HTML, CSS, and JavaScript. The site includes:

- **Home** — introduction and interactive profile card
- **Skills** — technical skills and tools
- **Projects** — selected machine learning and data science work

## Featured projects

- **[Credit Default Risk Intelligence](https://github.com/jayadevuha-ui/credit-default-risk-intelligence)** — Credit risk classification, model comparison, threshold tuning, explainability, and fairness checks. [Live demo](https://credit-default-risk-intelligence-69rgyefwwpr9jcnefo2ism.streamlit.app). Reported test ROC-AUC: **0.7800**; test PR-AUC: **0.5525**.
- **[Retail Sales Forecasting Intelligence](https://github.com/jayadevuha-ui/retail-sales-forecasting-intelligence)** — Retail analytics and time-series forecasting with lag features and baseline comparisons. [Live demo](https://retail-sales-forecasting-intelligence-3gt7qsyapxmpho4w7rquft.streamlit.app).
- **[Credit Card Approval Prediction](https://github.com/jayadevuha-ui/credit-card-approval-prediction)** — Team 3 academic classification project with saved notebook outputs, dataset, and presentation.
- **[Garment Worker Productivity Prediction](https://github.com/jayadevuha-ui/Garment-worker-productivity-prediction)** — Team 3 academic regression project with saved notebook outputs, dataset, and presentation.

## Tech stack

- HTML5
- CSS3
- JavaScript (vanilla)
- GitHub Pages for static hosting

No framework or build step is required.

## Run locally

Clone the repository and serve the files locally:

```bash
git clone https://github.com/jayadevuha-ui/PersonalPortfolio.git
cd PersonalPortfolio
python -m http.server 8000
```

Then open `http://localhost:8000` in your browser. You can also open `index.html` directly, though a local server more closely matches how the site is hosted.

## Deployment and custom domain

This repository is published through **GitHub Pages** using the `main` branch and `/ (root)` directory.

- **Custom domain:** `vamsi.tech`
- **Domain configuration:** `CNAME` contains `vamsi.tech`
- **GitHub Pages settings:** [Repository Pages settings](https://github.com/jayadevuha-ui/PersonalPortfolio/settings/pages)

The domain's DNS is managed separately at the registrar. The website's DNS records point to GitHub Pages; Zoho Mail records are maintained independently for domain email.

Updates pushed to the published branch are deployed by GitHub Pages. HTTPS availability depends on GitHub's domain verification and certificate provisioning.
