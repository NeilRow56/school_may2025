import { cn, formatCurrency } from '@/lib/utils'

interface MoneyWithCurrencyProps {
  amount: number
}

const MoneyWithCurrency = ({ amount }: MoneyWithCurrencyProps) => {
  return (
    <span
      className={cn({
        'text-destructive': amount < 0
      })}
    >
      {formatCurrency(amount)}
    </span>
  )
}

export default MoneyWithCurrency
