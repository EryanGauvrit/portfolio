
function ContentHome({ title, content, link, pp }) {

    return (
        <article>
            <h2>{title} {pp}</h2>
            <p>{content}</p>
            {link}
        </article>
    )
}

export default ContentHome;