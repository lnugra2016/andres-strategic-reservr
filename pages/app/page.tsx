import { BitcoinPortfolioTracker } from '../../components/BitcoinPortfolioTracker'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4">
      <BitcoinPortfolioTracker readOnly={false} />
    </main>
  )
}

