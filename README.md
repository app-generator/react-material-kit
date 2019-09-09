[Material Kit - Coded in React](https://appseed.us/apps/react/express/material-kit-creative-tim)
====
Design by Creative-Tim.com. Coded by AppSeed.us - [LIVE Demo](https://react-express-material-kit.appseed.us/) 


![Material Kit - Coded in React and Express](https://github.com/app-generator/static/blob/master/products/react-express-material-design-intro.gif?raw=true)

## Requirements
- [Node.js](https://nodejs.org/) >= 6.x

## Setting up for development
* clone the project: `git clone https://github.com/app-generator/react-material-kit.git`
* change directory to `react-material-kit`
* (Optionally) start the [Express](https://github.com/app-generator/express-starter/blob/master/README.md) backend server (default ip/port: `locahost:3000`)
* Default backend URL `http://127.0.0.1:3000`. This can be overwritten by updating the file: `src/views/LoginPage/LoginPage.jsx`

## Scripts
**Install Dependencies**
```bash
$ yarn 
```

**Start app for development**
* **Linux/MacOs**: 
```yarn start```
* **Windows OS**: update the PORT, NODE_PATH in your environment, and after execute `start_win` target
```powershell
$env:PORT = "8080"
$env:NODE_PATH = "./src"
npm run start_win
```
* Visit [localhost:8080](http://localhost:8080) in your browser. The `default port 8080` can be overwritten by updating the `package.json`, `scripts \ start` attribute.

**Production Build**
* **Linux/MacOs**: 
`yarn build` - build the app in `build` directory
* **Windows OS**: 
`yarn build_win` - build the app in `build` directory

## Support
Live support on [Discord](https://discord.gg/fZC6hup) and [Facebook](https://www.facebook.com/groups/fullstack.apps.generator). 

## License
MIT 

---
Made with ♥ by [AppSeed.us]("https://appseed.us")
