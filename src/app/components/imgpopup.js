import Modal from 'react-modal';

const ImagePopup = ({ isOpen, onRequestClose, imageSrc }) => (
  <Modal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    contentLabel="Image Popup"
    style={{
      content: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
        background: 'rgba(0, 0, 0, 0.8)',
        border: 'none',
        borderRadius: '8px',
      },
      overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
      },
    }}
  >
    <div style={{ textAlign: 'center' }}>
      <img src={imageSrc} alt="Popup" style={{ maxWidth: '80%', maxHeight: '80%' }} />
    </div>
  </Modal>
);

export default ImagePopup;