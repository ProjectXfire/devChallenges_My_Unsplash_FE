import React, { useState } from "react";
import Image from "next/image";
// Providers
import { useForm } from "react-hook-form";
// Models
import { Photo } from "@models/photo";
// Services
import { remove } from "@services/httpRequest";
// Components
import { Modal } from "@components/modal";
// Styled components
import { BackgroundOnSideMenu } from "@styles/components/headerMenu";
import { StyledPhotos, StyledPhoto } from "@styles/components/photos";
import { StyledButton } from "@styles/shared/button";
import { colors } from "@styles/variables/colors";

interface PhotosProps {
  photos: Photo[];
  api: string;
}

interface ModalProps {
  password: string;
}

export const Photos = ({ photos, api }: PhotosProps) => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();
  const [activeModal, setActiveModal] = useState<boolean | null>(null);
  const [photoId, setPhotoId] = useState("");

  function showModal() {
    setActiveModal(true);
  }
  function hideModal() {
    setActiveModal(false);
    reset();
  }

  async function handleOnSubmit(data: ModalProps) {
    try {
      await remove(api, photoId, data.password);
      setPhotoId("");
      window.location.reload();
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  return (
    <>
      <StyledPhotos>
        {photos.map((photo, index) => (
          <StyledPhoto key={index}>
            <img src={photo.photoURL} alt="photo" />
            <div>
              <StyledButton
                size="sm"
                color={colors.darkRed}
                onClick={() => {
                  showModal();
                  setPhotoId(photo._id);
                }}
              >
                Delete
              </StyledButton>
              <p>{photo.name}</p>
            </div>
          </StyledPhoto>
        ))}
      </StyledPhotos>
      <Modal
        active={activeModal}
        hideModal={hideModal}
        handleOnSubmit={handleOnSubmit}
        handleSubmit={handleSubmit}
        setValue={setValue}
        register={register}
        errors={errors}
        isDeleteModal={true}
      ></Modal>
      {activeModal && <BackgroundOnSideMenu onClick={hideModal} />}
    </>
  );
};
