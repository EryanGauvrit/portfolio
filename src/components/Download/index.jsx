import pdf from '../../downloads/cv_eryan_gauvrit.pdf';
import QRCode from "react-qr-code";

function Download() {

    return (
        <section className="download-bloc">
            <h2>Voici mon CV</h2>
            <QRCode value={pdf} className="qrcode-download" />
            <a href={pdf} title='CV Eryan Gauvrit' target="_blank" rel='noreferrer' >
                <p>Visualiser le cv au format PDF</p>
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
            <a href={pdf} title='CV Eryan Gauvrit' download >
                <p>Telecharger directement le cv</p>
                <i className="fa-solid fa-file-arrow-down"></i>
            </a>
        </section>
    )
}

export default Download;