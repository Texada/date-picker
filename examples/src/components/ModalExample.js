import React, { Component } from "react";
import DateTimeField from "../../../src/DateTimeField";
import moment from "moment";
import Modal from "react-modal";

Modal.setAppElement("#root");

class ModalExample extends Component {
  state = { showModal: false };

  render() {
    return (
      <div>
        <button onClick={() => this.setState({ showModal: true })}>
          Open Modal
        </button>
        <Modal
          style={{
            overlay: {
              zIndex: 10
            },
            content: {
              zIndex: 2000,
              top: "50%",
              left: "50%",
              right: "auto",
              bottom: "auto",
              marginRight: "-50%",
              transform: "translate(-50%, -50%)",
              overflowY: "auto",
              height: 120,
              width: "40vw"
            }
          }}
          isOpen={this.state.showModal}
        >
          <div
            style={{
              width: "50%",
              float: "left",
              marginRight: 5
            }}
          >
            <DateTimeField mode="date" />
          </div>

          <DateTimeField mode="date" />
          <br />
          <button onClick={() => this.setState({ showModal: false })}>
            Close Modal
          </button>
          <br />
          <br />
          <br />
        </Modal>
      </div>
    );
  }
}

export default ModalExample;
