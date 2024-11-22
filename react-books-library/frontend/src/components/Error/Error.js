import { useEffect } from "react"
import { ToastContainer, toast } from "react-toastify"
import { useSelector, useDispatch } from "react-redux"
import "react-toastify/dist/ReactToastify.css"
import { clearError, selectErrorMessage } from "../../redux/slices/errorSlice"

const Error = () => {
  const errorMessage = useSelector(selectErrorMessage)
  const dispatch = useDispatch()

  useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage)
      dispatch(clearError())
    }
  }, [errorMessage, dispatch])

  return (
    <ToastContainer
    position="top-right"
    autoClose={3000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="dark"
    />
  )
}

export default Error
