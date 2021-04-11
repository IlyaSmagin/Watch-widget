/* function fetchGoals1() {
  const url = "http://192.168.0.103:8000/api/todo/";
  const headers = {
    method: "GET", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "default", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
  };
  return fetch(url, headers).then((res) => {
    if (!res.ok) {
      //throw new Error("HTTP error, status = " + res.status);
      return placehoderGoals();
    }
    return res.json();
  });
}
const placehoderGoals = () => {
  return Promise.resolve({
    todoList: [
      {
        id: 1,
        title: "Enjoy yourself",
        description: "Personal",
        date: "2021-03-30T13:37:02.176127+03:00",
        done: false,
      },
      {
        id: 2,
        title: "Implement new features",
        description: "Work",
        date: "2021-03-30T13:37:10.101861+03:00",
        done: false,
      },
      {
        id: 4,
        title: "Stay awesome!",
        description: "Personal",
        date: "2021-03-30T14:16:42.144026+03:00",
        done: false,
      },
      {
        id: 5,
        title: "Stay hydrated",
        description: "Personal",
        date: "2021-03-30T14:40:02.798339+03:00",
        done: true,
      },
      {
        id: 6,
        title: "Put in the hours",
        description: "Work",
        date: "2021-03-30T15:15:03.737570+03:00",
        done: true,
      },
    ],
  });
}; */
function fetchGoals() {
  const url = "https://jsonplaceholder.typicode.com/todos/";
  let resPromice = fetch(url)
    .then((response) => response.json())
    .then((result) => {
      const newJSON = [
        {
          name: "Work",
          list: [...result.slice(0, 10)],
        },
        {
          name: "Personal",
          list: [...result.slice(10, 20)],
        },
      ];
      return newJSON;
    });

  return resPromice;
}

/*fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then((response) => response.json())
  .then((json) => console.log(json));
 */
export default fetchGoals; // Don’t forget to use export default!
