"use client";
import { Button, Card, Input, Text } from "@/UI/UI";
import React, { useCallback, useState } from "react";

export const InviteForm = () => {
  type FormState = {
    name: string;
    contact: string;
    isCorrectName: boolean | null;
    isCorrectContact: boolean | null;
    isSend: boolean | null;
  };

  const [formState, setFormState] = useState<FormState>({
    name: "",
    contact: "",
    isCorrectName: null,
    isCorrectContact: null,
    isSend: null,
  });

  const validateField = (value: string): boolean => value.trim() !== "";

  const handleChange = useCallback(
    (field: keyof Pick<FormState, "name" | "contact">) =>
      (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormState((prevState) => ({
          ...prevState,
          [field]: e.target.value,
        }));
      },
    []
  );

  const validateForm = (): boolean => {
    const isNameValid = validateField(formState.name);
    const isContactValid = validateField(formState.contact);

    setFormState((prevState) => ({
      ...prevState,
      isCorrectName: isNameValid,
      isCorrectContact: isContactValid,
    }));
    return isNameValid && isContactValid;
  };

  const sendInvite = async (invite: { name: string; contact: string }) => {
    try {
      await fetch("/api/mailer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(invite),
      });
      setFormState((prevState) => ({ ...prevState, isSend: true }));
    } catch (error) {
      setFormState((prevState) => ({ ...prevState, isSend: false }));
      console.error("Ошибка при отправке:", error);
    }
  };

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();

      if (validateForm()) {
        sendInvite({ name: formState.name, contact: formState.contact });
      }
    },
    [formState.name, formState.contact, validateForm]
  );

  return (
    <Card margin="10px 0" minHeight="237px">
      {formState.isSend ? (
        <Text color="white" size={20} margin="auto 15px" align="center">
          Спасибо за приглашение! В скором времени я дам обратную связь :)
        </Text>
      ) : (
        <>
          <Text color="white" size={20} margin="10px auto" align="center">
            Пригласить на собеседование
          </Text>
          <Input
            borderColor={formState?.isCorrectName}
            margin="20px auto"
            placeholder="Ваше имя..."
            onChange={handleChange("name")}
          />
          <Input
            borderColor={formState?.isCorrectContact}
            margin="20px auto"
            placeholder="Ваш контакт..."
            onChange={handleChange("contact")}
          />
          <Button padding="8px 12px" margin="10px auto" onClick={handleSubmit}>
            <Text color="black" opacity="70%">
              Отправить
            </Text>
          </Button>
        </>
      )}
    </Card>
  );
};
