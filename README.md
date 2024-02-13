## Blog App

This is a single-page application built with Next.js and Tailwind CSS for displaying a blog with posts and users. It utilizes the public API from [GoRest](https://gorest.co.in/) to fetch data for blog posts and users.

### Features

- Display all posts on the home page (/).
![postlist](https://github.com/ziyad1412/blog_nextjs/assets/72376708/bbab5de1-d936-4f75-bd1f-fb509bf8c7ce)
- View detailed information about a post, including comments and author, on the post detail page (/post/:id).
![postdetail](https://github.com/ziyad1412/blog_nextjs/assets/72376708/7a6b5fc3-2068-499b-b297-7b35b001b08d)
- List all users with CRUD operations (Create, Read, Update, Delete) on the users page (/users).
![users](https://github.com/ziyad1412/blog_nextjs/assets/72376708/17e0f067-2908-42c4-937d-70c6938e6790)
- Pagination to navigate through large datasets.
- Responsive design for optimal viewing on various devices.

### Tech Stack

- Next.js
- Tailwind CSS
- DaisyUI

### Getting Started

Follow these steps to run the application locally:

1. Clone the repository:

   ```bash
   git clone https://github.com/ziyad1412/blog_nextjs.git
   ```

2. Navigate to the project directory:

   ```bash
   cd blog_nextjs
   ```

3. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

4. Run the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### Routes

- **Home Page:** [/](http://localhost:3000) - Displays all blog posts.
- **Post Detail Page:** [/post/:id](http://localhost:3000/post/:id) - Displays detailed information about a specific post, including comments and author.
- **Users Page:** [/users](http://localhost:3000/users) - Lists all users with CRUD operations.

### Deployment

The application is deployed using Vercel. You can access the deployed version [here](https://blog-nextjs-ziyad.vercel.app/).

### Additional Notes

- This project utilizes Tailwind CSS with DaisyUI for styling. You can find more information about DaisyUI [here](https://daisyui.com/).
- Ensure that the environment variables are properly set up for the API endpoint and authentication (if required) before running the application.

### Credits

- Blog data is fetched from [GoRest API](https://gorest.co.in/).
- Built with ❤️ by [Abdurrahman Ziyad](https://github.com/ziyad1412).
