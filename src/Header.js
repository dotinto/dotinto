import './Header.css';

var data = {
  username: "dotinto",
}

function Header() {
   function copyText() {
      var discord = "dotinto#2140";

      var textField = document.createElement('textarea')
      textField.innerText = discord
      document.body.appendChild(textField)
      textField.select()
      document.execCommand('copy')
      textField.remove()
      alert("Discord copied to clipboard.")
   }

    return (
        <section className="main">
            <span className="name">{data.username}</span>
            <img onClick={copyText} src="https://static-00.iconduck.com/assets.00/discord-icon-512x512-cy0cb96g.png" alt="discord"/>
        </section>
    )
}

export default Header;
