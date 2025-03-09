import React, { useState } from "react";

export const InviteForm = () => {
  const [name, setName] = useState(null);
  const [contact, setContact] = useState(null);
  const [isCorrectName, setIsCorrectName] = useState(null);
  const [isCorrectContact, setIsCorrectContact] = useState(null);
  const [isSend, setIsSend] = useState(false);

  const makeInvite = () => {
    const invite = {
      name: name,
      contact: contact,
    };
    sendInvite(invite).then((res) => setIsSend(true));
  };

  const validateForm = (name, contact) => {
    name == null || name == ""
      ? setIsCorrectName(false)
      : setIsCorrectName(true);
    contact == null || contact == ""
      ? setIsCorrectContact(false)
      : setIsCorrectContact(true);
    if (isCorrectName == true && isCorrectContact == true) {
      return makeInvite();
    }
  };

  return (
    <Card margin="10px 0" minHeight="237px">
      {isSend ? (
        <>
          <Medium color="white" size="20px" margin="auto 15px" align="center">
            Спасибо Вам за приглашение, в скором времения я дам обратную связь
            :)
          </Medium>
        </>
      ) : (
        <>
          <Medium color="white" size="20px" margin="10px auto" align="center">
            Пригласить на собеседование
          </Medium>
          <form>
            <Input
              borderColor={isCorrectName}
              margin="20px auto"
              type="text"
              placeholder={"Ваше имя..."}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              borderColor={isCorrectContact}
              margin="20px auto"
              type="text"
              placeholder={"Ваш контакт..."}
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />
          </form>

          <Button
            onClick={() => validateForm(name, contact)}
            margin="10px auto"
          >
            <Regular color="black" opacity={"70%"} margin="5px 0 5px 8px">
              Отправить
            </Regular>
          </Button>
        </>
      )}
    </Card>
  );
};
