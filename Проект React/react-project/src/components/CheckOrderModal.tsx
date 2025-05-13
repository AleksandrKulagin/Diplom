import { useState } from 'react';

interface CheckOrderModalProps {
    onClose: () => void;
}

function CheckOrderModal({ onClose }: CheckOrderModalProps) {
    const [orderNumber, setOrderNumber] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [orderStatus, setOrderStatus] = useState<string | null>(null);

    const validateOrderNumber = (number: string) => {
        return /^\d{10}$/.test(number);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setOrderStatus(null);

        if (!validateOrderNumber(orderNumber)) {
            setError('Номер заказа должен состоять из 10 цифр');
            return;
        }

        setLoading(true);
        try {
            const response = await fetch('/api/check-order', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ orderNumber }),
            });

            if (!response.ok) {
                throw new Error('Ошибка при проверке заказа');
            }

            const data = await response.json();
            setOrderStatus(data.status);
        } catch (err) {
            setError('Произошла ошибка при проверке заказа');
            console.error('Error checking order:', err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content-order">
                <button className="modal-close" onClick={onClose}>×</button>
                <h2>Проверка статуса заказа</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input
                            type="text"
                            id="orderNumber"
                            value={orderNumber}
                            onChange={(e) => setOrderNumber(e.target.value)}
                            placeholder="Введите номер заказа (10 цифр)"
                            maxLength={10}
                            disabled={loading}
                        />
                    </div>
                    {error && <div className="modal-error-message-check">{error}</div>}
                    {orderStatus && (
                        <div className="order-status">
                            <h3>Статус заказа:</h3>
                            <p>{orderStatus}</p>
                        </div>
                    )}
                    <button type="submit" className="submit-button" disabled={loading}>
                        {loading ? 'Проверка...' : 'Проверить'}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default CheckOrderModal; 