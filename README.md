# Reward Points App

A modern React + Vite App that calculates customer reward points from transactions over the last 3/6/12 months.

## Features

- React 19 + Vite
- Axios with global interceptors
- TailwindCSS for modern UI
- Month range dropdown (3 / 6 / 12 months)
- Rewards calculated dynamically
- React Router (Home, 404)
- Unit tests with Vitest + React Testing Library
- SRP & DRY architecture principles

## Folder Structure

- api
- components
- containers
- pages
- utils
- tests

## Reward Rules

- +1 point for every $1 between $50–$100
- +2 points for every $1 over $100  
  Example:  
  $120 → (50 × 1) + (20 × 2) = **90 points**

## Run Locally

npm install
npm run dev
Run Tests
npm run test

## Technologies

React 19
Vite
TailwindCSS
Axios
React Router DOM
Vitest
React Testing Library
