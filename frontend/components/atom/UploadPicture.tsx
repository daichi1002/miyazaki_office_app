import Button from '@material-ui/core/Button'
import AddAPhotoOutlinedIcon from '@material-ui/icons/AddAPhotoOutlined'
import { makeStyles } from '@material-ui/core'

export const UploadPicture = () => {
  const useStyle = makeStyles((theme) => ({
    input: {
      display: 'none',
    },
  }))
  const classes = useStyle()

  return (
    <Button component="label">
      <input type="file" className={classes.input} id="contained-button-file" multiple />
      <label htmlFor="contained-button-file">
        <Button variant="contained" color="primary" component="span">
          <AddAPhotoOutlinedIcon style={{ padding: 3 }} />
          Upload
        </Button>
      </label>
    </Button>
  )
}

export default UploadPicture
