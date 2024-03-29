import type { Metadata } from 'next'
import { Raleway } from 'next/font/google'
import GlobalStyle from './globals'
import StyledComponentsRegistry from './lib/registry'

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Event log',
  description: 'app created for events',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt">
      <body className={raleway.className}>
        <StyledComponentsRegistry>
          {children}
          <GlobalStyle />
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
