import React from "react";
// Providers
import { ErrorMessage } from "@hookform/error-message";
// Styled components
import {
  StyledModal,
  ModalGroup,
  Group,
  GroupActions,
} from "@styles/components/modal";
import { StyledButton } from "@styles/shared/button";
import { colors } from "@styles/variables/colors";
import { Title } from "@styles/shared/title";
import {
  UseFormHandleSubmit,
  FieldValues,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form/dist";

interface ModalProps {
  isDeleteModal?: boolean;
  active?: boolean | null;
  hideModal?: () => void;
  handleOnSubmit: (data: any) => void;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
  register: UseFormRegister<FieldValues>;
  errors: any;
}

export const Modal = ({
  isDeleteModal = false,
  active = null,
  hideModal,
  handleOnSubmit,
  handleSubmit,
  setValue,
  register,
  errors,
}: ModalProps) => {
  return (
    <StyledModal active={active}>
      {isDeleteModal ? (
        <ModalGroup onSubmit={handleSubmit(handleOnSubmit)}>
          <Title size="sm" weight={true} color={colors.red}>
            Are you sure?
          </Title>
          <Group>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              {...register("password", {
                required: "This is required.",
                minLength: {
                  value: 8,
                  message: "Must be have min 8 characters",
                },
              })}
              onChange={async (e) => setValue("password", e.target.value)}
            />
            <ErrorMessage
              errors={errors}
              name="password"
              render={({ message }) => <span>{message}</span>}
            />
          </Group>
          <GroupActions>
            <StyledButton
              type="button"
              color={colors.lightGrey}
              onClick={hideModal}
            >
              Cancel
            </StyledButton>
            <StyledButton type="submit" color={colors.red}>
              Delete
            </StyledButton>
          </GroupActions>
        </ModalGroup>
      ) : (
        <ModalGroup onSubmit={handleSubmit(handleOnSubmit)}>
          <Title size="sm" weight={true} color={colors.green}>
            Add new photo
          </Title>
          <Group>
            <label htmlFor="name">Label</label>
            <input
              type="text"
              {...register("name", {
                required: "This is required.",
                maxLength: {
                  value: 100,
                  message: "Label must content a max of 100 characters.",
                },
              })}
              placeholder="Brief photo description"
              onChange={async (e) => setValue("name", e.target.value)}
            />
            <ErrorMessage
              errors={errors}
              name="name"
              render={({ message }) => <span>{message}</span>}
            />
          </Group>
          <Group>
            <label htmlFor="photoURL">Photo URL</label>
            <input
              type="text"
              {...register("photoURL", {
                required: "This is required.",
                pattern: {
                  value:
                    /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/,
                  message: "This must be an URL.",
                },
              })}
              placeholder="https//images.unplash.com/photo..."
              onChange={async (e) => setValue("photoURL", e.target.value)}
            />
            <ErrorMessage
              errors={errors}
              name="photoURL"
              render={({ message }) => <span>{message}</span>}
            />
          </Group>
          <Group>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              {...register("password", {
                required: "This is required.",
                minLength: {
                  value: 8,
                  message: "Must be have min 8 characters",
                },
              })}
              onChange={async (e) => setValue("password", e.target.value)}
            />
            <ErrorMessage
              errors={errors}
              name="password"
              render={({ message }) => <span>{message}</span>}
            />
          </Group>
          <GroupActions>
            <StyledButton
              type="button"
              color={colors.lightGrey}
              onClick={hideModal}
            >
              Cancel
            </StyledButton>
            <StyledButton type="submit" color={colors.green}>
              Submit
            </StyledButton>
          </GroupActions>
        </ModalGroup>
      )}
    </StyledModal>
  );
};
