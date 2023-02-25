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
        <div className="card-style">
            <div className="social-link-card">
                <a href={link} target={target} rel={rel}>
                    {logo}
                    <QRCode value={link} className="qrcode-social-link" />
                    {icon}
                    <p>{txtLink}</p>
                </a>
            </div>
        </div>
    )
}

export default SocialLink;