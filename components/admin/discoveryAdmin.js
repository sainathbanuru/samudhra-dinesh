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

export default class DiscoveryAdmin extends React.Component {
  state = {
    title: "",
    content: EditorState.createEmpty(),
    error: ""
  };

  componentDidMount() {
    firestore
      .collection("discovery")
      .doc("discoveryHome")
      .get()
      .then(discovery => {
        const discoveryData = discovery.data();
        const discoveryContent = discoveryData.content;
        const blocksFromHtml = htmlToDraft(discoveryContent);
        const { contentBlocks, entityMap } = blocksFromHtml;
        const contentState = ContentState.createFromBlockArray(
          contentBlocks,
          entityMap
        );
        const content = EditorState.createWithContent(contentState);
        // console.log("content", content);
        this.setState({
          ...discovery.data(),
          content
        });
        // console.log(discovery.data());

        // this.setState({
        //   ...discovery.data()
        // });
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
    const { title, content } = this.state;

    const contentData = draftToHtml(convertToRaw(content.getCurrentContent()));

    if (title.length > 0 && contentData.length > 0) {
      firestore
        .collection("discovery")
        .doc("discoveryHome")
        .update({
          title,
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
      title: "",
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

        <div style={{ margin: "16px auto" }}>
          <label>Title:</label>
          <br />
          <input
            type="text"
            name="title"
            style={{
              width: "80%",
              padding: 16,
              marginTop: 8,
              border: "1px solid #000"
            }}
            value={this.state.title}
            onChange={this.updateState}
          />
        </div>

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
