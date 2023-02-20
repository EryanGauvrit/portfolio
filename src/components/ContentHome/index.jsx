
function ContentHome({ title, content, link }) {

    return (
        <article>
            <h2>{title}</h2>
            <p>{content}</p>
            {link}
        </article>
    )
}

export default ContentHome;