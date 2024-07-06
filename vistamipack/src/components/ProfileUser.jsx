import React, { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";
import { NavB } from "./NavB";
import axios from "axios";
import { useEmail } from "../context/Contexto";
import { AiOutlineUpload } from "react-icons/ai";
import { AiFillCamera } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { CiEdit } from "react-icons/ci";
import { logout } from "../Firebase";

const ProfileUser = () => {
  const [userData, setUserData] = useState(null);
  const [userName, setUserName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [coverPhoto, setCoverPhoto] = useState(null);
  const [profilePhoto, setProfilePhoto] = useState(null);
  const { email } = useEmail();
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const [imageName, setImageName] = useState("");

  useEffect(() => {
    // Realiza la solicitud GET al backend al cargar el componente
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/damee/${email}`
        );
        // Actualiza el estado con los datos recibidos del backend
        setUserData(response.data);
        setUserName(response.data);
      } catch (error) {
        console.error("Error al obtener los datos del usuario:", error);
      }
    };

    fetchData();
  }, [email]);

  const toggleModal = () => {
    setModal(!modal);
  };

  const handleLogout = async () => {
    await logout();
    navigate("/");
    alert("Do you want to log out?");
  };

  const handleCoverPhotoChange = (e) => {
    setCoverPhoto(e.target.files[0]);
  };

  const handleProfilePhotoChange = (e) => {
    const file = setProfilePhoto(e.target.files[0]);
    if (file) {
      setProfilePhoto(file);
      setImageName(file.name);
    }
  };

  const handleProfileSubmit = async (e) => {
    e.preventDefault();

    if (!profilePhoto) {
      alert("Please select a profile photo first.");
      return;
    }

    const formData = new FormData();
    formData.append("file", profilePhoto);
    formData.append("email", email);

    try {
      const response = await axios.post(
        "http://localhost:8080/api/editarPerfil",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200) {
        console.log("Profile photo uploaded successfully:", response.data);
        alert("Profile photo uploaded successfully");
        toggleModal();
      } else {
        console.error("Failed to upload profile photo");
        alert("Error uploading profile photo");
      }
    } catch (error) {
      console.error("Error uploading profile photo:", error);
      alert("Error uploading profile photo");
    }
  };

  const handleCoverSubmit = async (e) => {
    e.preventDefault();

    if (!coverPhoto) {
      alert("Please select a cover photo first.");
      return;
    }

    const formData = new FormData();
    formData.append("file", coverPhoto);
    formData.append("email", email);

    try {
      const response = await axios.post(
        "http://localhost:8080/api/editarPortada",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200) {
        console.log("Cover photo uploaded successfully:", response.data);
        alert("Cover photo uploaded successfully");
        toggleModal();
      } else {
        console.error("Failed to upload cover photo");
        alert("Error uploading cover photo");
      }
    } catch (error) {
      console.error("Error uploading cover photo:", error);
      alert("Error uploading cover photo");
    }
  };

  useEffect(() => {
    // Realiza la solicitud GET al backend al cargar el componente
    const fetchData = async () => {
      try {
        const response = await axios.get(
           `http://localhost:8080/api/obtenerPerfil/${email}/${imageName}`
        );
        // Actualiza el estado con los datos recibidos del backend
        setUserData(response.data);
        setPhotoURL(response.data);
      } catch (error) {
        console.error("Error al obtener la imagen del perfil:", error);
      }
    };

    if (imageName) {
      fetchData();
    }
  }, [email, imageName]);

  return (
    <div>
      <div>
        <NavB />
      </div>

      <div
        className="profile"
        style={{ backgroundColor: "#f7bfbe", padding: "20px" }}
      >
        <div className="user-profile-data" style={{ margin: "20px 0" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            {photoURL ? (
              <img
                src={photoURL}
                alt="Profile"
                style={{ width: "180px", height: "180px", borderRadius: "50%" }}
              />
            ) : (
              <CgProfile size="180" />
            )}

            {userData && (
              <div style={{ marginLeft: "20px", marginBottom: "100px" }}>
                <h2>
                  <p>{userName}</p>
                </h2>
              </div>
            )}
          </div>
          <div>
            <Button
              style={{
                background: "black",
                display: "flex",
                alignItems: "center",
                marginLeft: "21px",
              }}
              onClick={toggleModal}
            >
              <CiEdit />
              EDIT DATA
            </Button>
            <Modal isOpen={modal} toggle={toggleModal}>
              <ModalHeader toggle={toggleModal}></ModalHeader>
              <ModalBody>
                <p>Editar Perfil</p>
                <form onSubmit={handleProfileSubmit}>
                  <div className="form-group">
                    <label htmlFor="username">Username: </label>
                    <input type="text" id="username" name="username" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      onChange={(e) => setUserName(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="profilePhoto">Profile Photo:</label>
                    <input
                      type="file"
                      id="profilePhoto"
                      name="profilePhoto"
                      accept="image/*"
                      onChange={handleProfilePhotoChange}
                    />
                  </div>
                  <Button color="primary" type="submit">
                    SAVE PROFILE PHOTO
                  </Button>
                </form>
                <form onSubmit={handleCoverSubmit}>
                  <div className="form-group">
                    <label htmlFor="coverPhoto">Cover Photo:</label>
                    <input
                      type="file"
                      id="coverPhoto"
                      name="coverPhoto"
                      accept="image/*"
                      onChange={handleCoverPhotoChange}
                    />
                  </div>
                  <Button color="primary" type="submit">
                    SAVE COVER PHOTO
                  </Button>
                </form>
                <Button color="secondary" onClick={toggleModal}>
                  CANCEL
                </Button>
              </ModalBody>
            </Modal>
          </div>
        </div>

        <div>
          <br />
          <button
            className="logOutButton"
            style={{
              background: "#222222",
              borderRadius: "50px",
              padding: "10px 20px",
              color: "#ffffff",
              fontWeight: "bold",
              cursor: "pointer",
              position: "absolute",
              right: 0,
              top: 57,
            }}
            onClick={handleLogout}
          >
            LOG OUT
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileUser;
