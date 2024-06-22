import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import TermsOfService from './pages/TermsOfService'
import PrivacyPolicy from './pages/PrivacyPolicy'
import {createBrowserRouter, RouterProvider, Route} from "react-router-dom"
const router = createBrowserRouter([
    {
    path: "/",
    element: <App/>
    },
    {
    path: "/terms-of-service",
    element: <TermsOfService/>
    },
    {
    path: "/privacy-policy",
    element: <PrivacyPolicy/>
    }
])
ReactDOM.render(<RouterProvider router={router}/>, document.querySelector("#root"))
