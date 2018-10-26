import React from 'react';
import Button from '../../components/ui/Button/Button';
import './homepage.scss';

export const HomePage = (props) => {

    const { welcome, updateWelcome } = props;

    const useStart = () => {
        updateWelcome(welcome.welcomeState);
    }

    var styles = {
        root: {
          display: "block"
        },
        homepage: {
        }
    }

    return (
        <div style={styles.homepage} className={`homepage container ${welcome.welcomeIsShow? '' : 'normal'}`}>
            <div className={`homepage__welcome ${welcome.welcomeIsShow ? 'show' : ''} `}>
                <h2>Добро пожаловать в Triplace!</h2>
                <p>Мы поможем Вам запомнить те места, которые вы хотите посетить!</p>
                <Button classNames="button button-welcome" clickEvent={useStart} title="Поехали!" />
            </div>
            <div className={`homepage__page ${welcome.welcomeIsShow ? '' : 'show'}`}>
                sadasd
            </div>
        </div>
    )
}
