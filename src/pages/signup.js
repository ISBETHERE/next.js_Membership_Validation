import React, { useState } from "react";
import { useRouter } from "next/router";
import Dialog from "@mui/material/Dialog"; // Import Dialog component
import DialogTitle from "@mui/material/DialogTitle"; // Import DialogTitle component
import Button from "@mui/material/Button"; // Import Button component

function SignUp() {
  const [form, setForm] = useState({
    name: "",
    password: "",
    email: "",
  });

  const [errors, setErrors] = useState({
    name: false,
    password: "",
    email: "",
  });

  const [openModal, setOpenModal] = useState(false); // State for opening and closing modal
  const [modalMessage, setModalMessage] = useState(""); // State for the message in the modal

  const router = useRouter();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });


    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  const handleModalClose = () => {
    setOpenModal(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.name === "") {
      setModalMessage("이름을 입력해주세요.");
      setOpenModal(true);
      return;
    }

    if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}/.test(form.password)) {
      setModalMessage("암호는 최소한 대문자 한개 소문자 한개 숫자 한개 특수 문자 한 개가 포함된 길이가 최소한8자리여야 합니다");
      setOpenModal(true);
      return;
    }

    if (!/\S+@\S+\.\S+/.test(form.email)) {
      setModalMessage("유효한 이메일 주소를 입력하십시오.");
      setOpenModal(true);
      return;
    }


    localStorage.setItem("userData", JSON.stringify(form));

    router.push("/AdminPage");
  };

  return (
      <div>
        <form noValidate onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" value={form.name} onChange={handleChange} />
          </label>
        <br/>
          <label>
            Email:
            <input type="email" name="email" value={form.email} onChange={handleChange} />
          </label>
          <br/>
          <label>
            Password:
            <input type="password" name="password" value={form.password} onChange={handleChange} />
          </label>


          <button type="submit">Sign Up</button>
        </form>


        <Dialog open={openModal} onClose={handleModalClose}>
          <DialogTitle>{modalMessage}</DialogTitle>
          <Button onClick={handleModalClose} color="primary">
            Close
          </Button>
        </Dialog>
      </div>
  );
}

export default SignUp;
