if (!sessionStorage.getItem("logged")) {
  location.href = "https://discord.com/api/oauth2/authorize?client_id=823592815636250675&redirect_uri=https%3A%2F%2Fdotinto.pages.dev%2Fzero%2Fredeem&response_type=code&scope=identify"
}

sessionStorage.setItem("logged", true)

window.onload = () => {
		const fragment = new URLSearchParams(window.location.hash.slice(1));
		const [accessToken, tokenType] = [fragment.get('access_token'), fragment.get('token_type')];

		if (!accessToken) {
			return (document.getElementById('login').style.display = 'block');
		}

		fetch('https://discord.com/api/users/@me', {
			headers: {
				authorization: `${tokenType} ${accessToken}`,
			},
		})
			.then(result => result.json())
			.then(response => {
				const { username, discriminator } = response;
				document.body.innerText += `${username}#${discriminator}`;
			})
			.catch(console.error);
	};