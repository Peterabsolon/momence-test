export type AlertLevel = 'info' | 'warning' | 'success' | 'error'

export interface AlertProps {
  level?: AlertLevel
  message: string
}

export const Alert = ({ level = 'info', message }: AlertProps) => {
  console.log({ level })

  return <div>{message}</div>
}
