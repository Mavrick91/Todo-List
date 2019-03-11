import React from 'react';
import { connect } from 'react-redux';
import { modalActions, modalSelectors } from 'modules/modal';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

const initialize = ({ modalKey }) => WrappedComponent => {
  class ModalProvider extends React.Component {
    componentDidMount() {
      const { registerModal } = this.props;

      registerModal(modalKey);
    }

    render() {
      const { open, toggleModal } = this.props;

      return (
        <Modal
          isOpen={open}
          onRequestClose={() => toggleModal(modalKey, false)}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <WrappedComponent />
        </Modal>
      );
    }
  }

  const mapStateToProps = state => ({
    open: modalSelectors.getStateModal(state, modalKey),
  });
  return connect(
    mapStateToProps,
    {
      registerModal: modalActions.registerModal,
      toggleModal: modalActions.toggleModal,
    },
  )(ModalProvider);
};

export default initialize;
