import { useLocation } from "./LocationContext";
import { useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Input } from "@nextui-org/react";

interface ResultCalculateProps {
  deviceType: string;
  deviceModel: string;
  serviceType: string;
}

function ResultCalculate({ deviceType, deviceModel, serviceType }: ResultCalculateProps) {
  const { selectedCity, selectedFilial } = useLocation();

  // Modal state
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(1); // 1: form, 2: code, 3: order number
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const [code, setCode] = useState("");
  const [orderNumber, setOrderNumber] = useState("");
  const [formError, setFormError] = useState("");
  const [codeError, setCodeError] = useState("");

  const handleOpen = () => {
    setIsOpen(true);
    setStep(1);
    setName("");
    setSurname("");
    setPhone("");
    setCode("");
    setOrderNumber("");
    setFormError("");
    setCodeError("");
  };

  const handleFormSubmit = () => {
    if (!name || !surname || !phone) {
      setFormError("Пожалуйста, заполните все поля");
      return;
    }
    setFormError("");
    setStep(2);
  };

  const handleCodeSubmit = () => {
    if (!/^\d{4}$/.test(code)) {
      setCodeError("Введите 4 цифры");
      return;
    }
    setCodeError("");
    // Генерируем номер заказа из 10 цифр
    const num = Math.floor(1000000000 + Math.random() * 9000000000).toString();
    setOrderNumber(num);
    setStep(3);
  };

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
            Выбранный филиал: {" "}
            <span className="device-header-usluga-filial-adres">
              {selectedCity && selectedFilial ? `г. ${selectedCity}, ${selectedFilial}` : 'Выберите город и филиал'}
            </span>
          </span>
        </p>
      </div>
      <div className="result-info-usluga">
        <div className="usluga-price">
          <span>6 500Р</span>
        </div>
        <button className="device-order-available-button" onClick={handleOpen}>
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
      <Modal isOpen={isOpen} onOpenChange={setIsOpen} hideCloseButton={step === 3}>
        <ModalContent>
          {step === 1 && (
            <>
              <ModalHeader>Запись на ремонт</ModalHeader>
              <ModalBody>
                <div className="mb-2 text-sm text-gray-700">
                  <div>Город: <b>{selectedCity || "-"}</b></div>
                  <div>Адрес: <b>{selectedFilial || "-"}</b></div>
                  <div>Устройство: <b>{deviceType} {deviceModel}</b></div>
                  <div>Услуга: <b>{serviceType}</b></div>
                </div>
                <Input label="Имя" value={name} onChange={e => setName(e.target.value)} isRequired />
                <Input label="Фамилия" value={surname} onChange={e => setSurname(e.target.value)} isRequired />
                <Input label="Телефон" value={phone} onChange={e => setPhone(e.target.value)} isRequired type="tel" />
                {formError && <div className="text-red-500 text-xs mt-1">{formError}</div>}
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={handleFormSubmit}>
                  Подтвердить
                </Button>
              </ModalFooter>
            </>
          )}
          {step === 2 && (
            <>
              <ModalHeader>Подтвердите номер</ModalHeader>
              <ModalBody>
                <Input
                  label="Код из SMS"
                  value={code}
                  onChange={e => setCode(e.target.value.replace(/\D/g, "").slice(0, 4))}
                  maxLength={4}
                  isRequired
                  description="Введите 4 цифры, отправленные на ваш телефон"
                />
                {codeError && <div className="text-red-500 text-xs mt-1">{codeError}</div>}
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={handleCodeSubmit}>
                  Подтвердить
                </Button>
              </ModalFooter>
            </>
          )}
          {step === 3 && (
            <>
              <ModalHeader>Заказ оформлен!</ModalHeader>
              <ModalBody>
                <div className="text-center text-lg font-bold">Ваш номер заказа:</div>
                <div className="text-center text-2xl font-mono mt-2 mb-4">{orderNumber}</div>
                <div className="text-center text-green-600">Спасибо за обращение!</div>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={() => setIsOpen(false)}>
                  Закрыть
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}

export default ResultCalculate;