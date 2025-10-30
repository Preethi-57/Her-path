# "Her-Path" - Women Empowerment Platform

## About
Her-Path provides verified safety resources, government welfare schemes, and job opportunities for women.

## Run locally (no external Mongo required)
1. Backend:
   - cd backend
   - npm install
   - npm run dev
   The backend will use an in-memory MongoDB server automatically (for development).
2. Frontend:
   - cd frontend
   - npm install
   - npm start
3. Open http://localhost:3000

## IMPORTANT
- The backend uses a default JWT secret 'herpath_dev_secret' if JWT_SECRET is not set.
- For production, provide MONGO_URI and JWT_SECRET in a .env file placed inside backend/.
