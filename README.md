# LIGMAI

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

## Description

This React application uses OpenAI's ChatGPT to provide assistance during AI-driven interviews, helping users respond effectively to questions.
This project is basically just a wrapper around OpenAI's ChatGPT API - lazy, just like AI interviews.

## FAQ

### Why do I need to provide an API key?

OpenAI's ChatGPT API is a paid service, and you need to provide an API key to use it. You can get an API key by signing up on OpenAI's website. App only stores the API key in the browser's local storage. It doesn't even have a backend to store it in.

### Where can I find the API key?

At [platform.openai.com/api-keys](https://platform.openai.com/api-keys) You need to create an account and get the key. You will also
probably need to add a payment method. Or search for forgotten API keys in github repositories LOL (just kidding).

## Running locally

To run the application locally, you will need to have Node.js installed.
Clone the repository and run the following commands:

```bash
npm install
npm run dev
```
