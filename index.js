// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./link/src/App";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

const body = document.querySelector("body");
body.style.display = "flex";
body.style.flexDirection = "column";
body.style.justifyContent = "center";
body.style.alignItems = "center";

const startBtn = document.createElement("button");
startBtn.textContent =
  "deep link to History (https) c условием (если приложение есть- откроет, если нет- редирект на рустор)!!!!!!!!!!!!!!!!!!!";
startBtn.style.marginTop = "100px";
startBtn.style.marginBottom = "30px";
body.append(startBtn);

const firstBtn = document.createElement("button");
firstBtn.textContent =
  "deep link to History c условием (если приложение есть- откроет, если нет- редирект на рустор)!!!!!!!!!!!!!!!!!!!";
firstBtn.style.marginTop = "100px";
firstBtn.style.marginBottom = "30px";
body.append(firstBtn);

startBtn.addEventListener("click", () => {
  setTimeout(function () {
    window.location.replace("https://apps.rustore.ru/app/com.SmartApp");
  }, 25);
  window.location.replace("https://smartapp.ru/history");
});

firstBtn.addEventListener("click", () => {
  setTimeout(function () {
    window.location.replace("https://apps.rustore.ru/app/com.SmartApp");
  }, 25);
  window.location.replace("smartapp://history");
});
