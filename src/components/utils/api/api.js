const API_KEY = "AIzaSyDX7ygdCtYqdN4nq9lCogeVXy1qTqvCkOE";

export const signup = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=${API_KEY}`;
export const login = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${API_KEY}`;
export const refresh = `https://securetoken.googleapis.com/v1/token?key=${API_KEY}`;