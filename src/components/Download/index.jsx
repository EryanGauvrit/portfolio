import pdf from '../../downloads/cv_eryan_gauvrit.pdf';
import QRCode from "react-qr-code";

function Download() {

    return (
        <section className="download-bloc">
            <QRCode value={pdf} className="qrcode" />
            <a href={pdf} title='CV Eryan Gauvrit' target="_blank" rel='noreferrer' >Visualiser le cv au format PDF</a>
            <a href={pdf} title='CV Eryan Gauvrit' download >Telecharger directement le cv</a>
        </section>
    )
}

export default Download;