import React from "react";
import styled from "styled-components";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw, ContentState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
import { BlockPicker } from "react-color";
import { firestore, storage } from "../firebase";
import ColorPic from "../common/ColorPic";

const Container = styled.div`
  background-color: "#fff";
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

export default class BlogAdmin extends React.Component {
  state = {
    role: "",
    title: "",
    description: "",
    color: "orange",
    blogs: [],
    categories: "",
    content: EditorState.createEmpty()
  };
  imageInput = null;

  unsubscribeFromFirestore = null;

  componentDidMount = () => {
    this.unsubscribeFromFirestore = firestore
      .collection("blogs")
      .onSnapshot(snapshot => {
        const blogs = snapshot.docs.map(doc => {
          return { id: doc.id, ...doc.data() };
        });
        this.setState({ blogs });
        // console.log(blogs);
      });

    // const blocksFromHtml = htmlToDraft("<p>converted</p>");
    // const { contentBlocks, entityMap } = blocksFromHtml;
    // const contentState = ContentState.createFromBlockArray(
    //   contentBlocks,
    //   entityMap
    // );
    // const content = EditorState.createWithContent(contentState);
    // console.log("converted", content);
    // this.setState({ content });
  };

  componentWillUnmount = () => {
    this.unsubscribeFromFirestore();
  };

  get file() {
    return this.imageInput && this.imageInput.files[0];
  }

  updateState = event => {
    // console.log(this.state);
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmitClick = event => {
    event.preventDefault();
    const { description, title, content, color, categories } = this.state;
    const enteredContent = draftToHtml(
      convertToRaw(content.getCurrentContent())
    );
    if (
      title.length > 0 &&
      enteredContent.length > 0 &&
      description.length > 0 &&
      categories.length > 0 &&
      this.file
    ) {
      storage
        .ref()
        .child("blogs")
        .child(this.file.name)
        .put(this.file)
        .then(response => response.ref.getDownloadURL())
        .then(photoUrl =>
          firestore.collection("blogs").add({
            title,
            description,
            photoUrl,
            content: enteredContent,
            color,
            categories,
            created_at: new Date()
          })
        );
    } else {
      this.setState({
        error: "fields cannot be empty"
      });
    }
    this.setState({
      title: "",
      description: "",
      content: EditorState.createEmpty(),
      color: "orange",
      categories: ""
    });
    this.file.value = null;
  };

  deleteBlog = id => {
    const blogRef = firestore.doc(`blogs/${id}`);
    blogRef.delete();
  };

  onEditorStateChange = editorState => {
    this.setState({
      content: editorState
    });
  };

  contentEdit = index => {
    const blog = this.state.blogs[index];

    const blogContent = blog.content;
    const blocksFromHtml = htmlToDraft(blogContent);
    const { contentBlocks, entityMap } = blocksFromHtml;
    const contentState = ContentState.createFromBlockArray(
      contentBlocks,
      entityMap
    );
    const content = EditorState.createWithContent(contentState);
    // console.log("content", content);

    this.setState({
      title: blog.title,
      description: blog.description,
      color: blog.color,
      content,
      update: true,
      id: blog.id,
      categories: blog.categories,
      photoUrl: blog.photoUrl
    });
  };

  onUpdateClick = () => {
    const {
      id,
      content,
      title,
      description,
      photoUrl,
      color,
      categories
    } = this.state;
    const blog = firestore.doc(`blogs/${id}`);

    const contentData = draftToHtml(convertToRaw(content.getCurrentContent()));

    blog.update({
      title,
      description,
      photoUrl,
      content: contentData,
      color,
      categories,
      created_at: new Date()
    });

    this.setState({
      title: "",
      description: "",
      content: EditorState.createEmpty(),
      color: "orange",
      update: false,
      categories: "",
      id: null
    });
  };

  render() {
    const { content } = this.state;
    // console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())));
    // console.log(editorState.getCurrentContent());
    return (
      <>
        <div style={{ margin: "16px auto" }}>
          {this.state.error && (
            <p style={{ color: "red" }}>{`* ${this.state.error}`}</p>
          )}
          <label>Title:</label>
          <br />
          <input
            type="text"
            name="title"
            style={{ width: "80%", padding: 16, marginTop: 8 }}
            value={this.state.title}
            onChange={this.updateState}
          />
        </div>
        {/* <div style={{ margin: "16px auto" }}>
          <label>Role:</label>
          <br />
          <input
            type="text"
            name="role"
            style={{ width: "80%", padding: 16, marginTop: 8 }}
            value={this.state.role}
            onChange={this.updateState}
          />
        </div> */}

        <div style={{ margin: "16px auto" }}>
          <label>Description:</label>
          <br />
          <input
            type="text"
            name="description"
            style={{ width: "80%", padding: 16, marginTop: 8 }}
            value={this.state.description}
            onChange={this.updateState}
          />
        </div>

        <div style={{ margin: "16px auto" }}>
          <label>Categories (Use "comma" to separate categories)</label>
          <br />
          <input
            type="text"
            name="categories"
            style={{ width: "80%", padding: 16, marginTop: 8 }}
            value={this.state.categories}
            onChange={this.updateState}
          />
        </div>

        <div style={{ margin: "16px auto" }}>
          <label>Background Color:</label>
          <br />
          <input
            type="text"
            name="color"
            style={{ width: "80%", padding: 16, marginTop: 8 }}
            value={this.state.color}
            onChange={this.updateState}
          />
        </div>
        <div style={{ margin: "16px auto" }}>
          <label>Banner Image:</label>
          <br />
          <input
            type="file"
            style={{ width: "80%", padding: 16, marginTop: 8 }}
            ref={ref => (this.imageInput = ref)}
          />
        </div>

        <div style={{ margin: "16px auto" }}>
          <label>Blog Content</label>
          <br />
          {/* <Editor
            editorState={editorState}
            wrapperClassName="demo-wrapper"
            editorClassName="demo-editor"
            onEditorStateChange={this.onEditorStateChange}
            toolbarClassName="toolbar-class"
          /> */}

          {/* <Editor
            editorState={editorState}
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="demo-editor"
            editorStyle={{ height: 200, border: "1px solid #eee", padding: 4 }}
            onEditorStateChange={this.onEditorStateChange}
          /> */}
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
          {/* <textarea
            name="content"
            rows="30"
            style={{ width: "80%", padding: 16, marginTop: 8 }}
            onChange={this.updateState}
            value={this.state.content}
          /> */}
        </div>

        <Button
          onClick={event => {
            this.state.update
              ? this.onUpdateClick()
              : this.onSubmitClick(event);
          }}
        >
          <Buttontext>{this.state.update ? "Update" : "Submit"}</Buttontext>
        </Button>

        <div>
          <h1 style={{ textDecorationLine: "underline" }}>Blogs</h1>
          <div style={{ overflowY: "scroll" }}>
            {this.state.blogs.map((blog, index) => (
              <div style={{ display: "flex", flexDirection: "row" }}>
                <img
                  src={blog.photoUrl}
                  style={{ height: 64, width: 64 }}
                  alt={"Blog Image"}
                />
                <div style={{ flex: 1, marginLeft: 16 }}>
                  <p key={blog.name + index}>{blog.title}</p>
                  <p>{blog.description}</p>
                </div>
                <div>
                  <p
                    style={{ padding: "0 16px", cursor: "pointer" }}
                    onClick={() => {
                      this.deleteBlog(blog.id);
                    }}
                  >
                    X
                  </p>
                  <p
                    onClick={() => {
                      // this.setState({
                      //   title: blog.title,
                      //   description: blog.description,
                      //   color: blog.color,
                      //   content: blog.content,
                      //   update: true,
                      //   id: blog.id
                      // });
                      this.contentEdit(index);
                    }}
                    style={{ cursor: "pointer" }}
                  >
                    Edit
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
}
