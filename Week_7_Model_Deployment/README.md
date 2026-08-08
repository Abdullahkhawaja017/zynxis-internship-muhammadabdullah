#  Week 7 — Sentinel AI
## Smart Email & SMS Threat Analyzer

Sentinel AI is a machine-learning-powered web application designed to analyze SMS messages and email-style text and classify them as **Spam** or **Legitimate**.

The project takes the machine learning model developed during Week 6 and transforms it into an interactive web application using Flask.

---

##  Week 7 Objective

The main objective of Week 7 is to learn how to take a trained Machine Learning model and make it usable through a web interface.

The deployment pipeline is:

User Input  
↓  
Flask Backend  
↓  
TF-IDF Vectorization  
↓  
Naive Bayes Model  
↓  
Prediction  
↓  
Web Interface

---

#  Day 0 — Environment Setup

### Completed Tasks

- Created Week 7 project structure
- Installed Flask
- Installed Joblib
- Prepared frontend and backend folders
- Created initial Flask application
- Successfully launched local Flask server
- Verified HTML, CSS and JavaScript integration

### Initial Technologies

- Python
- Flask
- HTML5
- CSS3
- JavaScript
- Joblib
- Scikit-learn



---

#  Model Preparation

### Objective

Prepare the trained Week 6 Spam Detection model for deployment.

### Completed Tasks

- Saved the trained Naive Bayes model
- Saved the TF-IDF vectorizer
- Loaded both saved files using Joblib
- Tested the saved model
- Verified spam predictions
- Verified legitimate message predictions
- Copied deployment-ready model files into Week 7

### Deployment Files

```text
model.pkl
tfidf.pkl

📅 Day 2 — Flask & AI Integration
Objective

Connect the trained Machine Learning model to the Flask backend.

Completed Tasks
Loaded model.pkl using Joblib
Loaded tfidf.pkl
Created Flask prediction route
Added HTML message input form
Connected frontend form to Flask
Converted user input using TF-IDF
Generated predictions using Naive Bayes
Tested spam messages
Tested legitimate messages
Tested longer email-style text
Current Architecture
User
 ↓
HTML Form
 ↓
Flask
 ↓
TF-IDF
 ↓
Naive Bayes
 ↓
Prediction
 ↓
Webpage
Status

🟢 Completed

📅 Day 3 — Professional User Interface
Objective

Transform the basic Flask interface into a modern, professional AI application.

### Completed Tasks 


Redesigned Sentinel AI interface
Added dark/black visual theme
Added blue accent colors
Added modern typography
Added animated background glow
Added glass-style analyzer panel
Added large message input area
Added character counter
Added responsive design
Added animated Analyze button
Added loading overlay
Added AI processing status messages
Added result card
Added mobile-friendly styling
Loading Experience

The application now displays processing stages such as:

Initializing AI engine...

Cleaning message text...

Extracting linguistic features...

Running machine learning model...

Calculating threat probability...

Finalizing analysis...
Status

🟢 Completed