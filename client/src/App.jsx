import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TodosNew from "./routes/TodosNew";

// no longer rely on react
const TodosLoader = async () => {
  const res = await fetch("/api/todos/");
  const data = await res.json();
  return data;
};

//New Method 1
const router = createBrowserRouter([
  { path: "/", loader: TodosLoader, element: <TodosNew /> },
]);

//New Method 2
const router2 = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" loader={TodosLoader} element={<TodosNew />} />
  )
);

function App() {
  return (
    <RouterProvider router={router} />
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Todos />} />
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
