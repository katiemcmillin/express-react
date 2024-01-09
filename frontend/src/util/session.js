export const signUp = user => (
    fetch("http://localhost:4000/user", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json"
      }
    })
  );
  export const logIn = user => (
    fetch("http://localhost:4000/session", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json"
      }
    })
  );
  export const logOut = () => (
    fetch("http://localhost:4000/session", { method: "DELETE" })
  );