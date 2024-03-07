import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import Spinner from "../../Spinner/Spinner";
import axios from "axios";
import Toast from "../../Toast/Toast";

const Signup = () => {
  const [show, setShow] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmpassword, setConfirmpassword] = useState();
  const [pic, setPic] = useState();
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();

  const handleClick = () => setShow(!show);

  const postDetails = (pics) => {
    setLoading(true);
    if (pics == undefined) {
      toast({
        title: "Please Select an Image!",
        status: "Warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      return;
    }

    if (pics.type === "image/jpeg" || pics.type === "image/png") {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "Chat-astrophic");
      data.append("cloud_name", "brianotieno");
      fetch("https://api.cloudinary.com/v1_1/brianotieno/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setPic(data.url.toString());
          console.log(data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    } else {
      toast({
        title: "Please Select an Image!",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
      return;
    }
  };

  const submitHandler = async () => {
    setLoading(true);
    if (!name || !email || !password || !confirmpassword) {
      toast({
        title: "Please fill all the fields",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
      return;
    }
    if (password !== confirmpassword) {
      toast({
        title: "Passwords Do Not Match",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      return;
    }

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post(
        "/api/user",
        { name, email, password, pic },
        config
      );
      toast({
        title: "Registration Successful",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });

      localStorage.setItem("userInfo", JSON.stringify(data));

      setLoading(false);
      navigate("/chats");
    } catch (error) {
      toast({
        title: "Error Occured",
        description: error.response.data.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
    }
  };

  return (
    <div className="login template d-flex justify-content-center align-items-center vh-100 bg-primary">
      <div className="form_container w-40 p-5 rounded bg-white ">
        <form>
          <h3 className="text-center">Sign Up</h3>
          <div className="mb-2">
            <label htmlFor="full-name">Name</label>
            <input
              type="text"
              id="full-name"
              placeholder="Enter Your Full Name"
              className="form-control"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter Your Email"
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="password">Password</label>
            <input
              type={show ? "text" : "password"}
              id="password"
              placeholder="Enter Password"
              className="form-control"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </button>
          </div>
          <div className="mb-2">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              type={show ? "text" : "password"}
              id="confirm-password"
              placeholder="Re-enter Password"
              className="form-control"
              onChange={(e) => setConfirmpassword(e.target.value)}
            />
            <button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </button>
          </div>
          <div className="mb-2">
            <label htmlFor="pic">Upload Profile Picture</label>
            <input
              type="file"
              id="pic"
              accept="image/"
              className="form-control"
              onChange={(e) => postDetails(e.target.files[0])}
            />
          </div>

          <div className="d-grid">
            <button
              className="btn btn-primary w-100 mt-15"
              onClick={submitHandler}
            >
              {loading ? <Spinner /> : "Sign Up"}
            </button>
          </div>
          <p className="text-end mt-2">
            <Link to="/" className="ms-2">
              Log in
            </Link>
          </p>
          <Toast />
        </form>
      </div>
    </div>
  );
};

export default Signup;
