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

export default class GalleryAdmin extends React.Component {
  state = {
    title: "",
    imageUrl: "",
    description: "",
    error: "",
    gallery: [],
    uploadedImageUrls: [],
    uploadedText: ""
  };
  imageInput = null;

  unsubscribeFromFirestore = null;

  componentDidMount() {
    this.unsubscribeFromFirestore = firestore
      .collection("gallery")
      .onSnapshot(snapshot => {
        const gallery = snapshot.docs.map(doc => {
          return { id: doc.id, ...doc.data() };
        });
        // console.log("gallery", gallery);
        this.setState({ gallery });
      });
  }

  componentWillUnmount() {
    this.unsubscribeFromFirestore();
  }

  get file() {
    return this.imageInput && this.imageInput.files;
  }

  updateState = event => {
    this.setState({
      [event.target.name]: event.target.value,
      error: ""
    });
  };

  deleteGalleryItem = id => {
    const galleryItemRef = firestore.doc(`gallery/${id}`);
    galleryItemRef.delete();
  };

  uploadImageAsPromise = (imageFile, photoUrls) => {
    // console.log(imageFile.name);
    return storage
      .ref()
      .child("gallery")
      .child(imageFile.name)
      .put(imageFile)
      .then(response => response.ref.getDownloadURL())
      .then(photoUrl => {
        const uploadedImageUrls = this.state.uploadedImageUrls;
        this.setState(
          {
            uploadedImageUrls: [...uploadedImageUrls, photoUrl]
          },
          () => {
            this.setState({
              uploadedText: `Uploaded ${this.state.uploadedImageUrls} of ${this.file.length}`
            });
            console.log(photoUrl);
            if (this.file.length == this.state.uploadedImageUrls.length) {
              // console.log("upload time");
              this.storeGalleryItems();
            }
          }
        );
      });
  };

  storeGalleryItems = () => {
    const { uploadedImageUrls, title } = this.state;
    // console.log(title);
    firestore.collection("gallery").add({
      title: title,
      images: uploadedImageUrls,
      created_at: new Date()
    });
    this.setState({
      title: "",
      uploadedText: ""
    });
  };

  onSubmitClick = async event => {
    event.preventDefault();
    const { title, imageUrl, description } = this.state;

    // console.log(title);
    const photoUrls = [];

    if (title.length > 0 && this.file) {
      Object.keys(this.file).reduce((accumulatorPromise, file) => {
        // console.log(this.file[file].name);
        if (file === null) return accumulatorPromise;
        return accumulatorPromise.then(() => {
          // console.log("inside", this.file[file].name);
          return this.uploadImageAsPromise(this.file[file], photoUrls);
        });
      }, Promise.resolve());
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
  };

  render() {
    return (
      <>
        {this.state.error.length > 0 && (
          <p style={{ color: "red" }}>{`* ${this.state.error}`}</p>
        )}
        {this.state.uploadedText.length > 0 && (
          <p style={{ color: "red" }}>{`* ${this.state.uploadedText}`}</p>
        )}
        <div style={{ margin: "16px auto" }}>
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

        <div style={{ margin: "16px auto" }}>
          <label>Image:</label>
          <br />
          <input
            type="file"
            style={{ width: "80%", padding: 16, marginTop: 8 }}
            multiple={true}
            ref={ref => (this.imageInput = ref)}
          />
        </div>
        <Button onClick={this.onSubmitClick}>
          <Buttontext>Submit</Buttontext>
        </Button>

        <div>
          <h1 style={{ textDecorationLine: "underline" }}>Gallery</h1>
          <div style={{ overflowY: "scroll" }}>
            {this.state.gallery.map((gallery, index) => (
              <div key={gallery.id}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between"
                  }}
                >
                  <Text>{gallery.title}</Text>

                  <p
                    style={{ padding: 16, cursor: "pointer" }}
                    onClick={() => {
                      this.deleteGalleryItem(gallery.id);
                    }}
                  >
                    X
                  </p>
                </div>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  {gallery.images.map((image, index) => (
                    <img
                      src={image}
                      style={{ width: 100, height: 100, marginRight: 16 }}
                      alt={"Gallery Image"}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
}
