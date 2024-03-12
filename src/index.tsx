import React from 'react';
import ReactDOM from 'react-dom/client';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './pages/Home';

// chatacter
import About from './pages/About';

import NotFound from './pages/NotFound';

import Theme from './components/Theme';

import Header from './components/Header';
import Footer from './components/Footer';

import GlobalStyle from './styles/global';
import Contact from './pages/Contact';
import CosplayDetail from './pages/Home/detail';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        errorElement: <NotFound />,
    },
    {
        path: '/cosplay/:slug',
        element: <CosplayDetail />,
        errorElement: <NotFound />,
    },
    {
        path: '/sobre',
        element: <About />,
        errorElement: <NotFound />,
    },
    {
        path: '/contato',
        element: <Contact />,
        errorElement: <NotFound />,
    },
]);

const App = () => {
    return (
        <Theme>
            <GlobalStyle />
            <Header />
            <RouterProvider router={router} />
            <Footer />
        </Theme>
    );
};

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
