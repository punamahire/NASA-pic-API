let apiNASAPics = [];

export const usePics = () => {
    return [...apiNASAPics]
  }

export const getPicture = () => {
    return fetch("https://api.nasa.gov/planetary/apod?api_key=YJ46vK8jmnNwtLr2nNK6sN63pnV6pMANZEhME080", {
      headers: {
        accept: "application/json"
      }
    })
      .then((response) => response.json())
      .then((picArray) => {
        apiNASAPics = picArray;
        return picArray;
      })
  };