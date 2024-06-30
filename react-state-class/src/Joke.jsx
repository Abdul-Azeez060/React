import { useEffect, useState } from "react";

export default function Joke() {
  const URL = "https://official-joke-api.appspot.com/random_joke";

  let [joke, getNewJoke] = useState({});

  async function getJoke() {
    let response = await fetch(URL);
    response = await response.json();
    getNewJoke({ setUp: response.setup, punch: response.punchline });
  }
  useEffect(() => {
    async function newJoke() {
      let response = await fetch(URL);
      response = await response.json();
      getNewJoke({ setUp: response.setup, punch: response.punchline });
    }
    newJoke();
  }, []);

  return (
    <>
      <h3>{joke.setUp}</h3>
      <h3>{joke.punch}</h3>
      <h2>Joke!</h2>
      <button onClick={getJoke}>Get Joke</button>
    </>
  );
}
