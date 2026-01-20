import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Прорыв в Бизнесе - Диагностика Блоков',
  description: 'Интерактивный инструмент для выявления и решения проблем с запуском бизнеса',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  )
}
