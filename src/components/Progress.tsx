interface ProgressProps {
  value: number
  color: string
}

const Progress = ({ value, color }: ProgressProps) => {
  return (
    <div className='w-full rounded-full h-1.5'>
      <div className={`bg-${color} h-1.5 rounded-full`} style={{ width: `${value}%` }}></div>
    </div>
  )
}

export default Progress
