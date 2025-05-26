import classes from './Footer.module.css';

function Footer(props:any) {
    return (
        <footer className={classes.footer}>
            <div className={classes.text}>
                &copy; Awdos Team
            </div>
        </footer>
    );
}

export default Footer;