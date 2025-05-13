import { Helmet } from 'react-helmet-async'
import SidebarPortalMenu from '../components/SidebarPortalMenu'

function PortalOrders() {
    return (
        <>
            <Helmet title="Заказы" />
            <div className="body">
                <SidebarPortalMenu />
                <div className="main-display">
                    <div className="name-page">
                        <img src="/assets/images/Заказы_черный.png" alt="" draggable="false" />
                        <h1>Заказы</h1>
                        <div className="recent-orders">
                        <div className="header-and-table">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Номер заказа</th>
                                        <th>Тип заказа</th>
                                        <th>Статус заказа</th>
                                        <th>Обновлено</th>
                                        <th>Категория услуги</th>
                                        <th>Тип услуги</th>
                                        <th>Итого</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>№3025311723</td>
                                        <td>Ремонт</td>
                                        <td className="status-order"><div className="status-label new">Новый</div></td>
                                        <td>10.05.2025 12:00</td>
                                        <td>Ремонт смартфона</td>
                                        <td>Замена дисплея</td>
                                        <td><span className="table-order-price">6 500₽</span></td>
                                        <td className="block-details-link"><a href="#" className="details-link">Подробнее о заказе</a></td>
                                    </tr>
                                    <tr>
                                        <td>№1234567890</td>
                                        <td>Ремонт</td>
                                        <td className="status-order"><div className="status-label new">Новый</div></td>
                                        <td>30.03.2025 12:00</td>
                                        <td>Ремонт смартфона</td>
                                        <td>Замена</td>
                                        <td><span className="table-order-price">99 999₽</span></td>
                                        <td className="block-details-link"><a href="#" className="details-link">Подробнее о заказе</a></td>
                                    </tr>
                                    <tr>
                                        <td>№1234567890</td>
                                        <td>Ремонт</td>
                                        <td className="status-order"><div className="status-label new">Новый</div></td>
                                        <td>30.03.2025 12:00</td>
                                        <td>Ремонт смартфона</td>
                                        <td>Замена</td>
                                        <td><span className="table-order-price">99 999₽</span></td>
                                        <td className="block-details-link"><a href="#" className="details-link">Подробнее о заказе</a></td>
                                    </tr>
                                    <tr>
                                        <td>№9874561230</td>
                                        <td>Маркет</td>
                                        <td><div className="status-label working">В работе</div></td>
                                        <td>13.09.2025 14:27</td>
                                        <td>Ремонт ноутбука</td>
                                        <td>ПО</td>
                                        <td><span className="table-order-price">12 345₽</span></td>
                                        <td className="block-details-link"><a href="#" className="details-link">Подробнее о заказе</a></td>
                                    </tr>
                                    <tr>
                                        <td>№5555555555</td>
                                        <td>Ремонт</td>
                                        <td><div className="status-label cancel">Отменен</div></td>
                                        <td>22.02.2025 08:56</td>
                                        <td>Покупка запчастей</td>
                                        <td>Покупка</td>
                                        <td><span className="table-order-price">20 000₽</span></td>
                                        <td className="block-details-link"><a href="#" className="details-link">Подробнее о заказе</a></td>
                                    </tr>
                                    <tr>
                                        <td>№1234567890</td>
                                        <td>Ремонт</td>
                                        <td className="status-order"><div className="status-label new">Новый</div></td>
                                        <td>30.03.2025 12:00</td>
                                        <td>Ремонт смартфона</td>
                                        <td>Замена</td>
                                        <td><span className="table-order-price">99 999₽</span></td>
                                        <td className="block-details-link"><a href="#" className="details-link">Подробнее о заказе</a></td>
                                    </tr>
                                    <tr>
                                        <td>№3333333333</td>
                                        <td>Маркет</td>
                                        <td><div className="status-label ready">Готов к выдаче</div></td>
                                        <td>07.07.2025 17:09</td>
                                        <td>Покупка аксессуаров</td>
                                        <td>Покупка</td>
                                        <td><span className="table-order-price">6 500₽</span></td>
                                        <td className="block-details-link"><a href="#" className="details-link">Подробнее о заказе</a></td>
                                    </tr>
                                    <tr>
                                        <td>№1247376490</td>
                                        <td>Ремонт</td>
                                        <td><div className="status-label clarification">Уточнение</div></td>
                                        <td>01.01.2025 11:45</td>
                                        <td>Ремонт планшета</td>
                                        <td>Восстановление</td>
                                        <td><span className="table-order-price">33 987₽</span></td>
                                        <td className="block-details-link"><a href="#" className="details-link">Подробнее о заказе</a></td>
                                    </tr>
                                    <tr>
                                        <td>№3333333333</td>
                                        <td>Маркет</td>
                                        <td><div className="status-label ready">Готов к выдаче</div></td>
                                        <td>07.07.2025 17:09</td>
                                        <td>Покупка аксессуаров</td>
                                        <td>Покупка</td>
                                        <td><span className="table-order-price">6 500₽</span></td>
                                        <td className="block-details-link"><a href="#" className="details-link">Подробнее о заказе</a></td>
                                    </tr>
                                    <tr>
                                        <td>№1247376490</td>
                                        <td>Ремонт</td>
                                        <td><div className="status-label clarification">Уточнение</div></td>
                                        <td>01.01.2025 11:45</td>
                                        <td>Ремонт планшета</td>
                                        <td>Восстановление</td>
                                        <td><span className="table-order-price">33 987₽</span></td>
                                        <td className="block-details-link"><a href="#" className="details-link">Подробнее о заказе</a></td>
                                    </tr>
                                    <tr>
                                        <td>№5555555555</td>
                                        <td>Ремонт</td>
                                        <td><div className="status-label cancel">Отменен</div></td>
                                        <td>22.02.2025 08:56</td>
                                        <td>Покупка запчастей</td>
                                        <td>Покупка</td>
                                        <td><span className="table-order-price">20 000₽</span></td>
                                        <td className="block-details-link"><a href="#" className="details-link">Подробнее о заказе</a></td>
                                    </tr>
                                    <tr>
                                        <td>№5555555555</td>
                                        <td>Ремонт</td>
                                        <td><div className="status-label cancel">Отменен</div></td>
                                        <td>22.02.2025 08:56</td>
                                        <td>Покупка запчастей</td>
                                        <td>Покупка</td>
                                        <td><span className="table-order-price">20 000₽</span></td>
                                        <td className="block-details-link"><a href="#" className="details-link">Подробнее о заказе</a></td>
                                    </tr>
                                    <tr>
                                        <td>№9874561230</td>
                                        <td>Маркет</td>
                                        <td><div className="status-label working">В работе</div></td>
                                        <td>13.09.2025 14:27</td>
                                        <td>Ремонт ноутбука</td>
                                        <td>ПО</td>
                                        <td><span className="table-order-price">12 345₽</span></td>
                                        <td className="block-details-link"><a href="#" className="details-link">Подробнее о заказе</a></td>
                                    </tr>
                                    <tr>
                                        <td>№9874561230</td>
                                        <td>Маркет</td>
                                        <td><div className="status-label working">В работе</div></td>
                                        <td>13.09.2025 14:27</td>
                                        <td>Ремонт ноутбука</td>
                                        <td>ПО</td>
                                        <td><span className="table-order-price">12 345₽</span></td>
                                        <td className="block-details-link"><a href="#" className="details-link">Подробнее о заказе</a></td>
                                    </tr>
                                    <tr>
                                        <td>№9874561230</td>
                                        <td>Маркет</td>
                                        <td><div className="status-label working">В работе</div></td>
                                        <td>13.09.2025 14:27</td>
                                        <td>Ремонт ноутбука</td>
                                        <td>ПО</td>
                                        <td><span className="table-order-price">12 345₽</span></td>
                                        <td className="block-details-link"><a href="#" className="details-link">Подробнее о заказе</a></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PortalOrders