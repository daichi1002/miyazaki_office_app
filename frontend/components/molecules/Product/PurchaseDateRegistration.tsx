import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import InputForm from '../../atom/InputForm'
import { useState, useContext } from 'react'
import InputDate from '../../atom/InputDate'
import { History } from '../../../types'
import { AuthContext } from '../../../pages/_app'
import UploadPicture from '../../atom/UploadPicture'

type Props = {
  setHistory: React.Dispatch<React.SetStateAction<History>>
}

const PurchaseDateRegistration = (props: Props) => {
  const [open, setOpen] = useState(false)
  const [title, setTitle] = useState('')
  const [purchaseAt, setPurchaseAt] = useState<String>('')
  const [userId, setUserId] = useState(1)
  const userInformation = useContext(AuthContext)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const submit = () => {
    setUserId(userInformation.currentUser.id)
    const newHistory: History = {
      userId: userId,
      title: title,
      purchaseAt: purchaseAt,
    }
    props.setHistory(newHistory)
    setOpen(false)
  }

  return (
    <div>
      <Button variant="outlined" color="primary" component="label" onClick={handleClickOpen}>
        初期登録
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>購入日・概要登録</DialogTitle>
        <DialogContent>
          <InputForm title="概要" onChange={setTitle} value={title} />
          <InputDate title="購入日" onChange={setPurchaseAt} value={purchaseAt} />
          {/* <UploadPicture /> */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>戻る</Button>
          <Button onClick={submit}>確定</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default PurchaseDateRegistration
