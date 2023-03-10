import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import "./index.css";
import { useState } from "react";
import { axiosInstance } from "../../network/axiosInstance";
import { useRef } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 620,
  bgcolor: "background.paper",
  border: "1px solid gray",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};

export default function AddButton() {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const inputRef = useRef(null);
  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  const handleChangeFile = async (e) => {
    try {
      const formData = new FormData();
      const file = e.target.files[0];
      formData.append("image", file);
      console.log(formData);
      const token = localStorage.getItem("token"); // assuming the token is stored in local storage
      const { data } = await axiosInstance.post("/upload", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setImageUrl(data.url);
    } catch (err) {
      console.warn(err);
      alert("image is not sent");
    }
  };

  console.log(imageUrl);
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const fields = {
        text,
        imageUrl,
      };
      const { data } = await axiosInstance.post("/posts", fields);
    } catch (err) {
      console.warn(err);
      alert("post is not create");
    }
  };

  return (
    <div>
      <button className="addPhotoBtn" onClick={handleOpen}>
        Add a photo
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="modalTitleBox">
            <h3>Add a new photo</h3>
          </div>
          <form onSubmit={onSubmit} className="modalFormBox">
            <label>Label</label>
            <input
              placeholder="Suspendisse elit massa"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <input
              ref={inputRef}
              type="file"
              onChange={handleChangeFile}
              hidden
            />
            <label>Photo URL</label>
            <input
              placeholder="https://unsplash.com/photos/oqjZC4zXfqg"
              onClick={() => inputRef.current.click()}
            />
            <div className="addModalBtn">
              <button className="addModalBtnCancel" onClick={handleClose}>
                Cancel
              </button>
              <button className="addModalBtnSubmit" type="submit">
                Submit
              </button>
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
