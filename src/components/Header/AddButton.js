import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import "./index.css";

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
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  console.log(open);
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
            <h2>Add a new photo</h2>
          </div>
          <form className="modalFormBox">
            <div>
              <label>Label</label>
              <br />
              <input placeholder="Suspendisse elit massa" />
            </div>
            <div>
              <label>Photo URL</label>
              <br />
              <input placeholder="https://unsplash.com/photos/oqjZC4zXfqg" />
            </div>
            <div className="addModalBtn">
              <Button onClose={() => handleClose}>Cancel</Button>
              <Button>Submit</Button>
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
