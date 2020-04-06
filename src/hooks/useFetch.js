import 'React' from react;

const useFetch( url, options) => {

  consta fetchoptions = {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email: email,
      password: password
    }),
  };

  fetch("https://reqres.in/api/login", fetchoptions)
  .then(response => {
    response.json().then(parsedResponse => {
      console.log("parsedResponse: ", parsedResponse);
    });
  })
  .catch((error) => {
    console.error("error");
  });
};

useFetch.defaultProps = {
  options: {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  }
};
