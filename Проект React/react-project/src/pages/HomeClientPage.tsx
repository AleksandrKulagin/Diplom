import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ResultCalculate from "../components/ResultCalculate";
import { Helmet } from "react-helmet-async";

function HomeClientPage() {
  const [showCalcResult, setShowCalcResult] = useState(false);
  const [deviceType, setDeviceType] = useState("");
  const [deviceModel, setDeviceModel] = useState("");
  const [serviceType, setServiceType] = useState("");
  const [error, setError] = useState("");
  const [deviceTypeError, setDeviceTypeError] = useState(false);
  const [deviceModelError, setDeviceModelError] = useState(false);
  const [serviceTypeError, setServiceTypeError] = useState(false);

  useEffect(() => {
    fetch("/api/devices.json")
      .then((response) => response.json())
      .catch((error) => console.error("Ошибка загрузки данных:", error));
  }, []);

  const handleCalcClick = () => {
    let hasError = false;
    if (!deviceType) {
      setDeviceTypeError(true);
      hasError = true;
    } else {
      setDeviceTypeError(false);
    }
    if (!deviceModel) {
      setDeviceModelError(true);
      hasError = true;
    } else {
      setDeviceModelError(false);
    }
    if (!serviceType) {
      setServiceTypeError(true);
      hasError = true;
    } else {
      setServiceTypeError(false);
    }

    if (hasError) {
      setError("Пожалуйста, заполните все поля!");
      return;
    }

    setError("");
    setShowCalcResult(true);
  };

  const handleFieldChange = () => {
    setShowCalcResult(false);
    setError("");
    setDeviceTypeError(false);
    setDeviceModelError(false);
    setServiceTypeError(false);
  };

  return (
    <>
      <Helmet title="PRO Ремонт - сеть сервисных центров" />
      <Header />
      <main className="main-block">
        <div className="slider">
          <img src="assets/images/Others/Слайдер_слайд1.png" alt="" />
        </div>
        <div className="about">
          <p className="about-head">
            PRO Ремонт - это сеть сервисных центров по всей стране
          </p>
          <p className="about-info-header">
            Ремонтируем смартфоны, планшеты, ноутбуки быстро и с официальной
            гарантией
          </p>
        </div>
        {/*Блок наши преимущества*/}
        <div className="privileges">
          <p id="our-privileges">Наши преимущества</p>
          <div className="privileges-blocks">
            <div className="privileges-block">
              <img
                src="assets/images/Диагностика.png"
                alt=""
                draggable="false"
              />
              <div className="privileges-block-text">
                <div className="privileges-head">
                  <span>Бесплатная диагностика</span>
                </div>
                <span className="privileges-description">
                  Перед выполнением ремонта
                </span>
              </div>
            </div>
            <div className="privileges-block">
              <img src="assets/images/Срочно.png" alt="" draggable="false" />
              <div className="privileges-block-text">
                <div className="privileges-head">
                  <span>Срочный ремонт</span>
                </div>
                <span className="privileges-description">
                  Ремонт от 15 минут
                </span>
              </div>
            </div>
            <div className="privileges-block">
              <img
                src="assets/images/Специалист.png"
                alt=""
                draggable="false"
              />
              <div className="privileges-block-text">
                <div className="privileges-head">
                  <span>Опытные специалисты</span>
                </div>
                <span className="privileges-description">
                  С опытом работы более 10 лет
                </span>
              </div>
            </div>
            <div className="privileges-block">
              <img src="assets/images/Чек.png" alt="" draggable="false" />
              <div className="privileges-block-text">
                <div className="privileges-head">
                  <span>Низкие цены</span>
                </div>
                <span className="privileges-description">
                  Качество доступное каждому
                </span>
              </div>
            </div>
            <div className="privileges-block">
              <img src="assets/images/Ремонт.png" alt="" draggable="false" />
              <div className="privileges-block-text">
                <div className="privileges-head">
                  <span>Оригинальные запчасти</span>
                </div>
                <span className="privileges-description">
                  Комплектующие от производителя
                </span>
              </div>
            </div>
            <div className="privileges-block">
              <img
                src="assets/images/Гарантия.png"
                alt=""
                draggable="false"
              />
              <div className="privileges-block-text">
                <div className="privileges-head">
                  <span>Предоставление гарантии</span>
                </div>
                <span className="privileges-description">
                  Гарантия на услуги до 1 года
                </span>
              </div>
            </div>
          </div>
        </div>
        {/*Услуги ремонта*/}
        <div className="uslugi">
          <p className="text-uslugi" id="yakor">
            Наши сервисные центры предлагают своим клиентам
            <br />
            услуги ремонта <span className="difficulty">ЛЮБОЙ СЛОЖНОСТИ</span>
          </p>
          <div className="tiles-uslugi">
            <div className="tile-usluga">
              <p className="phones">
                Ремонт
                <br />
                смартфонов
              </p>
              <img
                src="assets/images/Смартфон.png"
                alt=""
                className="img-uslugi"
                draggable="false"
              />
            </div>
            <div className="tile-usluga">
              <p className="phones">
                Ремонт
                <br />
                планшетов
              </p>
              <img
                src="assets/images/Планшет.png"
                alt=""
                className="img-uslugi"
                draggable="false"
              />
            </div>
            <div className="tile-usluga">
              <p className="phones">
                Ремонт
                <br />
                ноутбуков
              </p>
              <img
                src="assets/images/Ноутбук.png"
                alt=""
                className="img-uslugi"
                draggable="false"
              />
            </div>
            <div className="tile-usluga">
              <p className="phones">
                Продажа
                <br />
                запчастей
              </p>
              <img
                src="assets/images/Запчасти.png"
                alt=""
                className="img-uslugi"
                draggable="false"
              />
            </div>
            <div className="tile-usluga">
              <p className="phones">
                Продажа
                <br />
                аксессуаров
              </p>
              <img
                src="assets/images/Аксессуары.png"
                alt=""
                className="img-uslugi"
                draggable="false"
              />
            </div>
          </div>
        </div>
        {/*Процесс ремонта устройства*/}
        <div className="repair-process">
          <p id="repair-header">Процесс ремонта устройства</p>
          <div className="repair-process-points">
            {/*Пункты*/}
            <div className="point">
              <div className="big-number-point">
                <div className="big-number-point-digit process">
                  <p>1</p>
                </div>
                <div className="point-info">
                  <div className="point-header">
                    <p>Заявка</p>
                  </div>
                  <div className="point-description">
                    <p>
                      Вы оставляете заявку на сайте или приносите свое
                      устройство в любой из
                      <br />
                      наших сервисных центров
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="point">
              <div className="big-number-point">
                <div className="big-number-point-digit process">
                  <p>2</p>
                </div>
                <div className="point-info">
                  <div className="point-header">
                    <p>Диагностика</p>
                  </div>
                  <div className="point-description">
                    <p>
                      Мы проводим диагностику устройства для выявления
                      дефектов
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="point">
              <div className="big-number-point">
                <div className="big-number-point-digit process">
                  <p>3</p>
                </div>
                <div className="point-info">
                  <div className="point-header">
                    <p>Расчет стоимости</p>
                  </div>
                  <div className="point-description">
                    <p>
                      Рассчитываем стоимость ремонта в соответствии с ценой
                      оказываемой услуги
                      <br />и возможными акциями
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="point">
              <div className="big-number-point">
                <div className="big-number-point-digit process">
                  <p>4</p>
                </div>
                <div className="point-info">
                  <div className="point-header">
                    <p>Ремонт</p>
                  </div>
                  <div className="point-description">
                    <p>
                      Выполняем работу быстро и качественно, используя только
                      оригинальные детали
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*Блок Расчет стоимости ремонта (Калькулятор)*/}
        <div className="calc-repair">
          <p id="label-calc">Расчет стоимости ремонта устройства</p>
          <div className="calc-fields">
            <div className="type-device">
              <select
                className={`select-type-your-device ${
                  deviceTypeError ? "error" : ""
                }`}
                name="choose-type-your-device"
                value={deviceType}
                onChange={(e) => {
                  setDeviceType(e.target.value);
                  handleFieldChange();
                }}
              >
                <option value="">Выберите тип устройства</option>
                <option value="Смартфон">Смартфон</option>
                <option value="Планшет">Планшет</option>
                <option value="Ноутбук">Ноутбук</option>
              </select>
            </div>
            <div className="brand-and-model-device">
              <input
                className={`search-model-your-device ${
                  deviceModelError ? "error" : ""
                }`}
                type="search"
                placeholder="Введите бренд и модель устройства"
                value={deviceModel}
                onChange={(e) => {
                  setDeviceModel(e.target.value);
                  handleFieldChange();
                }}
              />
            </div>
            <div className="service">
              <select
                className={`select-choose-service ${
                  serviceTypeError ? "error" : ""
                }`}
                name="choose-service"
                value={serviceType}
                onChange={(e) => {
                  setServiceType(e.target.value);
                  handleFieldChange();
                }}
              >
                <option value="">Выберите услугу</option>
                <option value="Диагностика">Диагностика</option>
                <option value="Замена дисплея">Замена дисплея</option>
                <option value="Замена аккумулятора">Замена аккумулятора</option>
              </select>
            </div>
            <button className="btn-calc" onClick={handleCalcClick}>
              Рассчитать
            </button>
          </div>
          {error && <div className="error-message">{error}</div>}
          {showCalcResult && (
            <div className="btn-calc-result">
              <ResultCalculate
                deviceType={deviceType}
                deviceModel={deviceModel}
                serviceType={serviceType}
              />
            </div>
          )}
        </div>
        {/*Описание работы с калькулятором*/}
        <div className="calc-fields-process">
          <div className="point">
            <div className="big-number-point-rem">
              <div className="big-number-point-digit">
                <p>1</p>
              </div>
              <div className="point-info">
                <div className="point-description">
                  <p>
                    Выберите тип устройства.
                    <br />
                    Это может быть телефон, планшет или ноутбук.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="point">
            <div className="big-number-point-rem">
              <div className="big-number-point-digit">
                <p>2</p>
              </div>
              <div className="point-info">
                <div className="point-description">
                  <p>
                    Найдите бренд и модель
                    <br />в списке. Если вашего устройства нет в списке, к
                    сожалению, мы не сможем его отремонтировать.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="point">
            <div className="big-number-point-rem">
              <div className="big-number-point-digit">
                <p>3</p>
              </div>
              <div className="point-info">
                <div className="point-description">
                  <p>
                    Выберите нужную услугу
                    <br />
                    из списка или пункт "Диагностика", если нужна помощь.
                    Наши мастера помогут вам определить неисправность.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="point">
            <div className="big-number-point-rem">
              <div className="big-number-point-digit">
                <p>4</p>
              </div>
              <div className="point-info">
                <div className="point-description">
                  <p>
                    Заполнив все поля, появится информация о наличии услуги
                    и возможность
                    <br />
                    записи на услугу в выбранном филиале.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*Блок маркетинга*/}
        <div className="marketing">
          <div className="market">
            <p className="header-market-left">
              Умеете ремонтировать
              <br />
              самостоятельно?
            </p>
            <p className="header-market-right">
              Нужны
              <br />
              аксессуары?
            </p>
            <div className="market-img-text-button">
              <img
                src="assets/images/Корзина маркет_полная.png"
                alt=""
                draggable="false"
              />
              <div className="market-text">
                <p>
                  Загляните к нам в <span>Маркет</span>
                  <br />
                  <br />
                  Там вы найдете все комплектующие и аксессуары для ваших
                  устройств
                </p>
                <div className="go-market">
                  <button className="btn-go-market">
                    <div className="btn-go-market-text-and-image">
                      <p>Перейти в маркет</p>
                      <img
                        src="assets/images/Двойная стрелка вправо.png"
                        alt=""
                        draggable="false"
                      />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="work-and-sales">
            <div className="work">
              <div className="work-text">
                <p className="work-title">Хочешь работать в нашей команде?</p>
                <p className="work-description">
                  Заполни заявку и мы свяжемся с тобой
                </p>
              </div>
              <div className="work-image-and-button">
                <div className="work-image">
                  <img
                    src="assets/images/Сотрудники_карьера.png"
                    alt=""
                    draggable="false"
                  />
                </div>
                <button className="btn-work">Подробнее</button>
              </div>
            </div>
            <div className="sales">
              <img src="assets/images/Акция.png" alt="" draggable="false" />
              <p className="sales-title">Акции и скидки</p>
              <button className="btn-sales">Посмотреть</button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default HomeClientPage;

