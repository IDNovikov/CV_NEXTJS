import { Card, Stack, Text } from "@/UI/UI";
import { InviteForm } from "./InviteForm";

export const Case = () => {
  return (
    <div className="caseComp">
      <div>
        <p>
          <Text color="white" isParagraph={true} margin="0px 0 10px 0">
            Имею высшее техническое образование, а также опыт разработки тех.
            документации (инструкции, бюллетени). Занимаюсь frontend-разработкой
            с 2022 года. Умею работать в команде и эффективно взаимодействовать
            с коллегами
          </Text>
        </p>
        <p>
          <Text color="white" isParagraph={true} margin="10px 0">
            Реализовывал проекты с нуля: разрабатывал серверную часть с
            собственной CMS и JWT-авторизацией. Обеспечивал полный цикл
            разработки — от проектирования архитектуры сервера до финального
            деплоя. Могу самостоятельно находить и принимать оптимальные
            решения.
          </Text>
        </p>
        <p>
          <Text color="white" isParagraph={true} margin="10px 0">
            В партнерстве с дизайнером создаю уникальные и лаконичные
            персональные проекты. Также работаю напрямую с клиентами: ищу их,
            обсуждаю задачи и учитываю все пожелания.
          </Text>
        </p>

        <Card margin="10px 0">
          <Text color="white" size={20}>
            Fullstack Engineer
          </Text>
          <Text color="white" opacity={"70%"} margin="9px 0">
            стартап проект
          </Text>
          <Text color="white" opacity={"70%"} margin="5px 0 5px 8px">
            • проектирование архитектуры
          </Text>
          <Text color="white" opacity={"70%"} margin="5px 0 5px 8px">
            • клиент-серверное взаимодействие
          </Text>

          <div style={{ display: "flex", flexWrap: "wrap" }}>
            <Stack margin={"10px"}>
              <Text color="black" opacity={"70%"}>
                Next 13+
              </Text>
            </Stack>
            <Stack margin={"10px"}>
              <Text color="black" opacity={"70%"}>
                TypeScript
              </Text>
            </Stack>
            <Stack margin={"10px"}>
              <Text color="black" opacity={"70%"}>
                Tanstack Query
              </Text>
            </Stack>
            <Stack margin={"10px"}>
              <Text color="black" opacity={"70%"}>
                WebSocket
              </Text>
            </Stack>
          </div>
        </Card>

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
            </Stack>
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
            topmusicbot.com
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
        <InviteForm />
        <Card fill={true} margin="20px 0">
          <Text color="white" opacity={"70%"}>
            Тут мог быть ваш кейс...|
          </Text>
        </Card>
      </div>
    </div>
  );
};
