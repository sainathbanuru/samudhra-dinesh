// import React from "react";
// import styled from "styled-components";

// import { firestore, storage } from "../firebase";

// const Container = styled.div`
//   background-color: #fff;
//   padding: 16px;
// `;

// const Button = styled.div`
//   display: flex;
//   border: 2px solid #00c48a;
//   border-radius: 6px;
//   width: 150px;
//   height: 48px;
//   justify-content: center;
//   align-items: center;
//   cursor: pointer;
//   margin-bottom: 16px;
//   margin-top: 16px;
// `;

// const Buttontext = styled.div`
//   font-family: Sans-Narrow-Bold;
//   font-size: 16px;
//   color: #00c48a;
// `;

// export default class HappeningsAdmin extends React.Component {
//   state = {
//     title: "",
//     imageUrl: "",
//     description: "",
//     error: "",
//     happenings: []
//   };
//   imageInput = null;

//   unsubscribeFromFirestore = null;

//   componentDidMount() {
//     this.unsubscribeFromFirestore = firestore
//       .collection("happenings")
//       .onSnapshot(snapshot => {
//         const happenings = snapshot.docs.map(doc => {
//           return { id: doc.id, ...doc.data() };
//         });
//         this.setState({ happenings });
//       });
//   }

//   componentWillUnmount() {
//     this.unsubscribeFromFirestore();
//   }

//   get file() {
//     return this.imageInput && this.imageInput.files[0];
//   }

//   updateState = event => {
//     this.setState({
//       [event.target.name]: event.target.value,
//       error: ""
//     });
//   };

//   deleteHappening = id => {
//     const happeningRef = firestore.doc(`happenings/${id}`);
//     happeningRef.delete();
//   };

//   onSubmitClick = event => {
//     event.preventDefault();
//     const { title, imageUrl, description } = this.state;
//     if (title.length > 0 && description.length > 0 && this.file) {
//       storage
//         .ref()
//         .child("happenings")
//         .child(this.file.name)
//         .put(this.file)
//         .then(response => response.ref.getDownloadURL())
//         .then(photoUrl =>
//           firestore.collection("happenings").add({
//             title,
//             description,
//             photoUrl,
//             created_at: new Date()
//           })
//         );
//     } else {
//       this.setState({
//         error: "fileds cannot be empty"
//       });
//     }
//     this.setState({
//       title: "",
//       description: "",
//       imageUrl: ""
//     });
//   };

//   render() {
//     return (
//       <>
//         {this.state.error.length > 0 && (
//           <p style={{ color: "red" }}>{`* ${this.state.error}`}</p>
//         )}
//         <div style={{ margin: "16px auto" }}>
//           <label>Title:</label>
//           <br />
//           <input
//             type="text"
//             name="title"
//             style={{ width: "80%", padding: 16, marginTop: 8 }}
//             value={this.state.title}
//             onChange={this.updateState}
//           />
//         </div>

//         <div style={{ margin: "16px auto" }}>
//           <label>Description:</label>
//           <br />
//           <input
//             type="text"
//             name="description"
//             style={{ width: "80%", padding: 16, marginTop: 8 }}
//             value={this.state.description}
//             onChange={this.updateState}
//           />
//         </div>
//         <div style={{ margin: "16px auto" }}>
//           <label>Image:</label>
//           <br />
//           <input
//             type="file"
//             style={{ width: "80%", padding: 16, marginTop: 8 }}
//             ref={ref => (this.imageInput = ref)}
//           />
//         </div>
//         <Button onClick={this.onSubmitClick}>
//           <Buttontext>Submit</Buttontext>
//         </Button>

//         <div>
//           <h1 style={{ textDecorationLine: "underline" }}>Happenings</h1>
//           <div style={{ overflowY: "scroll" }}>
//             {this.state.happenings.map((happening, index) => (
//               <div style={{ display: "flex", flexDirection: "row" }}>
//                 <img
//                   src={happening.photoUrl}
//                   style={{ height: 128, width: "auto" }}
//                 />
//                 <div style={{ flex: 1, marginLeft: 16 }}>
//                   <p key={happening.title + index}>{happening.title}</p>
//                   <p>{happening.description}</p>
//                 </div>
//                 <p
//                   style={{ padding: 16, cursor: "pointer" }}
//                   onClick={() => {
//                     this.deleteHappening(happening.id);
//                   }}
//                 >
//                   X
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </>
//     );
//   }
// }

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

export default class UnlimitedThaliAdmin extends React.Component {
  state = {
    saturdayNights: "",
    divaNights: "",
    weekendBrunch: "",
    bollywoodNight: "",
    content: EditorState.createEmpty(),
    error: ""
  };

  componentDidMount() {
    firestore
      .collection("happeningsText")
      .doc("happeningsText")
      .get()
      .then(happeningsText => {
        const happeningsTextData = happeningsText.data();
        const happeningsTextContent = happeningsTextData.content;
        const blocksFromHtml = htmlToDraft(happeningsTextContent);
        const { contentBlocks, entityMap } = blocksFromHtml;
        const contentState = ContentState.createFromBlockArray(
          contentBlocks,
          entityMap
        );
        const content = EditorState.createWithContent(contentState);
        // console.log("content", content);
        this.setState({
          ...happeningsText.data(),
          content
        });
        // happeningsText.data();
        // this.setState({
        //   ...happeningsText.data()
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
    const {
      saturdayNights,
      divaNights,
      weekendBrunch,
      bollywoodNight,
      content
    } = this.state;

    const contentData = draftToHtml(convertToRaw(content.getCurrentContent()));

    if (
      saturdayNights.length > 0 &&
      divaNights.length > 0 &&
      weekendBrunch.length > 0 &&
      bollywoodNight.length > 0 &&
      contentData.length > 0
    ) {
      firestore
        .collection("happeningsText")
        .doc("happeningsText")
        .update({
          saturdayNights,
          divaNights,
          weekendBrunch,
          bollywoodNight,
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
      saturdayNights: "",
      divaNights: "",
      weekendBrunch: "",
      bollywoodNight: "",
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
          <label>Saturday Nights</label>
          <br />
          <input
            type="text"
            name="saturdayNights"
            style={{
              width: "80%",
              padding: 16,
              marginTop: 8,
              border: "1px solid #000"
            }}
            value={this.state.saturdayNights}
            onChange={this.updateState}
          />
        </div>
        <div style={{ margin: "16px auto" }}>
          <label>Diva Nights</label>
          <br />
          <input
            type="text"
            name="divaNights"
            style={{
              width: "80%",
              padding: 16,
              marginTop: 8,
              border: "1px solid #000"
            }}
            value={this.state.divaNights}
            onChange={this.updateState}
          />
        </div>
        <div style={{ margin: "16px auto" }}>
          <label>Weekend Brunch</label>
          <br />
          <input
            type="text"
            name="weekendBrunch"
            style={{
              width: "80%",
              padding: 16,
              marginTop: 8,
              border: "1px solid #000"
            }}
            value={this.state.weekendBrunch}
            onChange={this.updateState}
          />
        </div>
        <div style={{ margin: "16px auto" }}>
          <label>Bollywood Nights</label>
          <br />
          <input
            type="text"
            name="bollywoodNight"
            style={{
              width: "80%",
              padding: 16,
              marginTop: 8,
              border: "1px solid #000"
            }}
            value={this.state.bollywoodNight}
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
