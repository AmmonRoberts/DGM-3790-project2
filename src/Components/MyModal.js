import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { makeStyles } from '@material-ui/core/styles';
import Translations from './Translations';

const MyModal = (props) => {

    const useStyles = makeStyles((theme) => ({
        modal: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        paper: {
            backgroundColor: theme.palette.background.paper,
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
            minWidth: "400px"
        },
    }));

    const classes = useStyles();

    return (<Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={props.openState}
        onClose={props.handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
            timeout: 500,
        }}
    >
        <Fade in={props.openState}>
            <div className={classes.paper}>
                <h2 id="transition-modal-title"> {props.country.name}</h2>
                <p><img src={`https://www.countryflags.io/${props.country.iso2}/shiny/64.png`} /></p>
                <h4 className={classes.language_list}>Translations:</h4>
                <Translations translations={props.country.translations} />
            </div>
        </Fade>
    </Modal>
    )
}

export default MyModal;