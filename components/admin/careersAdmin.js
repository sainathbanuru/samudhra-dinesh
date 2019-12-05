import React from "react";
import styled from "styled-components";

import Text from "../common/Text";
import { firestore, storage } from "../firebase";

const Container = styled.div`
  background-color: #fff;
  padding: 16px;
`;

const Button = styled.div`
  display: flex;
  border: 2px solid #00c48a;
  border-radius: 6px;
  width: 150px;
  height: 48px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-bottom: 16px;
  margin-top: 16px;
`;

const Buttontext = styled.div`
  font-family: Sans-Narrow-Bold;
  font-size: 16px;
  color: #00c48a;
`;

export default class CareersAdmin extends React.Component {
  state = {
    email: "",
    error: ""
  };

  componentDidMount() {
    firestore
      .collection("careers")
      .doc("careersEmail")
      .get()
      .then(email => {
        email.data();
        this.setState({
          ...email.data()
        });
      });
  }

  updateState = event => {
    this.setState({
      [event.target.name]: event.target.value,
      error: ""
    });
  };

  onSubmitClick = async event => {
    event.preventDefault();
    const { email, id } = this.state;

    if (email.length > 0) {
      firestore
        .collection("careers")
        .doc("careersEmail")
        .update({
          email
        });
    } else {
      this.setState({
        error: "fileds cannot be empty"
      });
    }
    // this.setState({
    //   title: "",
    //   description: "",
    //   imageUrl: ""
    // });

    this.setState({
      email: ""
    });
  };

  render() {
    return (
      <>
        {this.state.error.length > 0 && (
          <p style={{ color: "red" }}>{`* ${this.state.error}`}</p>
        )}

        <div style={{ margin: "16px auto" }}>
          <label>Email:</label>
          <br />
          <input
            type="text"
            name="email"
            style={{
              width: "80%",
              padding: 16,
              marginTop: 8,
              border: "1px solid #000"
            }}
            value={this.state.email}
            onChange={this.updateState}
          />
        </div>

        <Button onClick={this.onSubmitClick}>
          <Buttontext>Submit</Buttontext>
        </Button>
      </>
    );
  }
}
