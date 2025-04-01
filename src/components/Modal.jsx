const Modal = ({ isOpen, onClose, stringMethod }) => {
  return (
    <div className="bg-secondary text-base-100 fixed inset-0 flex items-center justify-center z-50">
      <p>
        {stringMethod.title}
      </p>
      <p>
        {stringMethod.description}
      </p>
      <p>
        {stringMethod.example}
      </p>

      <button
        className="btn btn-primary mt-4"
        onClick={onClose}
      >
        Close
      </button>
    </div>

  )
}

export default Modal