import React from "react";
import styled from "styled-components";

import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw, ContentState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";

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

export default class CultureTripAdmin extends React.Component {
  state = {
    content: "",
    error: ""
  };

  componentDidMount() {
    firestore
      .collection("cultureTrip")
      .doc("cultureTrip")
      .get()
      .then(cultureTrip => {
        // console.log(cultureTrip.data());

        const cultureTripData = cultureTrip.data();
        const cultureTripContent = cultureTripData.content;
        const blocksFromHtml = htmlToDraft(cultureTripContent);
        const { contentBlocks, entityMap } = blocksFromHtml;
        const contentState = ContentState.createFromBlockArray(
          contentBlocks,
          entityMap
        );
        const content = EditorState.createWithContent(contentState);
        // console.log("content", content);
        this.setState({
          content
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
    const { content } = this.state;

    const contentData = draftToHtml(convertToRaw(content.getCurrentContent()));

    if (contentData.length > 0) {
      firestore
        .collection("cultureTrip")
        .doc("cultureTrip")
        .update({
          content: contentData
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
      content: EditorState.createEmpty()
    });
  };

  onEditorStateChange = editorState => {
    this.setState({
      content: editorState
    });
  };

  render() {
    const { content } = this.state;

    return (
      <>
        {this.state.error.length > 0 && (
          <p style={{ color: "red" }}>{`* ${this.state.error}`}</p>
        )}

        <h2 style={{ textDecorationLine: "underline" }}>Culture Trip</h2>

        <div className="demo-editor-wrapper">
          <Editor
            wrapperClassName="demo-wrapper"
            editorClassName="demo-editor"
            // toolbar={{
            //   colorPicker: { component: ColorPic }
            // }}
            editorStyle={{
              height: 200,
              border: "1px solid #eee",
              padding: 4
            }}
            onEditorStateChange={this.onEditorStateChange}
            editorState={content}
          />
        </div>

        <Button onClick={this.onSubmitClick}>
          <Buttontext>Submit</Buttontext>
        </Button>
      </>
    );
  }
}
