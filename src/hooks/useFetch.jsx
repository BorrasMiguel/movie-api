import { useEffect } from "react";

export default function useFecth(url, setState, limit) {

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYjEyNjRmZTRmYThmYWQzZWUwNDM0ZDEwZDUzZTA4NiIsInN1YiI6IjY0OGM4YWUxNDJiZjAxMDEwMWJkOWI0OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kIXkxkUAsHgLBujf4mHJeLkCCu9otU7ydSjjeDzsQPk'
        }
      };

    useEffect(() => {
        fetch(url, options)
          .then(response => {
            if (!response.ok) {
              throw Error(response.statusText);
            }
            return response.json();
          })
          .then(data => {
            setState(limit ? data.slice(0, limit) : data);
            console.log(setState);
          })
          .catch(error => {
            console.log(error);
          })
      }, [])
}
