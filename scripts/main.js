import { getPicture, usePics } from "./dataManager.js";

const getAPicture = () => {
  getPicture().then((picFromAPI) => {
    const htmlElement = document.querySelector("#nasaImage");
    if (Array.isArray(picFromAPI)) {
        let HTMLArray = []
        HTMLArray += picFromAPI.map(onePic => {
            return `<article class="image-and-info">
                    <img class="astronomy-image" src="${onePic.url}" alt="A picture from NASA">
                    <div class="pic-info">
                        <h3>Picture Information:</h3>
                        <p>Date: ${onePic.date}</p>
                        <p class="image-desp">Explanation: ${onePic.explanation}</p>
                        <p>Media Type: ${onePic.media_type}</p>
                        <p>Service Version: ${onePic.service_version}</p>
                        <p>Title: ${onePic.title}</p>
                        <p>Url: <a href="${onePic.url}">${onePic.title}</a></p>
                    </div>
                    </article>
                    `
                    ;
            
        })
        htmlElement.innerHTML = HTMLArray;
    } else {
        let HTMLObj = `
                    <article class="image-and-info">
                    <img class="astronomy-image" src="${picFromAPI.url}" alt="A picture from NASA">
                    <div class="pic-info">
                        <h3>Picture Information:</h3>
                        <p>Date: ${picFromAPI.date}</p>
                        <p class="image-desp">Explanation: ${picFromAPI.explanation}</p>
                        <p>Media Type: ${picFromAPI.media_type}</p>
                        <p>Service Version: ${picFromAPI.service_version}</p>
                        <p>Title: ${picFromAPI.title}</p>
                        <p>Url: <a href="${picFromAPI.url}">${picFromAPI.title}</a></p>
                    </div>
                    </article>
                    `
                    ;
        htmlElement.innerHTML = HTMLObj;
    }
  
  });

};

//document.querySelector("#imageButton").addEventListener("click", getAPicture);

getAPicture();