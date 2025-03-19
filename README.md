
# Swift Cart
An E-commerce Website built with the MERN stack.

## Tech Stack
- **MongoDB** - NoSQL Database for storing product, user, and order data.
- **Express.js** - Web framework for building the backend.
- **React.js** - Frontend library for creating dynamic user interfaces.
- **Node.js** - JavaScript runtime for server-side development.

## Tools Used
- **Redux** - State management for efficient data handling.
- **Axios** - HTTP client for API requests.
- **Mongoose** - MongoDB ODM for object modeling.
- **Cloudinary** - Media storage for product images.
- **Postman** - API testing and development tool.
- **Stripe** - Payment gateway integration.
- **JWT (JSON Web Token)** - Authentication and security.
- **Bcrypt.js** - Data encryption for user passwords.
- **Multer** - File upload handling for product images.
- **Dotenv** - Environment variable management.

## Instructions
After cloning, run this command in the root folder:
```bash
npm install
```

Navigate to the "frontend" folder, run these commands:
```bash
npm install
npm run build
```

Wait for the application build. After that, open the `backend/config/config.env` and update the MongoDB connection string, updating config env placeholders:
```bash

DB_LOCAL_URI=mongodb://localhost:27017/Ur_folder
```

Navigate back to the "root" folder and run this command for loading demo data:
```bash
npm run seeder
```

Run this below command to run the app in production mode:
```bash
npm run prod
```
## Postman Collection
[Postman Collection](https://web.postman.co/workspace/My-Workspace~1b472528-29ec-4a2a-8723-543ffc832d9b/collection/40792383-e0630981-7f5d-4cbd-9de0-c84fbc0f5ad9?action=share&source=copy-link&creator=40792383&active-environment=f3ccb8a6-d5df-425f-99e1-64758050a612)
To test the API's

## Test
Open [http://localhost:8000](http://localhost:8000) and test the application.

## File Structure
```
+frontend
    +src
    | | index.js
    | | store.js
    | | App.js
    | +components
    | | | Home.js
    | | |+product
    | | | | ProductReview.js
    | | | | Product.js
    | | | | ProductDetail.js
    | | | | ProductSearch.js
    | | |+order
    | | | | UserOrders.js
    | | | | OrderDetail.js
    | | |+route
    | | | | ProtectedRoute.js
    | | |+cart
    | | | | OrderSuccess.js
    | | | | CheckoutStep.js
    | | | | ConfirmOrder.js
    | | | | Cart.js
    | | | | Payment.js
    | | | | Shipping.js
    | | |+admin
    | | | | Sidebar.js
    | | | | UserList.js
    | | | | ProductList.js
    | | | | OrderList.js
    | | | | UpdateUser.js
    | | | | ReviewList.js
    | | | | Dashboard.js
    | | | | UpdateOrder.js
    | | | | NewProduct.js
    | | | | UpdateProduct.js
    | | |+user
    | | | | Profile.js
    | | | | ForgotPassword.js
    | | | | UpdatePassword.js
    | | | | ResetPassword.js
    | | | | Login.js
    | | | | UpdateProfile.js
    | | | | Register.js
    | | |+layouts
    | | |  Loader.js
    | | |  MetaData.js
    | | |  Footer.js
    | | |  Search.js
    | | |  Header.js
    |+slices
    | | | productsSlice.js
    | | | cartSlice.js
    | | | userSlice.js
    | | | orderSlice.js
    | | | authSlice.js
    | | | productSlice.js
    |+actions
    | |  cartActions.js
    | |  orderActions.js
    | |  productActions.js
    | |  userActions.js
    +public
    |  robots.txt
    |  manifest.json
    |  index.html
    |  favicon.ico
    +images
+backend
    |  server.js
    |  app.js
    |+routes
    | | payment.js
    | | order.js
    | | product.js
    | | auth.js
    |+models
    | | userModel.js
    | | orderModel.js
    | | productModel.js
    |+uploads
    |+user
    | | user
    | | _c49fab8e-0ccf-4724-a31a-977181660259
    | | Apple-PNG-Images
    | | alexander-hipp-iEEBWgY_6lA-unsplash
    |+product
    |  realme_6
    |  pexels-math-90946
    |  pexels-pixabay-279906
    |+controllers
    | | paymentController.js
    | | orderController.js
    | | productController.js
    | | authController.js
    |+config
    | | database.js
    | | config.env
    |+middlewares
    | | catchAsyncError.js
    | | authenticate.js
    | | error.js
    |+data
    | | products.json
    |+utils
    | | errorHandler.js
    | | jwt.js
    | | seeder.js
    | | email.js
    | | apiFeatures.js
    |.
```
