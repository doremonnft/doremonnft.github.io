import React from 'react';
import styles from '../css/Roadmap.module.scss';

const DashboardButton = () => {
    return (
        <div className={styles.dashboardButton}>
            <a href="https://dashboard.chippiesnft.com" target="_blank" rel="noreferrer">
                <img className={styles.whitepaperPdf} src={require("../assets/AI Dashboard.png")} alt="dashboard"></img>
            </a>
        </div>
    );
};

export default DashboardButton;