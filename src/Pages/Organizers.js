import './../Style/Organizers.css';

import moutcourtOrganizers from './../Images/moutcourt_organizers.jpeg';

const Organizers = () => {
  return (
    <div className="organizers-container">
      <h4 className="organizers-title">Об организаторах конкурса</h4>
      <p>
        Конкурс Moot Court Kazakhstan for High School организован основателем клуба GirlUP NIS –
        Арман Маржан при содействии НИШ ФМН г. Алматы.
      </p>
      <div className="organizers-image">
        <img src={moutcourtOrganizers} alt="moutcourt_organizers" />
      </div>
      <p>Клуб GirlUP NIS был создан на базе глобального движения Girl Up, поддерживаемого ООН.</p>
      <p>
        Moot Court Kazakhstan for High School – первый в истории Казахстана конкурс постановочного
        суда для учеников старшей школы. Идея создания этого конкурса возникла вследствие отсутствия
        возможностей для старшеклассников стать участниками существующих конкурсов Moot Court на
        территории Казахстана. До Moot Court Kazakhstan for High School все конкурсы Moot Court были
        организованы для студентов факультета права при университетах на территории Казахстана.
      </p>
      <p>
        Конкурс Moot Court Kazakhstan for High School впервые был проведен 25 марта 2022 года
        онлайн. В рамках конкурса было зарегистрировано 28 команд из различных регионов со всего
        Казахстана, такие как Нур-Султан, Алматы, Кокшетау, Талдыкорган, Павлодар и т.д. В
        результате отборочного тура в первый тур основного этапа конкурса вышло 6 команд.
        Победителями конкурса 25 марта 2022 года стала команда «Метида» из города Кокшетау.
      </p>
      <p>
        Кейс первой игры Moot Court Kazakhstan for High School был разработан международной
        юридической фирмой Signum Law. Для судейства конкурса были приглашены практикующие юристы
        международной юридической фирмы Signum Law и профессора-практики КазГЮУ им. М.С. Нарикбаева.
      </p>
      <p>
        Приглашаем всех желающих принять участие в последующих конкурсах Moot Court Kazakhstan for
        High School, которые будут проводиться ежегодно.
      </p>
    </div>
  );
};

export default Organizers;
