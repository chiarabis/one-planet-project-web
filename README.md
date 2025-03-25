# One Planet Project
A webapp, with a sci-fi/futuristic design, to monitor vital signs of our planet and educate and raise awareness among the users about global warming and climate change.

![Screenshot (51)](https://github.com/chiarabis/one-planet-project-web/assets/124071052/6020e4a0-2c0e-4966-9cbb-13ffc7b83a90)
![Screenshot (53)](https://github.com/chiarabis/one-planet-project-web/assets/124071052/088aaf83-0f8d-443d-b9fa-c2438e5cbe19)

![2](https://github.com/chiarabis/one-planet-project-web/assets/124071052/0f5ad4eb-eadd-4c3c-8a69-a05e9c4c0f0c)
![1](https://github.com/chiarabis/one-planet-project-web/assets/124071052/6baeeba4-d26d-41cc-aceb-f33cbe2b0331)

---

### 📑 Sources
I have used different public APIs to access data. Most of them don't require key or authentication. 
This is the open-source API list: 
- [Global Warming API](https://global-warming.org/)
- [World Bank Data](https://data.worldbank.org/)
- [Air Quality Programmatic API](https://aqicn.org/api/)

Images are from Pixabay. All the informations on blog section are from _[NASA > Climate Change section](https://science.nasa.gov/climate-change/)_, articles from _[Our World in Data](https://ourworldindata.org/)_, _[Effects of climate change on WWF website](https://www.worldwildlife.org/threats/effects-of-climate-change)_ and _[Copernicus > Climate Change Service](https://climate.copernicus.eu/)_.

---

### 🛠️ Libraries and tools
This is the base of the project:
- [x] React
- [x] Vite
- [x] Tailwind CSS

Other libraries:
- Arwes: a sci-fi/futuristic UI libraries
- MUI: a wonderful library of React components
- Chart.js: for costumizable Javascript charts
- FontAwesome: a huge icons library
- Framer Motion: a simple motion library for React
- Axios: for fetching data from APIs

> [!WARNING]
> _Arwes_ does not work with React Strict Mode nor React Server Components (RSC). So I've abilited ```React.StrictMode``` only during development:
> ```
> if (process.env.NODE_ENV === 'development') {
>    ReactDOM.createRoot(document.getElementById('root')).render(
>      <React.StrictMode>
>        <App/>
>      </React.StrictMode>
>    )
> } else {
>    ReactDOM.createRoot(document.getElementById('root')).render(
>      <App/>
>    )
> }
> ```

> [!IMPORTANT]
> _Arwes_ is under development and still in alpha release, so the components are being tested and their API may change as it gets completed.
> 
---

### 🌐 Link to project
[One planet project](https://one-planet-project-web.vercel.app/) - _Powered by Vercel_ ▲
