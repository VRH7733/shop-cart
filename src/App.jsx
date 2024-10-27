
import { Route, Routes, useNavigate, useRoutes } from 'react-router-dom'
import './App.css'
import CommentsList from './pages/comments'
import ReceipeList from './pages/recipes'
import ReceipeDetailsPage from './pages/recipe-details'
import NotFoundPage from './pages/not-found'
import Layout from './Componets/layout'
import ReactHookFormExamplePage from './pages/react-hook-form-examples'
import Hooks from './pages/hooks'
import ReactQueryDemo from './pages/react-query'

function CustomRoutes() {
  const element = useRoutes([
    {
      path: '/home', element: <Layout />,
      children: [
        {
          path: 'recipe-list', element: <ReceipeList />,
        }, {
          path: 'comments-list', element: <CommentsList />,
        }, {
          path: 'recipe-list/:id', element: <ReceipeDetailsPage />

        }
      ]
    },
    {
      path: '*', element: <NotFoundPage />
    }, {
      path: '/react-hook-form',
      element: <ReactHookFormExamplePage />,
    }, {
      path: '/hooks',
      element: <Hooks />
    },
    {
      path: '/react-query-demo',
      element: <ReactQueryDemo />
    }
  ])
  return element
}

function App() {

  const navigate = useNavigate()

  return (
    <div>
      {/* <h1>React routing. Custom hooks and more</h1>
      <button onClick={() => navigate("/home/recipe-list")} style={{ background: 'black', color: 'white' }}>navigate to recipe</button>
      <button onClick={() => navigate("/home/comments-list")} style={{ background: 'black', color: 'yellow' }}>nanvigate to comments</button>
     */}
      {/* <Routes>
        <Route path="/home" element={<Layout />}>
          <Route path="recipe-list" element={<ReceipeList />} />
          <Route path="comments-list" element={<CommentsList />} />
          <Route path='recipe-list/:id' element={<ReceipeDetailsPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes> */}
      <CustomRoutes />
    </div>
  )
}

export default App
