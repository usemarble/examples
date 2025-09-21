import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanstackDevtools } from '@tanstack/react-devtools'

import appCss from '../styles.css?url'

function NotFound() {
  return (
    <div className="p-4 text-center">
      <h1 className="text-2xl font-bold mb-4">404 - Page Not Found</h1>
      <p>The page you're looking for doesn't exist.</p>
    </div>
  )
}

function ErrorComponent({ error }: { error: Error }) {
  return (
    <div className="p-4 text-center">
      <h1 className="text-2xl font-bold mb-4 text-red-600">Something went wrong!</h1>
      <p className="text-gray-600">{error.message}</p>
    </div>
  )
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'TanStack Start x Marble',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
    ],
  }),

  notFoundComponent: NotFound,
  errorComponent: ErrorComponent,
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <TanstackDevtools
          config={{
            position: 'bottom-left',
          }}
          plugins={[
            {
              name: 'Tanstack Router',
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
        <Scripts />
      </body>
    </html>
  )
}
