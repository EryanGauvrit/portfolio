import QRCode from "react-qr-code";

function SocialLink({ name, link, logo, icon }) {

    let txtLink = '';
    let target = '';
    let rel = '';

    if (name === 'mail') {
        txtLink = 'Envoyez-moi un mail ';
        target = '';
        rel = '';
    } else {
        txtLink = 'Aller sur ma page ' + name;
        target = "_blank";
        rel = 'noreferrer';
    };

    return (
        <a href={link} target={target} rel={rel} className="social-link-card">
            {logo}
            <QRCode value={link} className="qrcode-social-link" />
            {icon}
            <p>{txtLink}</p>
        </a>
    )
}

export default SocialLink;