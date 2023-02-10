import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import MessageBoat from "../MessageBoat";
import firebaseConfig from "../../../config/auth";
import firebase from "firebase/app";
import { useHistory } from "react-router-dom";

import "firebase/storage";
const Document = () => {
  const history = useHistory();

  const {
    register,
    handleSubmit,
    reset,
    watch,
    control,
    formState: { errors },
  } = useForm({
    mode: "all",
  });
  const [localimgpath, setLocalImagePath] = useState([]);
  const [IMAGEURL, setIMAGEURL] = useState([]);
  function handleChangeImage(e) {
    const { name, files } = e.target;
    setLocalImagePath([...localimgpath, { image: files[0] }]);
  }
  // const onSubmit = (data) => {
  //   if (!firebase.apps.length) {
  //     firebase.initializeApp(firebaseConfig);
  //   } else {
  //     firebase.app();
  //   }
  //   const storage = firebase.storage();
  //   const promises = [];
  //   localimgpath.map((file) => {
  //     console.log("file", file.image);
  //     const uploadTask = storage
  //       .ref(`images/${file.image.name}`)
  //       .put(file.image);
  //     console.log("uploadTask", uploadTask);
  //     promises.push(uploadTask);
  //     uploadTask.on(
  //       "state_changed",
  //       (snapshot) => {
  //         const percent = Math.round(
  //           (snapshot.bytesTransferred / snapshot.totalBytes) * 100
  //         );
  //         // update progress
  //       },
  //       (err) => console.log(err),
  //       async () => {
  //         storage
  //           .ref("images")
  //           .child(file.image.name)
  //           .getDownloadURL()
  //           .then((url) => {
  //             console.log("url", url);
  //             setIMAGEURL([...IMAGEURL, url]);
  //             history.push("/dashboard");
  //           });
  //       }
  //     );
  //   });
  //   Promise.all(promises)
  //     .then(() => console.log("All images uploaded", IMAGEURL))
  //     .catch((err) => console.log(err));
  // };
  const onSubmit = (data) => {
    console.log("Hello");
  };
  const ketty_s_message = "One more last step to approve your Car loan";
  return (
    <div className="container-xxl form-main documet-upload py-5 px-3">
      <div className="d-flex justify-content-between  align-items-start">
        <div className="form-wrapper">
          <div className="row">
            <Link to="/dashboard">Back</Link>
          </div>
          {console.log("localimgpath", localimgpath)}
          <MessageBoat msg={ketty_s_message} />
          <div className="row">
            <div className="col-0 col-sm-2"></div>
            <div className="col-12 col-sm-10 mt-2">
              <form className="h-100  form" onSubmit={handleSubmit(onSubmit)}>
                <div className="field-area d-flex flex-column justify-content-center align-items-center">
                  <h5 className="text-muted text-left my-4">Identify</h5>
                  <div class="mb-4">
                    <label>Driving Licence (Front)</label>
                    <div className="position-relative ">
                      <input
                        type="file"
                        title=""
                        className=""
                        accept="image/*"
                        name="drivingLicenceFront"
                        onChange={handleChangeImage}
                      />
                    </div>
                  </div>
                  <div class="mb-4">
                    <label>Driving Licence (Back )</label>
                    <div className="position-relative ">
                      <input
                        type="file"
                        title=""
                        accept="image/*"
                        className=""
                        name="drivingLicenceBack"
                        onChange={handleChangeImage}
                      />
                    </div>
                  </div>
                  <div class="mb-4">
                    <label>Medicare Card</label>
                    <div className="position-relative ">
                      <input
                        type="file"
                        title=""
                        className=""
                        accept="image/*"
                        name="medicareCard"
                        onChange={handleChangeImage}
                      />
                      {/* <button
                        className="btn btn-image-upload position-absolute"
                        onClick={uploadImage}
                      >
                        UPLOAD
                      </button> */}
                    </div>
                  </div>
                  <h5 className="text-muted my-4">Income Verification</h5>
                  <div class="mb-4">
                    <label>Most Recent Payslip</label>
                    <div className="position-relative ">
                      <input
                        type="file"
                        title=""
                        accept="image/*"
                        className=""
                        name="mostRecentPayslip"
                        onChange={handleChangeImage}
                      />
                    </div>
                  </div>
                  <div class="mb-4">
                    <label>Second Most Recent Payslip</label>
                    <div className="position-relative ">
                      <input
                        type="file"
                        title=""
                        accept="image/*"
                        className=""
                        name="secondMostRecentPayslip"
                        onChange={handleChangeImage}
                      />
                    </div>
                  </div>
                </div>
                <div className="btn-area d-flex justify-content-end ">
                  <input type="submit" value="Next" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Document;
