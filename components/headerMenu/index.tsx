import React, { Dispatch, SetStateAction } from "react";
import Image from "next/image";
// Providers
import { GiHamburgerMenu } from "react-icons/gi";
import { useForm } from "react-hook-form";
import { MdSearch } from "react-icons/md";
// Modals
import { PhotoDto } from "@models/photo";
// Services
import { create } from "@services/httpRequest";
// Images
import logo from "@public/my_unsplash_logo.svg";
// Components
import { Modal } from "@components/modal";
// Styled components
import { StyledSearch } from "@styles/components/search";
import { colors } from "@styles/variables/colors";
import {
  StyledHeaderMenu,
  Menu,
  SideMenu,
  BackgroundOnSideMenu,
  SideBar,
} from "@styles/components/headerMenu";
import { StyledButton } from "@styles/shared/button";
import { useState } from "react";

interface SearchInputStates {
  searchText: string;
  dirtyInput: boolean;
}

interface HeaderMenuProps {
  api?: string;
  setSearchInput: Dispatch<SetStateAction<SearchInputStates>>;
  searchText: string;
}

export const HeaderMenu = ({
  api,
  setSearchInput,
  searchText,
}: HeaderMenuProps) => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();
  const [activeSidebar, setActiveSidebar] = useState<boolean | null>(null);
  const [activeModal, setActiveModal] = useState<boolean | null>(null);

  function showSidebar() {
    setActiveSidebar(true);
  }
  function hideSidebar() {
    if (activeSidebar === null) {
      setActiveSidebar(null);
    } else {
      setActiveSidebar(false);
    }
    setActiveModal(false);
    reset();
  }
  function showModal() {
    setActiveModal(true);
    if (activeSidebar === null) {
      setActiveSidebar(null);
    } else {
      setActiveSidebar(false);
    }
  }
  function hideModal() {
    setActiveModal(false);
    reset();
    if (activeSidebar === null) {
      setActiveSidebar(null);
    } else {
      setActiveSidebar(false);
    }
  }

  async function handleOnSubmit(data: PhotoDto) {
    try {
      await create(api, data);
      hideModal();
      window.location.reload();
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  return (
    <>
      <StyledHeaderMenu>
        <Menu>
          <li>
            <Image src={logo} alt="logo"></Image>
            <StyledSearch>
              <MdSearch size="20" color={colors.lightGrey} />
              <input
                type="text"
                placeholder="Search by name"
                value={searchText}
                onChange={(e) =>
                  setSearchInput({
                    searchText: e.target.value,
                    dirtyInput: false,
                  })
                }
              />
            </StyledSearch>
          </li>
          <li>
            <StyledButton color={colors.green} onClick={showModal}>
              Add a photo
            </StyledButton>
          </li>
        </Menu>
        <SideMenu>
          <li>
            <Image src={logo} alt="logo"></Image>
          </li>
          <li>
            <GiHamburgerMenu size="30" onClick={showSidebar} />
          </li>
        </SideMenu>
        <SideBar active={activeSidebar}>
          <StyledSearch>
            <MdSearch size="20" color={colors.lightGrey} />
            <input
              type="text"
              placeholder="Search by name"
              value={searchText}
              onChange={(e) =>
                setSearchInput({
                  searchText: e.target.value,
                  dirtyInput: false,
                })
              }
            />
          </StyledSearch>
          <StyledButton color={colors.green} onClick={showModal}>
            Add a photo
          </StyledButton>
        </SideBar>
        {(activeSidebar || activeModal) && (
          <BackgroundOnSideMenu onClick={hideSidebar} />
        )}
      </StyledHeaderMenu>
      <Modal
        active={activeModal}
        hideModal={hideModal}
        handleOnSubmit={handleOnSubmit}
        handleSubmit={handleSubmit}
        setValue={setValue}
        register={register}
        errors={errors}
      ></Modal>
    </>
  );
};
