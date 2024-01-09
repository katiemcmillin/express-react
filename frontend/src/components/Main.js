import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Index from "../pages/Index";
import Show from "../pages/Show";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn"
import SignOut from "../pages/SignOut"

const Main = ({ setUser }) => {
  const [people, setPeople] = useState(null);

  const URL = "https://express-react-7vpw.onrender.com/people";

  //fetches all people from our API backend
  const getPeople = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setPeople(data.data);
  };

  const createPeople = async (person) => {
    //make post request to create people
    await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(person),
    });
    // update our components list of people
    getPeople();
  };

  const updatePeople = async (person, id) => {
    // make post request to create people
    await fetch(URL + "/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(person),
    });
    // update list of people
    getPeople();
  };

  const deletePeople = async (id) => {
    // make post request to create people
    await fetch(URL + "/" + id, {
      method: "DELETE",
    });
    // update list of people
    getPeople();
  };

  useEffect(() => {
    getPeople();
  }, []);

  return (
    <main>
      <Routes>
        <Route
          path="/"
          element={<Index people={people} createPeople={createPeople} />}
        />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn setUser={setUser} />} />
        <Route path="/signout" element={<SignOut setUser={setUser} />} />
        <Route
          path="/people/:id"
          element={
            <Show
              people={people}
              updatePeople={updatePeople}
              deletePeople={deletePeople}
            />
          }
        />
      </Routes>
    </main>
  );
};

export default Main;
