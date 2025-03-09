import React from "react";
import telegram from "../../public/assets/Telegram.svg";
import mail from "../../public/assets/Mail.svg";
import git from "../../public/assets/Git.svg";
import {
  Arrow,
  Button,
  LinkButton,
  LinkDownload,
  Text,
  TextName,
} from "@/UI/UI";
import Image from "next/image";

export const Main = () => {
  return (
    <div className="mainComp">
      <TextName color="white" size={32}>
        Илья Новиков
      </TextName>
      <Text color="white" size={20} margin="25px 0">
        Frontend (Fullstack) Engineer
      </Text>
      <Text
        color="white"
        opacity={"70%"}
        isParagraph={true}
        size={16}
        margin="25px 0"
      >
        Я увлечен созданием целостных проектов, ориентированных на качественный
        пользовательский опыт.
      </Text>

      <Button margin="35px 0" padding={"10px"}>
        <LinkDownload>
          <Text color="black" margin={"10px 20px"}>
            Смотреть резюме
          </Text>
        </LinkDownload>
      </Button>

      <div className="row">
        <LinkButton link="https://t.me/NOILDM">
          <Image src={telegram} alt="tg" width={75} />
        </LinkButton>
        <LinkButton link="https://github.com/IDNovikov">
          <Image src={git} alt="git" width={75} />
        </LinkButton>
        <LinkButton link="mailTo:crew665@yandex.ru">
          <Image src={mail} alt="mail" width={75} />
        </LinkButton>
      </div>

      <Arrow transform={"rotate(0deg)"} bottom={"10vh"} />
    </div>
  );
};
