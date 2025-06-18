const Contact = () => {

    return (
        <div className={`glass mb`}>
            <h1>Me contacter</h1>
            <div className="contact-container">
                <a className="contact">
                    <p>jeremy.grc69@gmail.com</p>
                </a>
                <a className="contact" href="https://www.linkedin.com/in/garciaj%C3%A9r%C3%A9my/">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg" className="icone"/>
                    <p>Jérémy Garcia</p>
                </a>
                <a className="contact" href="https://github.com/Jereeeemy">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" className="icone"/>
                    <p>Jereeeemy</p>
                </a>
            </div>
        </div>
    );
};

export default Contact;
