# Medflux – AI-Powered Symptom Analysis and Predictive Telemedicine Platform

[Live Demo 🔗](https://medflux-db14a.web.app/)

## 🩺 Overview

**Medflux** is an AI-powered mental wellness platform that bridges the gap between patients and digital healthcare solutions. It provides intelligent symptom analysis, predictive telemedicine support, and seamless consultation pathways—designed with a focus on mental wellness and regulatory data compliance.

This system integrates machine learning and generative AI to assist users in understanding their symptoms and offers guided suggestions for seeking professional help.

## ✨ Key Features

- **Symptom Analysis Module**: Users input symptoms and receive possible disease suggestions using an intelligent matching system.
- **AI Consultation Option**: If no disease is matched, the platform offers AI-generated preliminary advice to guide the user.
- **Doctor Directory**: Secure storage and retrieval of mental health professional details using Firebase Firestore.
- **User-Centric Design**: No role selection on login or sign-up; streamlined experience tailored for patients first.
- **Data Compliance**: Only doctor details are stored in Firestore; patient data is handled in compliance with safety protocols.

HealSmart offers a comprehensive healthcare solution by leveraging modern technologies and user-friendly design principles. The architecture is built around three main divisions:

1. **Symptom Analysis:** HealSmart diagnoses diseases based on symptoms using a Flask API connected to a trained ML model. The predicted disease is received as a response from the API, and then it guides users to the appropriate specialist doctor for further consultation. Additionally, there's an AI-driven chatbot, developed using the Gemini API, which offers preliminary suggestions based on the symptoms and disease.
2. **Mind-Bot:** To address mental health concerns(Lumi), I developed a chat application powered by the Gemini API from Google AI Studio. The Gemini 1.5 pro model is feeded with system instructions and given a perona and trained with some conversations to provide empathetic consultations. This chatbot provides support for mental health issues like loneliness and anxiety and also offers suggestions on how to handle them effectively.
3. **Consult Doctor:** HealSmart enables users to find and book appointments with doctors across various specialties. Data is fetched from Firebase Firestore, where dummy healthcare provider datas are maintained. Users can explore doctors' profiles, view their basic details and ratings, and check for their availability. This feature streamlines the process of finding and scheduling appointments, enhancing the overall healthcare experience for users.

## 🛠️ Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js , Firebase Functions
- **Database**: Firebase Firestore
- **AI/ML**: Generative AI models,Logistic Regression(for Symptom Analaysis)
- **Hosting**: Firebase Hosting

## 🧠 Inspiration & Use Case

Mental health support is often hindered by stigma or access issues. Medflux empowers users by offering:
- Anonymous symptom checks
- Automated insights using AI
- Connection with mental health professionals if needed
