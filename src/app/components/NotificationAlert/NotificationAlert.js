import React from 'react';
import './notification-alert.scss';
import Button from '../ui/Button/Button';

const NotificationAlert = (props) => {

    const { title, acceptClick, cancelClick } = props;
    const alert = props.alert || 'Изменения нельзя отменить';

    return (
        <article className="notification-alert">
            <div className="notification-alert__overflow"></div>
            <aside className="notification-alert__form">
                <h5 className="notification-alert__title">{ title }</h5>
                <p className="notification-alert__info-alert">{ alert }</p>
                <div className="notification-alert__controlls">
                    <Button classNames="button" clickEvent={acceptClick} title="Да" />
                    <Button classNames="button" clickEvent={cancelClick} title="Нет" />
                </div>
            </aside>
        </article>
    );
}

export default NotificationAlert;