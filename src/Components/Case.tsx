import { Arrow, Card, Stack, Text } from "@/UI/UI";

export const Case = () => {
  return (
    <div className="caseComp">
      <Arrow transform="rotate(180deg)" top={"50px"} />

      <Text color="white" isParagraph={true} margin="0px 0 10px 0">
        Опыт frontend-разработки с ноября 2022 года, включая год в команде
        интерактивного образовательного проекта chevostik.ru. Занимался
        рефакторингом кода, устранением багов и модернизацией сервиса.
      </Text>

      <Text color="white" isParagraph={true} margin="10px 0">
        Реализовал интернет-магазин с нуля: разработал серверную часть на
        Node.js и PostgreSQL, внедрил админ-панель и JWT-авторизацию. Обеспечил
        полный цикл разработки — от архитектуры сервера до финального деплоя.
      </Text>

      <Text color="white" isParagraph={true} margin="10px 0">
        Разрабатывал адаптивные лендинги по макетам Figma с последующим деплоем.
        Выполнил полный цикл — от фронтенд-реализации до настройки
        инфраструктуры для развертывания.
      </Text>

      <Card margin="10px 0">
        <Text color="white" size={20}>
          Frontend Engineer
        </Text>
        <Text color="white" opacity={"70%"} margin="9px 0">
          коммерческий опыт chevostik.ru
        </Text>
        <Text color="white" opacity={"70%"} margin="5px 0 5px 8px">
          • поддержка жизнеспособности проекта
        </Text>
        <Text color="white" opacity={"70%"} margin="5px 0 5px 8px">
          • исправление багов
        </Text>
        <Text color="white" opacity={"70%"} margin="5px 0 5px 8px">
          • модернизация
        </Text>

        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <Stack margin={"10px"}>
            <Text color="black" opacity={"70%"}>
              React
            </Text>
          </Stack>
          <Stack margin={"10px"}>
            <Text color="black" opacity={"70%"}>
              Redux
            </Text>
          </Stack>
          <Stack margin={"10px"}>
            <Text color="black" opacity={"70%"}>
              Media content
            </Text>
          </Stack>
          <Stack margin={"10px"}>
            <Text color="black" opacity={"70%"}>
              JS
            </Text>
          </Stack>
          <Stack margin={"10px"}>
            <Text color="black" opacity={"70%"}>
              CSS
            </Text>
          </Stack>
        </div>
      </Card>
      <Card margin="20px 0">
        <Text color="white" size={20}>
          Web Engineer
        </Text>
        <Text color="white" opacity={"70%"} margin="9px 0">
          интернет-магазин Spear Fishing (Cyprus, Limassol)
        </Text>
        <Text color="white" opacity={"70%"} margin="5px 0 5px 8px">
          • разработка клиентской и серверной части
        </Text>
        <Text color="white" opacity={"70%"} margin="5px 0 5px 8px">
          • взаимодействие с реляционной БД
        </Text>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <Stack margin={"10px"}>
            <Text color="black" opacity={"70%"}>
              React
            </Text>
          </Stack>
          <Stack margin={"10px"}>
            <Text color="black" opacity={"70%"}>
              MobX
            </Text>
          </Stack>
          <Stack margin={"10px"}>
            <Text color="black" opacity={"70%"}>
              Node.js
            </Text>
          </Stack>
          <Stack margin={"10px"}>
            <Text color="black" opacity={"70%"}>
              PostgreSQL
            </Text>
          </Stack>
          <Stack margin={"10px"}>
            <Text color="black" opacity={"70%"}>
              Sequelize
            </Text>
          </Stack>{" "}
          <Stack margin={"10px"}>
            <Text color="black" opacity={"70%"}>
              JWT
            </Text>
          </Stack>
          <Stack margin={"10px"}>
            <Text color="black" opacity={"70%"}>
              Docker
            </Text>
          </Stack>
        </div>
      </Card>
      <Card margin="20px 0">
        <Text color="white" size={20}>
          Frontend Engineer
        </Text>
        <Text color="white" opacity={"70%"} margin="9px 0">
          фриланс опыт
        </Text>
        <Text color="white" opacity={"70%"} margin="3px 0 3px 8px">
          новиков.tech
        </Text>
        <Text color="white" opacity={"70%"} margin="3px 0 3px 8px">
          novikovapsy.ru
        </Text>
        <Text color="white" opacity={"70%"} margin="5px 0 5px 8px">
          • разработка по макетам Figma
        </Text>{" "}
        <Text color="white" opacity={"70%"} margin="5px 0 5px 8px">
          • деплой
        </Text>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <Stack margin={"10px"}>
            <Text color="black" opacity={"70%"}>
              React
            </Text>
          </Stack>
          <Stack margin={"10px"}>
            <Text color="black" opacity={"70%"}>
              Vite
            </Text>
          </Stack>
          <Stack margin={"10px"}>
            <Text color="black" opacity={"70%"}>
              Figma
            </Text>
          </Stack>
          <Stack margin={"10px"}>
            <Text color="black" opacity={"70%"}>
              Styled-Components
            </Text>
          </Stack>
        </div>
      </Card>
      {/* <InviteForm /> */}
      <Card fill={true} margin="20px 0">
        <Text color="white" opacity={"70%"}>
          Тут мог быть ваш кейс...|
        </Text>
      </Card>
    </div>
  );
};
