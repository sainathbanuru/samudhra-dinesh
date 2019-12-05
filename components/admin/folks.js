// import React from "react";
// import styled from "styled-components";

// import { firestore, storage } from "../firebase";

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

// export default class MeetFolks extends React.Component {
//   state = {
//     role: "",
//     name: "",
//     description: "",
//     folks: []
//   };
//   imageInput = null;

//   unsubscribeFromFirestore = null;

//   componentDidMount() {
//     // this.unsubscribeFromFirestore = firestore
//     //   .collection("folks")
//     //   .onSnapshot(snapshot => {
//     //     const folks = snapshot.docs.map(doc => {
//     //       return { id: doc.id, ...doc.data() };
//     //     });
//     //     this.setState({ folks });
//     //   });
//   }

//   componentWillUnmount() {
//     // this.unsubscribeFromFirestore();
//   }

//   // get file() {
//   //   return this.imageInput && this.imageInput.files[0];
//   // }

//   updateState = event => {
//     // this.setState({
//     //   [event.target.name]: event.target.value
//     // });
//   };

//   onSubmitClick = event => {
//     event.preventDefault();
//     // const { role, description, name } = this.state;
//     // if (
//     //   name.length > 0 &&
//     //   role.length > 0 &&
//     //   description.length > 0 &&
//     //   this.file
//     // ) {
//     //   storage
//     //     .ref()
//     //     .child("folks")
//     //     .child(this.file.name)
//     //     .put(this.file)
//     //     .then(response => response.ref.getDownloadURL())
//     //     .then(photoUrl =>
//     //       firestore.collection("folks").add({
//     //         name,
//     //         role,
//     //         description,
//     //         photoUrl,
//     //         created_at: new Date()
//     //       })
//     //     );
//     // } else {
//     //   this.setState({
//     //     error: "fileds cannot be empty"
//     //   });
//     // }
//     // this.setState({
//     //   name: "",
//     //   description: "",
//     //   role: ""
//     // });
//     // this.file.value = null;
//   };

//   deleteFolk = id => {
//     // const folkRef = firestore.doc(`folks/${id}`);
//     // folkRef.delete();
//   };

//   render() {
//     return (
//       <>
//         <div style={{ margin: "16px auto" }}>
//           {this.state.error && (
//             <p style={{ color: "red" }}>{`* ${this.state.error}`}</p>
//           )}
//           <label>Name:</label>
//           <br />
//           <input
//             type="text"
//             name="name"
//             style={{ width: "80%", padding: 16, marginTop: 8 }}
//             value={this.state.name}
//             onChange={this.updateState}
//           />
//         </div>
//         <div style={{ margin: "16px auto" }}>
//           <label>Role:</label>
//           <br />
//           <input
//             type="text"
//             name="role"
//             style={{ width: "80%", padding: 16, marginTop: 8 }}
//             value={this.state.role}
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
//           <label>Profile Image:</label>
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
//           <h1 style={{ textDecorationLine: "underline" }}>Folks</h1>
//           <div style={{ overflowY: "scroll" }}>
//             {this.state.folks.map((chef, index) => (
//               <div style={{ display: "flex", flexDirection: "row" }}>
//                 <img src={chef.photoUrl} style={{ height: 64, width: 64 }} />
//                 <div style={{ flex: 1, marginLeft: 16 }}>
//                   <p key={chef.name + index}>
//                     {chef.name} - {chef.role}
//                   </p>
//                   <p>{chef.description}</p>
//                 </div>
//                 <p
//                   style={{ padding: 16, cursor: "pointer" }}
//                   onClick={() => {
//                     this.deleteFolk(chef.id);
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
import { firestore, storage } from "../firebase";

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

export default class Folks extends React.Component {
  state = {
    name: "",
    role: "",
    description: "",
    folks: [],
    error: ""
  };

  imageInput = null;

  unsubscribeFromFirestore = null;

  componentDidMount() {
    this.unsubscribeFromFirestore = firestore
      .collection("folks")
      .onSnapshot(snapshot => {
        const folks = snapshot.docs.map(doc => {
          return { id: doc.id, ...doc.data() };
        });
        this.setState({ folks });
      });
  }

  componentWillUnmount() {
    this.unsubscribeFromFirestore();
  }

  get file() {
    return this.imageInput && this.imageInput.files[0];
  }

  onSubmitClick = event => {
    event.preventDefault();
    // console.log(this.state);
    const { role, description, name } = this.state;
    if (
      name.length > 0 &&
      role.length > 0 &&
      description.length > 0 &&
      this.file
    ) {
      storage
        .ref()
        .child("folks")
        .child(this.file.name)
        .put(this.file)
        .then(response => response.ref.getDownloadURL())
        .then(photoUrl =>
          firestore.collection("folks").add({
            name,
            role,
            description,
            photoUrl,
            created_at: new Date()
          })
        );
    } else {
      this.setState({
        error: "fileds cannot be empty"
      });
    }
    this.setState({
      name: "",
      description: "",
      role: ""
    });
    this.file.value = null;
  };

  updateState = event => {
    this.setState({
      [event.target.name]: event.target.value,
      error: ""
    });
  };

  deleteFolk = id => {
    const folkRef = firestore.doc(`folks/${id}`);
    folkRef.delete();
  };

  render() {
    return (
      <div>
        {this.state.error.length > 0 && (
          <p style={{ color: "red" }}>{`* ${this.state.error}`}</p>
        )}
        <div style={{ margin: "16px auto" }}>
          <label>Name:</label>
          <br />
          <input
            type="text"
            name="name"
            style={{ width: "80%", padding: 16, marginTop: 8 }}
            value={this.state.name}
            onChange={this.updateState}
          />
        </div>
        <div style={{ margin: "16px auto" }}>
          <label>Role:</label>
          <br />
          <input
            type="text"
            name="role"
            style={{ width: "80%", padding: 16, marginTop: 8 }}
            value={this.state.role}
            onChange={this.updateState}
          />
        </div>

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
          <label>Profile Image:</label>
          <br />
          <input
            type="file"
            style={{ width: "80%", padding: 16, marginTop: 8 }}
            ref={ref => (this.imageInput = ref)}
          />
        </div>

        <Button onClick={this.onSubmitClick}>
          <Buttontext>Submit</Buttontext>
        </Button>
        <div>
          <h1 style={{ textDecorationLine: "underline" }}>Folks</h1>
          <div style={{ overflowY: "scroll" }}>
            {this.state.folks.map((chef, index) => (
              <div style={{ display: "flex", flexDirection: "row" }}>
                <img
                  src={chef.photoUrl}
                  style={{ height: 64, width: 64 }}
                  alt={"Chef Image"}
                />
                <div style={{ flex: 1, marginLeft: 16 }}>
                  <p key={chef.name + index}>
                    {chef.name} - {chef.role}
                  </p>
                  <p>{chef.description}</p>
                </div>
                <p
                  style={{ padding: 16, cursor: "pointer" }}
                  onClick={() => {
                    this.deleteFolk(chef.id);
                  }}
                >
                  X
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
