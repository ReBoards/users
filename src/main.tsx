import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { Themes } from './themes/themes.tsx'

const Root = () => {
  useEffect(() => {
    document.body.style.backgroundColor = Themes.palette.primary;
  }, []);

  return (
    <StrictMode>
      <App />
    </StrictMode>
  )
}

createRoot(document.getElementById('root') as HTMLElement).render(
  <Root />,
)
