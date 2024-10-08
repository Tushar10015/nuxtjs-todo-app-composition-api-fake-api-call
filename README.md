# Nuxt 3 To-Do CRUD App

This project is a simple To-Do CRUD application built with **Nuxt 3**, **Composition API**, **Tailwind CSS**, and state management using `useState`. The application also integrates with the **JSONPlaceholder API** to handle CRUD operations like fetching, adding, updating, and deleting To-Do items.

## Features

- **Nuxt 3**: Utilizes the modern capabilities of Nuxt 3 for efficient server-side rendering and routing.
- **Composition API**: Manages state and lifecycle methods using the Vue 3 Composition API.
- **Tailwind CSS**: Provides utility-first CSS for styling and responsive design.
- **API Integration**: Uses `axios` to interact with the JSONPlaceholder API for fetching, creating, updating, and deleting To-Dos.
- **Routing**: Includes multiple pages (`Home`, `About Us`, and `Contact Us`) with automatic routing provided by Nuxt 3.

## Technologies

- [Nuxt 3](https://v3.nuxtjs.org/) - A framework built on Vue.js to create modern web applications.
- [Vue 3 Composition API](https://v3.vuejs.org/guide/composition-api-introduction.html) - A more flexible way of writing Vue components.
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework.
- [JSONPlaceholder](https://jsonplaceholder.typicode.com/) - A free fake online REST API used for testing and prototyping.
- [Axios](https://axios-http.com/) - A promise-based HTTP client for the browser and Node.js.

## Getting Started

### Prerequisites

Ensure you have the following installed on your machine:

- **Node.js**: >= 14.x
- **npm**: >= 7.x

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/nuxt3-todo-app.git
   ```

2. Change into the project directory:

   ```bash
   cd nuxt3-todo-app
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Run the development server:

   ```bash
   npm run dev
   ```

5. Open your browser and go to `http://localhost:3000`.

### Project Structure

```bash
├── components/           # Reusable components
├── composables/          # Reusable logic (e.g., useTodo.js for state management)
├── pages/                # Vue components mapped to routes
│   ├── index.vue         # Home page displaying the To-Dos
│   ├── aboutus.vue       # About Us page
│   └── contactus.vue     # Contact Us page
├── public/               # Static assets
├── assets/               # Project-specific styles (e.g., Tailwind CSS)
├── app.vue               # Main application entry point
└── README.md             # Project documentation
```

### State Management (`useTodo.js`)

State management is handled through a custom `useTodo.js` composable, which manages fetching, adding, updating, and deleting To-Dos. It leverages the Composition API to store and manipulate the list of To-Dos.

#### Key Functions:

- **fetchTodos()**: Fetches the list of To-Dos from the JSONPlaceholder API.
- **addTodo(title)**: Adds a new To-Do with the given title.
- **updateTodo(todo)**: Updates an existing To-Do, such as marking it complete or incomplete.
- **deleteTodo(id)**: Deletes a To-Do based on its ID.

### Routing

Nuxt automatically generates routes based on the `pages/` directory structure. The project includes:

- **Home (`/`)**: Displays the list of To-Dos with options to add, update, or delete.
- **About Us (`/aboutus`)**: A simple informational page about the organization.
- **Contact Us (`/contactus`)**: Displays contact information for reaching the organization.

### Tailwind CSS Integration

Tailwind CSS is used for styling the project. All styling is based on utility classes to provide a consistent and responsive design.

- Tailwind CSS configuration is found in `tailwind.config.js`.
- Styles are applied directly within the Vue components using Tailwind's utility-first approach.

### API Integration

All API interactions are done using **Axios** to communicate with the JSONPlaceholder API.

- Base URL: `https://jsonplaceholder.typicode.com/todos`
- The application interacts with this API to fetch a limited number of To-Dos (up to 10) and provides full CRUD (Create, Read, Update, Delete) functionality.

### Example API Calls

- **GET**: Fetch To-Dos: `https://jsonplaceholder.typicode.com/todos`
- **POST**: Create a new To-Do: `https://jsonplaceholder.typicode.com/todos`
- **PUT**: Update an existing To-Do: `https://jsonplaceholder.typicode.com/todos/:id`
- **DELETE**: Delete a To-Do: `https://jsonplaceholder.typicode.com/todos/:id`

### Customization

Feel free to modify the code to suit your needs. You can:

- Add more routes or features (e.g., authentication, pagination).
- Customize the UI further using Tailwind CSS or other libraries.
- Replace the JSONPlaceholder API with your own backend.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for review.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- **Nuxt.js** for providing a powerful framework for Vue-based applications.
- **JSONPlaceholder** for offering a free API for testing.
- **Tailwind CSS** for an amazing utility-first CSS framework.

---

Feel free to modify or expand on this README based on additional features or changes to your project!
