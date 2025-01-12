# Swift cart

an E-commerce Website built with MERN stack.

## Instructions

after cloning, run this command in the root folder
```bash
npm install
```
navigate to "frontend" folder, run these commands 
```bash
npm install
npm run build
```
wait for application build
after that open the backend/config/config.env
and update the MongoDB connection string
```bash
...
DB_LOCAL_URI=mongodb://localhost:27017/Ur_folder
```

navigate back to "root" folder and run this command for loading demo data
```bash
npm run seeder
```

run this below command to run the app in production mode
```bash
npm run prod
```


## Test
open the http://localhost:8000 and test  

## Postman Collection
https://web.postman.co/workspace/My-Workspace~1b472528-29ec-4a2a-8723-543ffc832d9b/collection/40792383-e0630981-7f5d-4cbd-9de0-c84fbc0f5ad9?action=share&source=copy-link&creator=40792383&active-environment=f3ccb8a6-d5df-425f-99e1-64758050a612


## License

[MIT](https://choosealicense.com/licenses/mit/)