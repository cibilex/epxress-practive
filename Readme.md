1. `express.Router({ mergeParams: true })` :  `app.use("/users/:user", user);` normalde alt routelar :user parametresini göremez.Görebilmesi için mergeParams true demelisin.
2. static files: `app.use('/static', express.static(path.join(__dirname, 'public')))`
3. __dirname
   - ```js
        import { fileURLToPath } from "url";
        import path from "path";
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = path.dirname(__filename); 
      ```
