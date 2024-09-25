import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/Home.tsx'
import DataTable from './pages/DataTable.tsx';
import './index.css'

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/data-table",
		element: <DataTable />,
	}
]);


createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
)
