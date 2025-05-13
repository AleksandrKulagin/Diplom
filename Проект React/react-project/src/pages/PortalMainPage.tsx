import { Link } from "react-router-dom";
import SidebarPortalMenu from "../components/SidebarPortalMenu";
import { Helmet } from "react-helmet-async";

function PortalMainPage() {
    return (
        <>
            <Helmet title="Портал сотрудников" />
            <div className="body">
                <SidebarPortalMenu />
                <div className="main-display">
                    <div className="name-page">
                        <img src="/assets/images/Главная_черный (Dashboard).png" alt="" draggable="false" />
                        <h1>Главная</h1>
                    </div>
                    <div className="blocks-stat">
                        <div className="block-stat">
                            <img src="/assets/images/Список.png" alt="" />
                            <div className="block-stat-text">
                                <div className="main-text">
                                    <span>Заказов за день</span>
                                </div>
                                <div className="stat-of-day">
                                    <span>123</span>
                                </div>
                            </div>
                        </div>
                        <div className="block-stat">
                            <img src="/assets/images/Выполнено.png" alt="" />
                            <div className="block-stat-text">
                                <div className="main-text">
                                    Выполнено
                                </div>
                                <div className="stat-of-day">
                                    123
                                </div>
                            </div>
                        </div>
                        <div className="block-stat">
                            <img src="/assets/images/Доход.png" alt="" />
                            <div className="block-stat-text">
                                <div className="main-text">
                                    Доход за день
                                </div>
                                <div className="stat-of-day">
                                    123 456 789 ₽
                                </div>
                            </div>
                        </div>
                        <div className="block-stat">
                            <img src="/assets/images/Человек (синий).png" alt="" />
                            <div className="block-stat-text">
                                <div className="main-text">
                                    Моя статистика
                                </div>
                                <div className="stat-of-day">
                                    <Link to='/portal/profile'>
                                        <button>Подробнее</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="recent-orders">
                        <div className="header-and-table">
                            <div className="top-table">
                                <span>Недавние заказы</span>
                                <Link to='/portal/orders'>
                                    <button>Все заказы</button>
                                </Link>
                            </div>
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
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="block-analytics">
                        <div className="analytics-header">
                            <span>Аналитика</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PortalMainPage;