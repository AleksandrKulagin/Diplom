interface ResultCalculateProps {
  deviceType: string;
  deviceModel: string;
  serviceType: string;
}

function ResultCalculate({ deviceType, deviceModel, serviceType }: ResultCalculateProps) {
  return (
    <div className="btn-calc-result">
      <img
        src="assets/images/Devices/Phones/Apple/Apple iPhone 14 Pro Max.png"
        alt={`${deviceType} ${deviceModel}`}
        draggable="false"
      />
      <div className="result-info-header">
        <p className="device-header">
          {deviceType} {deviceModel}
          <br />
          <span className="device-header-usluga">Услуга: </span>
          <span className="device-header-usluga-text">{serviceType}</span>
          <br />
          <span className="device-header-usluga-filial">
            Доступно в выбранном филиале
            <br />
            Выбранный филиал:{" "}
            <span className="device-header-usluga-filial-adres">
              г. Омск, ул. Ленина, 1
            </span>
          </span>
        </p>
      </div>
      <div className="result-info-usluga">
        <div className="usluga-price">
          <span>6 500Р</span>
        </div>
        <button className="device-order-available-button">
          <div className="inside-button">
            <span>Записаться</span>
          </div>
        </button>
        <div className="text-under-order-button">
          <p>
            Оплата производится
            <br />
            после оказания услуги
          </p>
        </div>
      </div>
    </div>
  );
}

export default ResultCalculate;