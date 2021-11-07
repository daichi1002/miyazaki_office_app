import { useCallback, memo } from 'react'
import Snackbar from '@material-ui/core/Snackbar'
import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'

interface AlertMessageProps {
  open: boolean
  setOpen: Function
  severity: 'error' | 'success' | 'info' | 'warning'
  message: string
}

// アラートメッセージ（何かアクションを行なった際の案内用に使い回す）
const AlertMessage = ({ open, setOpen, severity, message }: AlertMessageProps) => {
  const handleCloseAlertMessage = useCallback(
    (e?: React.SyntheticEvent, reason?: string) => {
      if (reason === 'clickaway') return
      setOpen(false)
    },
    [setOpen]
  )

  return (
    <>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        onClose={handleCloseAlertMessage}
      >
        <Alert onClose={handleCloseAlertMessage} severity={severity}>
          <AlertTitle>エラー</AlertTitle>
          {message}
        </Alert>
      </Snackbar>
    </>
  )
}

export default memo(AlertMessage)
