export const signUp = user => (
    fetch("https://express-react-7vpw.onrender.com/user", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json"
      }
    })
  );
  export const logIn = user => (
    fetch("https://express-react-7vpw.onrender.com/session", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json"
      }
    })
  );
  export const logOut = () => (
    fetch("https://express-react-7vpw.onrender.com/session", { method: "DELETE" })
  );